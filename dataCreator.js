const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Paths
const DATA_DIR = path.join(__dirname, 'data');
const ANALYSIS_REPORT_PATH = path.join(DATA_DIR, 'analysis_report.json');
const CATEGORIES_PATH = path.join(DATA_DIR, 'categories.json');
const TAGS_PATH = path.join(DATA_DIR, 'tags.json');
const PRODUCT_OPTIONS_PATH = path.join(DATA_DIR, 'productOptions.json');
const PRODUCTS_PATH = path.join(DATA_DIR, 'products.json');

// Storage for logs
const logs = {
  products: { created: [], skipped: [], errors: [] },
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

function findCategoryByPath(categories, pathParts) {
  if (pathParts.length === 0) return null;
  
  const currentName = pathParts[0];
  const category = categories.find(cat => cat.name === currentName);
  
  if (!category) return null;
  if (pathParts.length === 1) return category;
  
  return findCategoryByPath(category.subcategories || [], pathParts.slice(1));
}

function buildCategoryTree(categories) {
  const categoryMap = new Map();
  const rootCategories = [];

  categories.forEach(cat => {
    const pathString = cat.path.join('/');
    if (!categoryMap.has(pathString)) {
      categoryMap.set(pathString, {
        id: crypto.randomUUID(),
        name: cat.name,
        description: cat.description,
        subcategories: []
      });
    }
  });

  categories.forEach(cat => {
    const pathParts = cat.path;
    
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

function mergeCategoryTrees(existing, newCategories) {
  const merged = [...existing];
  
  function addCategory(category, parentPath = []) {
    const currentPath = [...parentPath, category.name];
    const existingCategory = findCategoryByPath(merged, currentPath);
    
    if (!existingCategory) {
      const newCategory = {
        id: crypto.randomUUID(),
        name: category.name,
        description: category.description || `Categoría ${category.name}`,
        subcategories: []
      };
      
      if (parentPath.length === 0) {
        merged.push(newCategory);
        logs.categories.created.push(category.name);
      } else {
        const parent = findCategoryByPath(merged, parentPath);
        if (parent) {
          parent.subcategories = parent.subcategories || [];
          parent.subcategories.push(newCategory);
          logs.categories.created.push(category.name);
        }
      }
      
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcat => addCategory(subcat, currentPath));
      }
    } else {
      logs.categories.skipped.push(category.name);
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcat => addCategory(subcat, currentPath));
      }
    }
  }
  
  newCategories.forEach(category => addCategory(category));
  
  return merged;
}

async function processCategories(analysisReport) {
  const existingData = await readJsonFile(CATEGORIES_PATH) || { categories: [] };
  const allCategoryPaths = new Set();

  analysisReport.newTags.forEach(tag => {
    if (tag.categoryPath) {
      let currentPath = [];
      tag.categoryPath.forEach(catName => {
        currentPath.push(catName);
        allCategoryPaths.add([...currentPath]);
      });
    }
  });

  const additionalCategories = Array.from(allCategoryPaths).map(path => ({
    path: path,
    name: path[path.length - 1],
    description: `Categoría ${path[path.length - 1]}`
  }));

  const allCategories = [
    ...analysisReport.newCategories,
    ...additionalCategories
  ];

  try {
    const newCategoryTree = buildCategoryTree(allCategories);
    existingData.categories = mergeCategoryTrees(existingData.categories, newCategoryTree);
    
    await writeJsonFile(CATEGORIES_PATH, existingData);
    return { tree: existingData.categories, map: buildCategoryMap(existingData.categories) };
  } catch (error) {
    logs.categories.errors.push(`Error procesando categorías: ${error.message}`);
    return { tree: existingData.categories, map: new Map() };
  }
}

function buildCategoryMap(categoriesData) {
  const map = new Map();

  function addPathsToMap(categories, parentPath = []) {
    if (!Array.isArray(categories)) return;

    categories.forEach(category => {
      const currentPath = [...parentPath, category.name];
      const pathString = currentPath.join('/');
      
      map.set(pathString, category.id);

      if (Array.isArray(category.subcategories)) {
        addPathsToMap(category.subcategories, currentPath);
      }

      if (parentPath.length === 0) {
        map.set(category.name, category.id);
      }
    });
  }

  const categories = categoriesData?.categories || [];
  addPathsToMap(categories);

  return map;
}

