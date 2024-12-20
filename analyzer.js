const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const MAPPINGS = require('./mappings');
const COMPOUND_PHRASES = require('./compoundPhrases');
const args = process.argv.slice(2);

// Configuración inicial con valores por defecto
const CONFIG = {
    baseUrl: 'https://www.grkits3.com',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    },
    dataDir: './data',
    scraping: {
        startPage: 1,          // default
        maxProducts: 50,       // default
        productsPerPage: 50    // default
    }
};

// Procesar argumentos
if (args.length > 0) {
    if (args[0] === 'all') {
        CONFIG.scraping = {
            startPage: 1,
            maxProducts: null,
            productsPerPage: null
        };
    } else {
        CONFIG.scraping = {
            startPage: parseInt(args[0]) || 1,
            maxProducts: parseInt(args[1]) || 50,
            productsPerPage: parseInt(args[2]) || 50
        };
    }
}

// Archivos base actualizados
const BASE_FILES = {
    'categories.json': {
        categories: []
    },
    'tags.json': {
        tags: []
    },
    'products.json': {
        products: []
    },
    'productOptions.json':{
        productOptions: []
    }
};

// Funciones auxiliares
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Función para generar descripción
function generateDescription(nameAnalysis) {
    const version = nameAnalysis.tags.find(t => t.type === "version")?.name || "Version Fanatico";
    const team = nameAnalysis.tags.find(t => t.type === "equipo")?.name || "";
    const season = nameAnalysis.tags.find(t => t.type === "temporada")?.name || "";
    const edition = nameAnalysis.tags.find(t => t.type === "edicion")?.name || "Local";
    const sleeve = nameAnalysis.tags.find(t => t.type === "caracteristica")?.name || "Manga Corta";

    return `${edition} ${version} ${team} ${season} ${sleeve}. Producto de alta calidad con tecnología de secado rápido y materiales premium.`.trim();
}

// Función para generar descripción
function generateDescription(nameAnalysis) {
    const version = nameAnalysis.tags.find(t => t.type === "version")?.name || "Version Fanatico";
    const team = nameAnalysis.tags.find(t => t.type === "equipo")?.name || "";
    const season = nameAnalysis.tags.find(t => t.type === "temporada")?.name || "";
    const edition = nameAnalysis.tags.find(t => t.type === "edicion")?.name || "Local";
    const sleeve = nameAnalysis.tags.find(t => t.type === "caracteristica")?.name || "Manga Corta";

    return `${edition} ${version} ${team} ${season} ${sleeve}. Producto de alta calidad con tecnología de secado rápido y materiales premium.`.trim();
}

// Función para extraer imágenes
function extractImages($) {
    const images = new Set();
    
    // Obtener imágenes de alta calidad del listado
    $('#goodsimagelist li a').each((_, el) => {
        const imgUrl = $(el).attr('data_img');
        if (imgUrl && !imgUrl.includes('nophoto')) {
            images.add(imgUrl);
        }
    });

    // Si no encontramos imágenes en el listado, intentar con la imagen principal
    if (images.size === 0) {
        const mainImage = $('.jqzoom').attr('rel');
        if (mainImage && !mainImage.includes('nophoto')) {
            images.add(mainImage);
        }
    }

    // Backup: intentar con las miniaturas si aún no hay imágenes
    if (images.size === 0) {
        $('.smallimage img').each((_, el) => {
            const src = $(el).attr('src');
            if (src && !src.includes('nophoto')) {
                images.add(src);
            }
        });
    }

    return Array.from(images);
}

// Función para extraer precio base
function extractBasePrice($) {
    // Buscar el precio en el elemento específico con class 'goods_price'
    const priceElement = $('.goods_price').text().trim();
    
    // Extraer el número del formato "US$ XX.XX"
    const priceMatch = priceElement.match(/US\$\s*(\d+\.?\d*)/);
    
    // Si encontramos un precio, lo convertimos a número y redondeamos
    const price = priceMatch ? Math.round(parseFloat(priceMatch[1])) : 0;

    return price;
}

