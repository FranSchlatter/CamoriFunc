const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Paths
const DATA_DIR = path.join(__dirname, 'data');
const ANALYSIS_REPORT_PATH = path.join(DATA_DIR, 'analysis_report.json');
const CATEGORIES_PATH = path.join(DATA_DIR, 'categories.json');
const TAGS_PATH = path.join(DATA_DIR, 'tags.json');
const PRODUCT_OPTIONS_PATH = path.join(DATA_DIR, 'productOptions.json');

// Storage for logs
const logs = {
  categories: { created: [], skipped: [], errors: [] },
  tags: { created: [], skipped: [], errors: [] },
  productOptions: { created: [], skipped: [], errors: [] }
};

// Utility functions
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Build hierarchical category structure
function buildCategoryTree(categories) {
  const categoryMap = new Map();
  const rootCategories = [];

  // Crear Map con todas las categorías
  categories.forEach(cat => {
    const pathString = cat.path.join('/');
    categoryMap.set(pathString, {
      id: crypto.randomUUID(),
      name: cat.name,
      description: cat.description,
      subcategories: []
    });
  });

  // Procesar cada nivel de path y crear si no existe
  categories.forEach(cat => {
    const pathParts = cat.path;
    
    // Crear categorías padre si no existen
    for (let i = 0; i < pathParts.length - 1; i++) {
      const parentPath = pathParts.slice(0, i + 1).join('/');
      if (!categoryMap.has(parentPath)) {
        const parentCategory = {
          id: crypto.randomUUID(),
          name: pathParts[i],
          description: `Categoría ${pathParts[i]}`,
          subcategories: []
        };
        categoryMap.set(parentPath, parentCategory);
      }
    }
  });

  // Construir la jerarquía
  categoryMap.forEach((category, pathString) => {
    const pathParts = pathString.split('/');
    if (pathParts.length === 1) {
      rootCategories.push(category);
    } else {
      const parentPath = pathParts.slice(0, -1).join('/');
      const parent = categoryMap.get(parentPath);
      if (parent) {
        parent.subcategories.push(category);
      }
    }
  });

  return rootCategories;
}

// Categories processing
async function processCategories(analysisReport) {
  const existingData = await readJsonFile(CATEGORIES_PATH) || { categories: [] };
  const allCategoryPaths = new Set();

  // Recolectar todos los paths de categorías desde tags
  analysisReport.newTags.forEach(tag => {
    if (tag.categoryPath) {
      let currentPath = [];
      tag.categoryPath.forEach(catName => {
        currentPath.push(catName);
        allCategoryPaths.add([...currentPath]);
      });
    }
  });

  // Convertir paths a formato de categorías
  const additionalCategories = Array.from(allCategoryPaths).map(path => ({
    path: path,
    name: path[path.length - 1],
    description: `Categoría ${path[path.length - 1]}`
  }));

  // Combinar categorías existentes con las nuevas de los tags
  const allCategories = [
    ...analysisReport.newCategories,
    ...additionalCategories
  ];

  try {
    const categoryTree = buildCategoryTree(allCategories);
    existingData.categories = categoryTree;
    
    // Log creations
    function logCategories(categories) {
      categories.forEach(cat => {
        logs.categories.created.push(cat.name);
        if (cat.subcategories) {
          logCategories(cat.subcategories);
        }
      });
    }
    logCategories(categoryTree);
    
    await writeJsonFile(CATEGORIES_PATH, existingData);
    return { tree: existingData.categories, map: buildCategoryMap(categoryTree) };
  } catch (error) {
    logs.categories.errors.push(`Error procesando categorías: ${error.message}`);
    return { tree: existingData.categories, map: new Map() };
  }
}

// Build flat map of categories with their IDs
function buildCategoryMap(categories, map = new Map(), parentPath = []) {
  categories.forEach(category => {
    const currentPath = [...parentPath, category.name];
    map.set(currentPath.join('/'), category.id);
    if (category.subcategories) {
      buildCategoryMap(category.subcategories, map, currentPath);
    }
  });
  return map;
}

