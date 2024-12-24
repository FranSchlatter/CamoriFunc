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

// Función auxiliar para encontrar una categoría por nombre en un árbol > Recordar q obtiene un arbol (pathParts: ["Deporte", "Futbol", "Clubes"]). Analiza si encuentra deporte, si no existe, retorna null. Si existe, revisa si hay algo dsp, si no hay nada, retorna categoria. Si hay algo mas, se vuelve a llamar con recursividad. Recortando el pathParts con un slice. Asi hasta encontrar el path completo o lo que falta crear.
function findCategoryByPath(categories, pathParts) {
  if (pathParts.length === 0) return null;
  
  const currentName = pathParts[0];
  const category = categories.find(cat => cat.name === currentName);
  
  if (!category) return null;
  if (pathParts.length === 1) return category;
  
  return findCategoryByPath(category.subcategories || [], pathParts.slice(1));
}

// Función para crear arbol de category de todo lo q hay
function buildCategoryTree(categories) {
  const categoryMap = new Map();
  const rootCategories = [];

  // Crear Map con todas las categorías
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

// Función para mergear categorías de buildCategoryTree con existentes
function mergeCategoryTrees(existing, newCategories) {
  const merged = [...existing];
  
  function addCategory(category, parentPath = []) {
    const currentPath = [...parentPath, category.name];
    const existingCategory = findCategoryByPath(merged, currentPath);
    
    if (!existingCategory) {
      // Si no existe la categoría en el nivel actual, la agregamos
      const newCategory = {
        id: crypto.randomUUID(),
        name: category.name,
        description: category.description || `Categoría ${category.name}`,
        subcategories: []
      };
      
      // Busca el path para agregar la cat
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
      
      // Procesar subcategorías si existen
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcat => addCategory(subcat, currentPath));
      }
    } else {
      logs.categories.skipped.push(category.name);
      // Si la categoría existe, procesamos sus subcategorías
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcat => addCategory(subcat, currentPath));
      }
    }
  }
  
  // Procesar las nuevas categorías
  newCategories.forEach(category => addCategory(category));
  
  return merged;
}

// Recolecta los paths de categories de lo tags
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
    const newCategoryTree = buildCategoryTree(allCategories);
    // Aquí está el cambio principal: usamos mergeCategoryTrees en lugar de asignación directa
    existingData.categories = mergeCategoryTrees(existingData.categories, newCategoryTree);
    
    await writeJsonFile(CATEGORIES_PATH, existingData);
    return { tree: existingData.categories, map: buildCategoryMap(existingData.categories) };
  } catch (error) {
    logs.categories.errors.push(`Error procesando categorías: ${error.message}`);
    return { tree: existingData.categories, map: new Map() };
  }
}