// Helpers de verificación para categorías y productOptions (agregar al inicio del archivo)
const categoryExists = (existingCategories, categoryToCheck) => {
    // Función auxiliar recursiva para buscar en subcategorías
    const checkSubcategories = (categories) => {
        if (!categories) return false;
        
        for (const category of categories) {
            // Verificar el nombre de la categoría actual
            if (category.name === categoryToCheck.name) {
                return true;
            }
            
            // Si tiene subcategorías, buscar recursivamente en ellas
            if (category.subcategories && category.subcategories.length > 0) {
                if (checkSubcategories(category.subcategories)) {
                    return true;
                }
            }
        }
        
        return false;
    };

    // Verificar en categorías principales
    const existsInMain = existingCategories.categories.some(c => 
        c.name === categoryToCheck.name
    );
    
    if (existsInMain) return true;

    // Verificar recursivamente en todas las subcategorías
    return checkSubcategories(existingCategories.categories);
};

const productOptionExists = (existingOptions, optionToCheck) => {
    return existingOptions.productOptions.some(option => 
        option.name === optionToCheck.name && 
        option.type === optionToCheck.type
    );
};

async function analyzeProductDetail(url, productName) {
    try {
        const response = await axios.get(url, { headers: CONFIG.headers });
        const $ = cheerio.load(response.data);
        
        const unmappedOptions = {
            badges: new Set(),
            customize: new Set(),
            sizes: new Set()
        };

        const matchedOptions = {
            badges: new Set(),
            customize: new Set(),
            sizes: new Set()
        };

        const productData = {
            name: productName,
            images: extractImages($),
            price: extractBasePrice($),
            sizes: [],
            badges: [],
            customize: []
        };

        // Helper para extraer precio
        const extractPrice = (priceStr) => {
            if (!priceStr) return 0;
            const match = priceStr.match(/\+US\$\s*(\d+\.?\d*)/);
            return match ? parseFloat(match[1]) : 0;
        };

        // Helper para encontrar el nombre del mapping que coincide
        const findMappingName = (mappings, itemName) => {
            for (const [key, mapping] of Object.entries(mappings)) {
                if (mapping.matches.includes(itemName)) {
                    return key;
                }
            }
            return itemName;
        };

        // Validar si existe la estructura de mappings
        const mappings = MAPPINGS.productOptions || {
            sizes: {},
            badges: {},
            customize: {}
        };

        // Analizar Sizes
        $('dl.viewdl.picsize').each((_, dl) => {
            const $dl = $(dl);
            if ($dl.find('dt').text().trim() === 'Size') {
                $dl.find('dd a.sale_property').each((_, el) => {
                    const $el = $(el);
                    const name = $el.attr('data_name');
                    const priceStr = $el.find('.addprice').text().trim();
                    
                    productData.sizes.push({ name, price: priceStr });
                    
                    const isMatched = Object.values(mappings.sizes).some(mapping => 
                        mapping.matches.includes(name)
                    );
                    
                    if (isMatched) {
                        const mappedName = findMappingName(mappings.sizes, name);
                        matchedOptions.sizes.add(JSON.stringify({
                            name: mappedName,
                            type: "size",
                            price: extractPrice(priceStr)
                        }));
                    } else {
                        unmappedOptions.sizes.add(JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "size",
                            price: extractPrice(priceStr)
                        }));
                    }
                });
            }
        });

        // Analizar Badges
        $('dl.viewdl.viewcolor').each((_, dl) => {
            const $dl = $(dl);
            if ($dl.find('dt').text().trim() === 'Badge') {
                $dl.find('dd a.property_image').each((_, el) => {
                    const $el = $(el);
                    const name = $el.attr('data_name');
                    const priceStr = $el.find('.addprice').text().trim();
                    const image = $el.attr('data_img');
                    
                    productData.badges.push({ name, price: priceStr, image });
                    
                    const isMatched = Object.values(mappings.badges).some(mapping => 
                        mapping.matches.includes(name)
                    );
                    
                    if (isMatched) {
                        const mappedName = findMappingName(mappings.badges, name);
                        matchedOptions.badges.add(JSON.stringify({
                            name: mappedName,
                            type: "badge",
                            price: extractPrice(priceStr),
                            images: image || null
                        }));
                    } else {
                        unmappedOptions.badges.add(JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "badge",
                            price: extractPrice(priceStr),
                            images: image || null
                        }));
                    }
                });
            }
        });

        // Analizar Customize
        $('dl.viewdl').each((_, dl) => {
            const $dl = $(dl);
            if ($dl.find('dt').text().trim() === 'Customized') {
                $dl.find('dd a.sale_property').each((_, el) => {
                    const $el = $(el);
                    const name = $el.attr('data_name');
                    const priceStr = $el.find('.addprice').text().trim();
                    
                    productData.customize.push({ name, price: priceStr });
                    
                    const isMatched = Object.values(mappings.customize).some(mapping => 
                        mapping.matches.includes(name)
                    );
                    
                    if (isMatched) {
                        const mappedName = findMappingName(mappings.customize, name);
                        matchedOptions.customize.add(JSON.stringify({
                            name: mappedName,
                            type: "customize",
                            price: extractPrice(priceStr)
                        }));
                    } else {
                        unmappedOptions.customize.add(JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "customize",
                            price: extractPrice(priceStr)
                        }));
                    }
                });
            }
        });

        return {
            productData,
            unmappedOptions: {
                badges: Array.from(unmappedOptions.badges).map(opt => JSON.parse(opt)),
                customize: Array.from(unmappedOptions.customize).map(opt => JSON.parse(opt)),
                sizes: Array.from(unmappedOptions.sizes).map(opt => JSON.parse(opt))
            },
            matchedOptions: {
                badges: Array.from(matchedOptions.badges).map(opt => JSON.parse(opt)),
                customize: Array.from(matchedOptions.customize).map(opt => JSON.parse(opt)),
                sizes: Array.from(matchedOptions.sizes).map(opt => JSON.parse(opt))
            }
        };
    } catch (error) {
        console.error(`Error analizando detalle del producto: ${error.message}`);
        return null;
    }
}