// Tags processing
async function processTags(analysisReport, categoryMap) {
  const existingData = await readJsonFile(TAGS_PATH) || { tags: [] };
  
  for (const newTag of analysisReport.newTags) {
    try {
      // Verificar duplicados por nombre
      const existingByName = existingData.tags.find(tag => tag.name === newTag.name);
      if (existingByName) {
        logs.tags.skipped.push(`${newTag.name} (nombre existente)`);
        continue;
      }

      let categoryIds = [];
      if (newTag.categoryPath) {
        // Convertir nombres de categorías a IDs
        let currentPath = [];
        categoryIds = newTag.categoryPath.map(catName => {
          currentPath.push(catName);
          const pathString = currentPath.join('/');
          const categoryId = categoryMap.get(pathString);
          if (!categoryId) {
            throw new Error(`Categoría no encontrada: ${pathString}`);
          }
          return categoryId;
        });
      }

      const tagToAdd = {
        id: crypto.randomUUID(),
        name: newTag.name,
        type: newTag.type,
        categoryPath: categoryIds
      };

      existingData.tags.push(tagToAdd);
      logs.tags.created.push(newTag.name);
    } catch (error) {
      logs.tags.errors.push(`Error procesando tag ${newTag.name}: ${error.message}`);
    }
  }
  
  await writeJsonFile(TAGS_PATH, existingData);
}

// Product Options processing
async function processProductOptions(analysisReport) {
  const existingData = await readJsonFile(PRODUCT_OPTIONS_PATH) || { productOptions: [] };
  const nameSet = new Set(existingData.productOptions.map(opt => opt.name));
  
  for (const type in analysisReport.newProductOptions) {
    const options = analysisReport.newProductOptions[type];
    
    for (const option of options) {
      try {
        if (nameSet.has(option.name)) {
          logs.productOptions.skipped.push(`${option.name} (nombre existente)`);
          continue;
        }

        const optionToAdd = {
          id: crypto.randomUUID(),
          name: option.name,
          type: option.type,
          price: option.price.toString(),
          image: option.images || null
        };

        existingData.productOptions.push(optionToAdd);
        nameSet.add(option.name);
        logs.productOptions.created.push(`${option.name}`);
      } catch (error) {
        logs.productOptions.errors.push(`Error procesando opción ${option.name}: ${error.message}`);
      }
    }
  }
  
  await writeJsonFile(PRODUCT_OPTIONS_PATH, existingData);
}

// Print final report
function printReport() {
  console.log('\n=== PROCESSING REPORT ===\n');
  
  console.log('Categories:');
  console.log(`- Created: ${logs.categories.created.length}`);
  console.log(`- Skipped: ${logs.categories.skipped.length}`);
  if (logs.categories.created.length) {
    console.log('Created:', logs.categories.created.join(', '));
  }
  if (logs.categories.skipped.length) {
    console.log('Skipped:', logs.categories.skipped.join(', '));
  }
  
  console.log('\nTags:');
  console.log(`- Created: ${logs.tags.created.length}`);
  console.log(`- Skipped: ${logs.tags.skipped.length}`);
  if (logs.tags.created.length) {
    console.log('Created:', logs.tags.created.join(', '));
  }
  if (logs.tags.skipped.length) {
    console.log('Skipped:', logs.tags.skipped.join(', '));
  }
  
  console.log('\nProduct Options:');
  console.log(`- Created: ${logs.productOptions.created.length}`);
  console.log(`- Skipped: ${logs.productOptions.skipped.length}`);
  if (logs.productOptions.created.length) {
    console.log('Created:', logs.productOptions.created.join(', '));
  }
  if (logs.productOptions.skipped.length) {
    console.log('Skipped:', logs.productOptions.skipped.join(', '));
  }
  
  console.log('\n=== ERRORS ===\n');
  
  if (logs.categories.errors.length) {
    console.log('Category Errors:', logs.categories.errors);
  }
  if (logs.tags.errors.length) {
    console.log('Tag Errors:', logs.tags.errors);
  }
  if (logs.productOptions.errors.length) {
    console.log('Product Option Errors:', logs.productOptions.errors);
  }
}

// Main function
async function main() {
  try {
    const analysisReport = await readJsonFile(ANALYSIS_REPORT_PATH);
    if (!analysisReport) {
      throw new Error('Analysis report not found');
    }
    
    const { map: categoryMap } = await processCategories(analysisReport);
    await processTags(analysisReport, categoryMap);
    await processProductOptions(analysisReport);
    
    printReport();
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
main();