function buildTagMap(tagsData) {
  const map = new Map();
  tagsData?.tags?.forEach(tag => {
    const key = `${tag.type}-${tag.name}`;
    map.set(key, tag.id);
  });
  return map;
}

function buildOptionMap(optionsData) {
  const map = new Map();
  optionsData?.productOptions?.forEach(option => {
    const key = `${option.type}-${option.name}`;
    map.set(key, {
      id: option.id,
      price: option.price,
      name: option.name,
      type: option.type
    });
  });
  return map;
}

// Nueva función para obtener todos los IDs de opciones disponibles
function getAllOptionIds(product, optionMap) {
  const allOptions = [];
  
  // Función helper para agregar opciones si existen
  const addOptionsIfExist = (options, type) => {
    if (options && options.length > 0) {
      options.forEach(opt => {
        const key = `${type}-${opt.name}`;
        const option = optionMap.get(key);
        if (option) {
          allOptions.push(option.id);
        }
      });
    } else {
      // Agregar opción por defecto si no hay opciones específicas
      const defaultOption = optionMap.get(`${type}-${getDefaultOptionName(type)}`);
      if (defaultOption) {
        allOptions.push(defaultOption.id);
      }
    }
  };

  // Agregar todas las opciones disponibles
  addOptionsIfExist(product.options.sizes, 'size');
  addOptionsIfExist(product.options.badges, 'badge');
  addOptionsIfExist(product.options.customize, 'customize');

  return allOptions;
}

function getDefaultOptionName(type) {
  switch (type) {
    case 'size':
      return 'Talle Único';
    case 'badge':
      return 'Sin insignia';
    case 'customize':
      return 'Sin dorsal';
    default:
      return '';
  }
}

async function processTags(analysisReport, categoryMap) {
  const existingData = await readJsonFile(TAGS_PATH) || { tags: [] };
  const newTags = [];
  
  for (const newTag of analysisReport.newTags) {
    try {
      const existingByNameAndType = existingData.tags.find(
        tag => tag.name === newTag.name && tag.type === newTag.type
      );
      
      if (existingByNameAndType) {
        logs.tags.skipped.push(`${newTag.name} (nombre existente)`);
        continue;
      }

      let categoryIds = [];
      if (newTag.categoryPath) {
        const pathString = newTag.categoryPath.join('/');
        const categoryId = categoryMap.get(pathString);

        if (!categoryId) {
          throw new Error(`Categoría no encontrada: ${pathString}`);
        }
        categoryIds = [categoryId];
      }

      const tagToAdd = {
        id: crypto.randomUUID(),
        name: newTag.name,
        type: newTag.type,
        categoryPath: categoryIds
      };

      newTags.push(tagToAdd);
      logs.tags.created.push(newTag.name);

    } catch (error) {
      logs.tags.errors.push(`Error procesando tag ${newTag.name}: ${error.message}`);
    }
  }

  existingData.tags = [...existingData.tags, ...newTags];
  await writeJsonFile(TAGS_PATH, existingData);
}