function analyzeProductName(name) {
    const foundCategories = new Set();
    // Usamos un Map para los tags para evitar duplicados
    const foundTagsMap = new Map();
    const unrecognizedTerms = new Set();
    const recognizedWords = new Set();

    let normalizedName = name.toUpperCase();
    let processedName = name;
    let hasLongSleeve = false;

    // Helper para agregar tags sin duplicados
    const addTag = (tag) => {
        const key = `${tag.type}-${tag.name}`;
        foundTagsMap.set(key, tag);
    };

    // Definir mappingTypes al inicio
    const mappingTypes = {
        categories: MAPPINGS.categories,
        teams: MAPPINGS.tags.teams,
        versions: MAPPINGS.tags.versions,
        editions: MAPPINGS.tags.editions,
        features: MAPPINGS.tags.features,
        colors: MAPPINGS.tags.colors
    };

    // Procesar temporadas
    const temporadaRegex = /(\d{4})(?:-(\d{2,4})|\/(\d{2,4})|\s+(\d{2,4}))|(\d{4})/g;
    const temporadaMatches = name.matchAll(temporadaRegex);
    
    for (const match of temporadaMatches) {
        const temporada = match[0];
        recognizedWords.add(temporada);
        addTag({
            name: temporada,
            type: "temporada",
            categoryPath: ["Productos"]
        });
        
        temporada.split(/[-\/\s]/).forEach(num => {
            recognizedWords.add(num.toLowerCase());
        });
    }

    // Procesar frases compuestas
    COMPOUND_PHRASES.phrases.forEach(({ phrase, normalized, type }) => {
        if (normalizedName.includes(phrase.toUpperCase())) {
            if (normalized === 'Manga Larga') {
                hasLongSleeve = true;
            }
            phrase.split(' ').forEach(word => recognizedWords.add(word.toLowerCase()));
            processedName = processedName.replace(phrase, `__${normalized}__`);
            
            let categoryPath = ["Productos"];
            if (type === "equipo") {
                categoryPath = ["Deportes", "Fútbol", "Clubes"];
            }
            
            addTag({
                name: normalized,
                type: type,
                categoryPath: categoryPath
            });
        }
    });

    // Procesar cada tipo de mapping
    Object.entries(mappingTypes).forEach(([mappingType, mappingData]) => {
        Object.entries(mappingData).forEach(([itemName, data]) => {
            if (data.matches) {
                // Match más estricto usando regex
                const found = data.matches.some(match => {
                    const regex = new RegExp(`(^|\\s|[^a-zA-Z])${match}($|\\s|[^a-zA-Z])`, 'i');
                    if (regex.test(normalizedName)) {
                        match.split(' ').forEach(word => recognizedWords.add(word.toLowerCase()));
                        return true;
                    }
                    return false;
                });

                if (found) {
                    if (mappingType === 'categories') {
                        foundCategories.add({
                            path: data.categoryPath,
                            name: itemName,
                            description: data.description
                        });
                    } else {
                        addTag({
                            name: itemName,
                            type: data.type,
                            categoryPath: data.categoryPath
                        });
                    }
                }
            }
        });
    });

    // Agregar manga corta/larga (una sola vez)
    if (hasLongSleeve) {
        addTag({
            name: "Manga Larga",
            type: "caracteristica",
            categoryPath: ["Productos"]
        });
    } else {
        addTag({
            name: "Manga Corta",
            type: "caracteristica",
            categoryPath: ["Productos"]
        });
    }

    // Identificar términos no reconocidos
    processedName.split(/[\s-]+/).forEach(word => {
        if (!recognizedWords.has(word.toLowerCase()) && 
            word.length > 2 && 
            !word.startsWith('__') && 
            !word.endsWith('__') &&
            !Object.values(mappingTypes).some(mappingData => 
                Object.values(mappingData).some(data => 
                    data.matches?.some(match => 
                        match.toLowerCase().includes(word.toLowerCase())
                    )
                )
            )) {
            unrecognizedTerms.add(word);
        }
    });

    return {
        categories: Array.from(foundCategories),
        tags: Array.from(foundTagsMap.values()), // Convertir el Map a Array
        unrecognized: Array.from(unrecognizedTerms)
    };
}

