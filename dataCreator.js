const fs = require('fs').promises;
const path = require('path');

// Paths
const DATA_DIR = path.join(__dirname, 'data');
const ANALYSIS_REPORT_PATH = path.join(DATA_DIR, 'analysis_report.json');
const CATEGORIES_PATH = path.join(DATA_DIR, 'categories.json');
const TAGS_PATH = path.join(DATA_DIR, 'tags.json');
const PRODUCT_OPTIONS_PATH = path.join(DATA_DIR, 'productOptions.json');

// Storage for logs
const logs = {
  categories: { created: [], errors: [] },
  tags: { created: [], errors: [] },
  productOptions: { created: [], errors: [] }
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

// Categories processing
async function processCategories(analysisReport) {
  const existingData = await readJsonFile(CATEGORIES_PATH) || { categories: [] };
  const categoryMap = new Map(existingData.categories.map(cat => [cat.name, cat]));
  
  for (const category of analysisReport.categories) {
    try {
      let parentId = null;
      
      // Process each level in the path
      for (let i = 0; i < category.path.length; i++) {
        const name = category.path[i];
        const description = i === category.path.length - 1 ? category.description : "Vacío";
        
        if (!categoryMap.has(name)) {
          const newCategory = {
            id: i === category.path.length - 1 ? category.id : `${name}-${Date.now()}`,
            name,
            description,
            parentId
          };
          
          categoryMap.set(name, newCategory);
          logs.categories.created.push(name);
        }
        
        parentId = categoryMap.get(name).id;
      }
    } catch (error) {
      logs.categories.errors.push(`Error processing category ${category.name}: ${error.message}`);
    }
  }
  
  existingData.categories = Array.from(categoryMap.values());
  await writeJsonFile(CATEGORIES_PATH, existingData);
  return categoryMap;
}

// Tags processing
async function processTags(analysisReport, categoryMap) {
  const existingData = await readJsonFile(TAGS_PATH) || { tags: [] };
  const tagMap = new Map(existingData.tags.map(tag => [tag.name, tag]));
  
  for (const tag of analysisReport.tags) {
    try {
      const categoryPath = tag.metadata.categoryPath;
      const categoryIds = [];
      let validPath = true;
      
      // Verify and convert category names to IDs
      for (const catName of categoryPath) {
        const category = Array.from(categoryMap.values()).find(c => c.name === catName);
        if (!category) {
          validPath = false;
          logs.tags.errors.push(`Category ${catName} not found for tag ${tag.name}`);
          break;
        }
        categoryIds.push(category.id);
      }
      
      if (validPath) {
        const newTag = {
          id: tag.id,
          name: tag.name,
          type: tag.type,
          categoryPath: categoryIds
        };
        
        tagMap.set(tag.name, newTag);
        logs.tags.created.push(tag.name);
      }
    } catch (error) {
      logs.tags.errors.push(`Error processing tag ${tag.name}: ${error.message}`);
    }
  }
  
  existingData.tags = Array.from(tagMap.values());
  await writeJsonFile(TAGS_PATH, existingData);
}

// Product Options processing
async function processProductOptions(analysisReport) {
  const existingData = await readJsonFile(PRODUCT_OPTIONS_PATH) || { productOptions: [] };
  const optionsMap = new Map(existingData.productOptions.map(opt => [opt.name, opt]));
  
  for (const [name, option] of Object.entries(analysisReport.productOptions)) {
    try {
      const newOption = {
        name,
        type: option.type,
        price: option.price.toString(),
        image: option.images
      };
      
      optionsMap.set(name, newOption);
      logs.productOptions.created.push(name);
    } catch (error) {
      logs.productOptions.errors.push(`Error processing option ${name}: ${error.message}`);
    }
  }
  
  existingData.productOptions = Array.from(optionsMap.values());
  await writeJsonFile(PRODUCT_OPTIONS_PATH, existingData);
}

// Print final report
function printReport() {
  console.log('\n=== PROCESSING REPORT ===\n');
  
  console.log('Categories Created:', logs.categories.created.length);
  if (logs.categories.created.length) {
    console.log('Names:', logs.categories.created.join(', '));
  }
  
  console.log('\nTags Created:', logs.tags.created.length);
  if (logs.tags.created.length) {
    console.log('Names:', logs.tags.created.join(', '));
  }
  
  console.log('\nProduct Options Created:', logs.productOptions.created.length);
  if (logs.productOptions.created.length) {
    console.log('Names:', logs.productOptions.created.join(', '));
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
    
    const categoryMap = await processCategories(analysisReport);
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