async function processProductOptions(analysisReport) {
  const defaultOptions = [
    {
      id: crypto.randomUUID(),
      name: 'Talle Único',
      type: 'size',
      price: 0,
      image_url: null
    },
    {
      id: crypto.randomUUID(),
      name: 'Sin insignia',
      type: 'badge',
      price: 0,
      image_url: null
    },
    {
      id: crypto.randomUUID(),
      name: 'Sin dorsal',
      type: 'customize',
      price: 0,
      image_url: null
    }
  ];

  const existingData = await readJsonFile(PRODUCT_OPTIONS_PATH) || { productOptions: [] };
  const nameSet = new Set(existingData.productOptions.map(opt => opt.name));

  for (const defaultOption of defaultOptions) {
    if (!existingData.productOptions.some(opt => 
      opt.name === defaultOption.name && opt.type === defaultOption.type
    )) {
      existingData.productOptions.push(defaultOption);
      logs.productOptions.created.push(`${defaultOption.name}`);
    }
  }
  
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
          price: option.price * 3000,
          image_url: option.images || null
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

async function processProducts(analysisReport) {
  try {
    const [categoriesData, tagsData, optionsData, existingProductsData] = await Promise.all([
      readJsonFile(CATEGORIES_PATH),
      readJsonFile(TAGS_PATH),
      readJsonFile(PRODUCT_OPTIONS_PATH),
      readJsonFile(PRODUCTS_PATH) || { products: [] }
    ]);

    const categoryMap = buildCategoryMap(categoriesData);
    const tagMap = buildTagMap(tagsData);
    const optionMap = buildOptionMap(optionsData);

    const products = existingProductsData.products || [];
    const existingNames = new Set(products.map(p => p.name));

    for (const newProduct of analysisReport.newProducts) {
      try {
        if (existingNames.has(newProduct.name)) {
          logs.products.skipped.push(newProduct.name);
          continue;
        }

        const categoryIds = newProduct.categoryIds
          .map(path => categoryMap.get(path))
          .filter(id => id);

        const tagIds = newProduct.tagIds
          .map(tag => tagMap.get(`${tag.type}-${tag.name}`))
          .filter(id => id);

        // Obtener todos los IDs de opciones disponibles
        const allOptionIds = getAllOptionIds(newProduct, optionMap);

        // Crear el producto con la nueva estructura
        const product = {
          id: crypto.randomUUID(),
          name: newProduct.name,
          description: newProduct.description,
          price: (newProduct.price || 0) * 3000,
          image_url: newProduct.images,
          status: 'active',
          categoryIds,
          tagIds,
          variants: [{
            options: allOptionIds
          }]
        };

        products.push(product);
        logs.products.created.push(newProduct.name);

      } catch (error) {
        logs.products.errors.push(`Error procesando producto ${newProduct.name}: ${error.message}`);
      }
    }

    await writeJsonFile(PRODUCTS_PATH, { products });

  } catch (error) {
    console.error('Error en el procesamiento:', error);
  }
}

function printReport() {
  console.log('\n=== PROCESSING REPORT ===\n');

  console.log('Products:');
  console.log(`- Created: ${logs.products.created.length}`);
  console.log(`- Skipped: ${logs.products.skipped.length}`);
  
  console.log('\nCategories:');
  console.log(`- Created: ${logs.categories.created.length}`);
  console.log(`- Skipped: ${logs.categories.skipped.length}`);
  
  console.log('\nTags:');
  console.log(`- Created: ${logs.tags.created.length}`);
  console.log(`- Skipped: ${logs.tags.skipped.length}`);
  
  console.log('\nProduct Options:');
  console.log(`- Created: ${logs.productOptions.created.length}`);
  console.log(`- Skipped: ${logs.productOptions.skipped.length}`);
  
  console.log('\n=== ERRORS ===\n');

  if (logs.products.errors.length) {
    console.log('Product Errors:', logs.products.errors);
  }
  
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

// Nueva función para consolidar datos
async function createInitialData() {
  try {
    const [categories, tags, productOptions, products] = await Promise.all([
      readJsonFile(CATEGORIES_PATH),
      readJsonFile(TAGS_PATH),
      readJsonFile(PRODUCT_OPTIONS_PATH),
      readJsonFile(PRODUCTS_PATH)
    ]);

    const initialData = {
      categories: categories?.categories || [],
      tags: tags?.tags || [],
      productOptions: productOptions?.productOptions || [],
      products: products?.products || []
    };

    const INITIAL_DATA_PATH = path.join(DATA_DIR, 'initial-data.json');
    await writeJsonFile(INITIAL_DATA_PATH, initialData);
    
    console.log('\n=== INITIAL DATA CREATION ===');
    console.log('Created initial-data.json with:');
    console.log(`- Categories: ${initialData.categories.length}`);
    console.log(`- Tags: ${initialData.tags.length}`);
    console.log(`- Product Options: ${initialData.productOptions.length}`);
    console.log(`- Products: ${initialData.products.length}`);

  } catch (error) {
    console.error('Error creating initial-data.json:', error);
  }
}

async function main() {
  try {
    const analysisReport = await readJsonFile(ANALYSIS_REPORT_PATH);
    if (!analysisReport) {
      throw new Error('Analysis report not found');
    }

    const { map: categoryMap } = await processCategories(analysisReport);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const categoriesData = await readJsonFile(CATEGORIES_PATH);
    const updatedCategoryMap = buildCategoryMap(categoriesData);
    
    await processTags(analysisReport, updatedCategoryMap);
    await processProductOptions(analysisReport);
    await processProducts(analysisReport);
    
    printReport();

    // Crear el archivo consolidado al final del proceso
    await createInitialData();
    
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();