async function getProductsFromPage(pageNum) {
    try {
        const url = `${CONFIG.baseUrl}/Products/list-r${pageNum}.html`;
        const response = await axios.get(url, { headers: CONFIG.headers });
        const $ = cheerio.load(response.data);
        
        const products = [];
        
        // Verificar si la página existe
        if ($('li .pro_content').length > 0) {
            $('li .pro_content').each((_, el) => {
                const $el = $(el);
                const $link = $el.find('a');
                const name = $link.attr('title');
                const detailUrl = $link.attr('href');
                const price = $el.find('.price').text().trim();
                const image = $el.find('img').attr('src');
                
                if (name) {
                    products.push({
                        name,
                        detailUrl: detailUrl ? `${CONFIG.baseUrl}${detailUrl}` : null,
                        price,
                        image,
                        itemNo: $el.find('.itemNo').text().trim()
                    });
                }
            });
        }
        
        return products;
    } catch (error) {
        console.error(`Error en página ${pageNum}:`, error.message);
        return [];
    }
}

async function getTotalPages(startPage) {
    try {
        const response = await axios.get(`${CONFIG.baseUrl}/Products/list-r${startPage}.html`, { headers: CONFIG.headers });
        const $ = cheerio.load(response.data);
        
        let maxPage = startPage;
        $('.pagination li').each((_, el) => {
            const pageText = $(el).text().trim();
            const pageNum = parseInt(pageText);
            if (!isNaN(pageNum) && pageNum > maxPage) {
                maxPage = pageNum;
            }
        });

        return maxPage;
    } catch (error) {
        console.error('Error obteniendo total de páginas:', error.message);
        if (error.response) {
            console.error('Estado:', error.response.status);
        }
        return startPage;
    }
}

async function analyzeExistingData() {
    try {
        const categoriesPath = path.join(CONFIG.dataDir, 'categories.json');
        const tagsPath = path.join(CONFIG.dataDir, 'tags.json');
        const productOptionsPath = path.join(CONFIG.dataDir, 'productOptions.json');

        const [categoriesData, tagsData, productOptionsData] = await Promise.all([
            fs.readFile(categoriesPath, 'utf8'),
            fs.readFile(tagsPath, 'utf8'),
            fs.readFile(productOptionsPath, 'utf8')
        ]);

        return {
            categories: JSON.parse(categoriesData),
            tags: JSON.parse(tagsData),
            productOptions: JSON.parse(productOptionsData)
        };
    } catch (error) {
        console.log('Error leyendo archivos existentes:', error.message);
        return {
            categories: BASE_FILES['categories.json'],
            tags: BASE_FILES['tags.json'],
            productOptions: BASE_FILES['productOptions.json'],
            products: BASE_FILES['products.json']
        };
    }
}