// Build flat map of categories with their IDs
function buildCategoryMap(categoriesData) {
  const map = new Map();

  // Helper para aplanar los paths
  function addPathsToMap(categories, parentPath = []) {
      if (!Array.isArray(categories)) return;

      categories.forEach(category => {
          const currentPath = [...parentPath, category.name];
          const pathString = currentPath.join('/');
          
          // Agregar el path actual
          map.set(pathString, category.id);

          // Recursivamente agregar subcategorías
          if (Array.isArray(category.subcategories)) {
              addPathsToMap(category.subcategories, currentPath);
          }

          // Para categorías base, también agregar el path directo
          if (parentPath.length === 0) {
              map.set(category.name, category.id);
          }
      });
  }

  // Procesar las categorías
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

function generateVariants(product, optionMap) {
  const variants = [];
  
  // Obtener las opciones disponibles
  const sizes = product.options.sizes?.length > 0
      ? product.options.sizes
      : [{ name: 'Talle Único', type: 'size', price: 0 }];
  const badges = product.options.badges?.length > 0 
      ? product.options.badges 
      : [{ name: 'Sin insignia', type: 'badge', price: 0 }];
  const customize = product.options.customize?.length > 0
      ? product.options.customize
      : [{ name: 'Sin dorsal', type: 'customize', price: 0 }];

  const basePrice = (product.price || 0) * 3000;
  
  for (const size of sizes) {
      for (const badge of badges) {
          for (const cust of customize) {
              const sizeKey = `size-${size.name}`;
              const badgeKey = `badge-${badge.name}`;
              const customizeKey = `customize-${cust.name}`;

              const sizeOption = optionMap.get(sizeKey);
              const badgeOption = optionMap.get(badgeKey);
              const customizeOption = optionMap.get(customizeKey);

              if (!sizeOption || !badgeOption || !customizeOption) {
                  console.warn(`Missing options for variant in ${product.name}:`, {
                      size: !sizeOption ? sizeKey : 'found',
                      badge: !badgeOption ? badgeKey : 'found',
                      customize: !customizeOption ? customizeKey : 'found'
                  });
              }

              const variantPrice = basePrice + 
                  (sizeOption?.price || 0) + 
                  (badgeOption?.price || 0) + 
                  (customizeOption?.price || 0);

              variants.push({
                  price: variantPrice,
                  discountPrice: null,
                  discountStart: null,
                  discountEnd: null,
                  stock: 0,
                  status: 'active',
                  options: [
                      sizeOption?.id,
                      badgeOption?.id,
                      customizeOption?.id
                  ].filter(Boolean),
                  optionDetails: {
                      size: sizeOption ? {
                          id: sizeOption.id,
                          price: sizeOption.price,
                          name: sizeOption.name
                      } : null,
                      badge: badgeOption ? {
                          id: badgeOption.id,
                          price: badgeOption.price,
                          name: badgeOption.name
                      } : null,
                      customize: customizeOption ? {
                          id: customizeOption.id,
                          price: customizeOption.price,
                          name: customizeOption.name
                      } : null
                  }
              });
          }
      }
  }
  
  return variants;
}

// Tags processing
async function processTags(analysisReport, categoryMap) {
  const existingData = await readJsonFile(TAGS_PATH) || { tags: [] };
  const newTags = [];
  
  for (const newTag of analysisReport.newTags) {
      try {
          // Verificar duplicados por nombre y tipo
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

  // Agregar nuevos tags al final
  existingData.tags = [...existingData.tags, ...newTags];
  await writeJsonFile(TAGS_PATH, existingData);
}

// Product Options processing
async function processProductOptions(analysisReport) {
  // En processProductOptions, agregar estas opciones por defecto si no existen
  const defaultOptions = [
    {
        id: crypto.randomUUID(),
        name: 'Talle Único',
        type: 'size',
        price: 0,
        image: null
    },
    {
        id: crypto.randomUUID(),
        name: 'Sin insignia',
        type: 'badge',
        price: 0,
        image: null
    },
    {
        id: crypto.randomUUID(),
        name: 'Sin dorsal',
        type: 'customize',
        price: 0,
        image: null
    }
  ];

  const existingData = await readJsonFile(PRODUCT_OPTIONS_PATH) || { productOptions: [] };
  const nameSet = new Set(existingData.productOptions.map(opt => opt.name));

  // Agregar las opciones por defecto si no existen
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

async function processProducts(analysisReport) {
  try {
      // Read existing data
      const [categoriesData, tagsData, optionsData, existingProductsData] = await Promise.all([
          readJsonFile(CATEGORIES_PATH),
          readJsonFile(TAGS_PATH),
          readJsonFile(PRODUCT_OPTIONS_PATH),
          readJsonFile(PRODUCTS_PATH) || { products: [] }
      ]);

      // Build maps (asegurarnos de que pasamos el objeto completo)
      const categoryMap = buildCategoryMap(categoriesData);
      const tagMap = buildTagMap(tagsData);
      const optionMap = buildOptionMap(optionsData);

      // Initialize products array
      const products = existingProductsData.products || [];
      const existingNames = new Set(products.map(p => p.name));

      // Process each new product
      for (const newProduct of analysisReport.newProducts) {
          try {
              if (existingNames.has(newProduct.name)) {
                  logs.products.skipped.push(newProduct.name);
                  continue;
              }

              // Get category IDs
              const categoryIds = newProduct.categoryIds
                  .map(path => categoryMap.get(path))
                  .filter(id => id);

              // Get tag IDs
              const tagIds = newProduct.tagIds
                  .map(tag => tagMap.get(`${tag.type}-${tag.name}`))
                  .filter(id => id);

              // Generate variants
              const variants = generateVariants(newProduct, optionMap);

              if (variants.length === 0) {
                  throw new Error('No se pudieron generar variantes');
              }

              // Create product
              const product = {
                  id: crypto.randomUUID(),
                  name: newProduct.name,
                  description: newProduct.description,
                  image_url: newProduct.images,
                  status: 'active',
                  categoryIds,
                  tagIds,
                  variants
              };

              products.push(product);
              logs.products.created.push(newProduct.name);

          } catch (error) {
              logs.products.errors.push(`Error procesando producto ${newProduct.name}: ${error.message}`);
          }
      }

      // Save updated products
      await writeJsonFile(PRODUCTS_PATH, { products });

  } catch (error) {
      console.error('Error en el procesamiento:', error);
  }
}

// Print final report
function printReport() {
  console.log('\n=== PROCESSING REPORT ===\n');

  console.log('Products:');
  console.log(`- Created: ${logs.products.created.length}`);
  console.log(`- Skipped: ${logs.products.skipped.length}`);
  // if (logs.products.created.length) {
  //     console.log('Created:', logs.products.created.join(', '));
  // }
  // if (logs.products.skipped.length) {
  //     console.log('Skipped:', logs.products.skipped.join(', '));
  // }
  
  console.log('\nCategories:');
  console.log(`- Created: ${logs.categories.created.length}`);
  console.log(`- Skipped: ${logs.categories.skipped.length}`);
  // if (logs.categories.created.length) {
  //   console.log('Created:', logs.categories.created.join(', '));
  // }
  // if (logs.categories.skipped.length) {
  //   console.log('Skipped:', logs.categories.skipped.join(', '));
  // }
  
  console.log('\nTags:');
  console.log(`- Created: ${logs.tags.created.length}`);
  console.log(`- Skipped: ${logs.tags.skipped.length}`);
  // if (logs.tags.created.length) {
  //   console.log('Created:', logs.tags.created.join(', '));
  // }
  // if (logs.tags.skipped.length) {
  //   console.log('Skipped:', logs.tags.skipped.join(', '));
  // }
  
  console.log('\nProduct Options:');
  console.log(`- Created: ${logs.productOptions.created.length}`);
  console.log(`- Skipped: ${logs.productOptions.skipped.length}`);
  // if (logs.productOptions.created.length) {
  //   console.log('Created:', logs.productOptions.created.join(', '));
  // }
  // if (logs.productOptions.skipped.length) {
  //   console.log('Skipped:', logs.productOptions.skipped.join(', '));
  // }
  
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

// Main function
async function main() {
  try {
      const analysisReport = await readJsonFile(ANALYSIS_REPORT_PATH);
      if (!analysisReport) {
          throw new Error('Analysis report not found');
      }

      // Procesar primero las categorías y obtener el mapa actualizado
      const { map: categoryMap } = await processCategories(analysisReport);
      
      // Esperar un momento para asegurar que los archivos se hayan escrito
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Recargar los datos de categorías para asegurar que tenemos la última versión
      const categoriesData = await readJsonFile(CATEGORIES_PATH);
      const updatedCategoryMap = buildCategoryMap(categoriesData);
      
      // Procesar el resto usando el mapa actualizado
      await processTags(analysisReport, updatedCategoryMap);
      await processProductOptions(analysisReport);
      await processProducts(analysisReport);
      
      printReport();
  } catch (error) {
      console.error('Fatal error:', error);
      process.exit(1);
  }
}

// Run the script
main();