// Función para asegurar que existe el directorio de datos
async function ensureDataDirectory() {
    try {
        await fs.access(CONFIG.dataDir);
    } catch {
        await fs.mkdir(CONFIG.dataDir);
    }
}

// Función para crear archivos base si no existen
async function ensureBaseFiles() {
    for (const [filename, content] of Object.entries(BASE_FILES)) {
        const filePath = path.join(CONFIG.dataDir, filename);
        try {
            await fs.access(filePath);
        } catch {
            await fs.writeFile(filePath, JSON.stringify(content, null, 2));
        }
    }
}

async function analyzeAllProducts() {
    try {
        console.log('\n=== Iniciando análisis de productos ===\n');
        console.log('Configuración:');
        console.log(`- Página inicial: ${CONFIG.scraping.startPage}`);
        console.log(`- Productos máximos: ${CONFIG.scraping.maxProducts || 'Sin límite'}`);
        console.log(`- Productos por página: ${CONFIG.scraping.productsPerPage || 'Todos'}`);
        
        const { categories: existingCategories, tags: existingTags, productOptions: existingProductOptions } = await analyzeExistingData();

        const productsPath = path.join(CONFIG.dataDir, 'products.json');
        let existingProducts = [];
        try {
            const productsData = await fs.readFile(productsPath, 'utf8');
            existingProducts = JSON.parse(productsData).products;
        } catch (error) {
            console.log('No hay productos previos');
        }

        const existingProductNames = new Set(existingProducts.map(p => p.name));
        const newProducts = [];
        const newCategories = new Map();
        const newTags = new Map();
        const newProductOptions = {
            badges: new Map(),
            customize: new Map(),
            sizes: new Map()
        };
        const allUnrecognizedTerms = new Set();
        const allUnmappedOptions = {
            badges: new Set(),
            customize: new Set(),
            sizes: new Set()
        };
        
        const totalPages = await getTotalPages(CONFIG.scraping.startPage);
        const maxPages = Math.min(
            CONFIG.scraping.maxProducts && CONFIG.scraping.productsPerPage ? Math.ceil(CONFIG.scraping.maxProducts / CONFIG.scraping.productsPerPage) : totalPages,
            totalPages
        );
        let processedProducts = 0;
        let shouldStop = false;

        let page = CONFIG.scraping.startPage;
        while (!shouldStop) {
            const products = await getProductsFromPage(page);
            let pageProducts = products;
            let productCount = 0

            // Si hay límite de productos por página, aplicarlo
            if (CONFIG.scraping.productsPerPage) {
                pageProducts = products.slice(0, CONFIG.scraping.productsPerPage);
            }

            for (const product of pageProducts) {
                processedProducts++;
                productCount++;
            
                // Verificar límite
                if (CONFIG.scraping.maxProducts && processedProducts > CONFIG.scraping.maxProducts) {
                    console.log(`\nAlcanzado límite máximo de productos (${CONFIG.scraping.maxProducts})`);
                    shouldStop = true;
                    break;
                }
            
                // Verificar si ya existe
                if (existingProductNames.has(product.name)) {
                    console.log(`\nProducto ya existente: ${product.name}`);
                    continue;
                }
            
                console.log(`\nProcesando Producto ${processedProducts}${CONFIG.scraping.maxProducts ? '/' + CONFIG.scraping.maxProducts : ''}`);
                console.log(`Página ${page} - Producto ${productCount} : ${product.name}`);

                const nameAnalysis = analyzeProductName(product.name);
                nameAnalysis.unrecognized.forEach(term => allUnrecognizedTerms.add(term));

                // Solo agregar categorías que no existen en categories.json
                nameAnalysis.categories.forEach(category => {
                    const categoryKey = `${category.path.join('/')}/${category.name}`;
                    if (!categoryExists(existingCategories, category) && !newCategories.has(categoryKey)) {
                        newCategories.set(categoryKey, {
                            path: category.path,
                            name: category.name,
                            description: category.description
                        });
                    }
                });

                if (product.detailUrl) {
                    const detailAnalysis = await analyzeProductDetail(product.detailUrl, product.name);
                    if (detailAnalysis) {
                        product.options = detailAnalysis.productData;
                        
                        // Procesar opciones no mapeadas
                        Object.entries(detailAnalysis.unmappedOptions).forEach(([type, options]) => {
                            options.forEach(option => {
                                allUnmappedOptions[type].add(JSON.stringify(option));
                            });
                        });

                        // Procesar opciones mapeadas que no existen en productOptions.json
                        Object.entries(detailAnalysis.matchedOptions).forEach(([type, options]) => {
                            options.forEach(option => {
                                if (!productOptionExists(existingProductOptions, option) && !newProductOptions[type].has(option.name)) {
                                    newProductOptions[type].set(option.name, option);
                                }
                            });
                        });

                        const productData = {
                            name: product.name,
                            description: generateDescription(nameAnalysis),
                            price: detailAnalysis.productData.price,
                            images: detailAnalysis.productData.images,
                            status: 'active',
                            categoryIds: nameAnalysis.categories.map(c => c.path.join('/')),
                            tagIds: nameAnalysis.tags.map(t => ({type: t.type, name: t.name})),
                            options: {
                                sizes: detailAnalysis.matchedOptions.sizes,
                                badges: detailAnalysis.matchedOptions.badges,
                                customize: detailAnalysis.matchedOptions.customize
                            }
                        };
                        newProducts.push(productData);

                    }
                    await delay(1000);
                }

                nameAnalysis.tags.forEach(tag => {
                    const tagKey = `${tag.name}-${tag.type}`;
                    if (!existingTags.tags.find(t => t.name === tag.name && t.type === tag.type) && !newTags.has(tagKey)) {
                        newTags.set(tagKey, tag);
                    }
                });
            }

            page++;
            if (pageProducts.length === 0) {
                shouldStop = true;
            }
        }

        processedProducts = processedProducts - 1

        // Generar reporte
        const report = {
            newProducts,
            newCategories: Array.from(newCategories.values()),
            newTags: Array.from(newTags.values()),
            newProductOptions: {
                badges: Array.from(newProductOptions.badges.values()),
                customize: Array.from(newProductOptions.customize.values()),
                sizes: Array.from(newProductOptions.sizes.values())
            },
            unrecognizedTerms: Array.from(allUnrecognizedTerms),
            unmappedOptions: {
                badges: Array.from(allUnmappedOptions.badges).map(opt => JSON.parse(opt)),
                customize: Array.from(allUnmappedOptions.customize).map(opt => JSON.parse(opt)),
                sizes: Array.from(allUnmappedOptions.sizes).map(opt => JSON.parse(opt))
            },
            statistics: {
                totalPages,
                processedPages: maxPages,
                processedProducts,
                newProductsFound: newProducts.length,
                newCategoriesFound: newCategories.size,
                newTagsFound: newTags.size,
                newOptionsFound: {
                    badges: newProductOptions.badges.size,
                    customize: newProductOptions.customize.size,
                    sizes: newProductOptions.sizes.size
                },
                unrecognizedTermsFound: allUnrecognizedTerms.size,
                unmappedOptionsFound: {
                    badges: allUnmappedOptions.badges.size,
                    customize: allUnmappedOptions.customize.size,
                    sizes: allUnmappedOptions.sizes.size
                }
            }
        };

        const reportPath = path.join(CONFIG.dataDir, 'analysis_report.json');
        await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

        console.log('\n=== Análisis completado ===');
        console.log(`Total productos procesados: ${processedProducts}`);
        console.log(`Nuevos productos encontrados: ${newProducts.length}`);
        console.log(`Nuevas categorías encontradas: ${newCategories.size}`);
        console.log(`Nuevos tags encontrados: ${newTags.size}`);
        console.log('\nNuevas opciones encontradas:');
        Object.entries(newProductOptions).forEach(([type, options]) => {
            console.log(`- ${type}: ${options.size}`);
        });

        console.log(`\nTérminos no reconocidos: ${allUnrecognizedTerms.size}`);
        console.log('\nOpciones no reconocidas:');
        Object.entries(allUnmappedOptions).forEach(([type, options]) => {
            console.log(`- ${type}: ${options.size}`);
        });

        return report;
    } catch (error) {
        console.error('Error en el análisis:', error);
    }
}

// Función de inicialización
async function init() {
    try {
        console.log('Inicializando estructura de datos...');
        await ensureDataDirectory();
        await ensureBaseFiles();
        await analyzeAllProducts();
    } catch (error) {
        console.error('Error en la inicialización:', error);
    }
}

// Ejecutar el script
init();