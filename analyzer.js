const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const MAPPINGS = require('./mappings');
const COMPOUND_PHRASES = require('./compoundPhrases');

const CONFIG = {
    baseUrl: 'https://www.grkits3.com',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    },
    dataDir: './data'
};

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
const generateUUID = () => crypto.randomUUID();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function analyzeProductDetail(url) {
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
                        matchedOptions.sizes.add(JSON.stringify({
                            name,
                            matches: [name],
                            type: "size",
                            price: extractPrice(priceStr)
                        }));
                    } else {
                        unmappedOptions.sizes.add(JSON.stringify({
                            matches: [name],
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
                        matchedOptions.badges.add(JSON.stringify({
                            name,
                            matches: [name],
                            type: "badge",
                            price: extractPrice(priceStr),
                            images: image || null
                        }));
                    } else {
                        unmappedOptions.badges.add(JSON.stringify({
                            matches: [name],
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
                        matchedOptions.customize.add(JSON.stringify({
                            name,
                            matches: [name],
                            type: "customize",
                            price: extractPrice(priceStr)
                        }));
                    } else {
                        unmappedOptions.customize.add(JSON.stringify({
                            matches: [name],
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
    const foundTags = new Set();
    const unrecognizedTerms = new Set();
    const recognizedWords = new Set();

    let normalizedName = name.toUpperCase();
    let processedName = name;
    let hasLongSleeve = false;

    // Procesar temporadas
    const temporadaRegex = /(\d{4})(?:-(\d{2,4})|\/(\d{2,4})|\s+(\d{2,4}))|(\d{4})/g;
    const temporadaMatches = name.matchAll(temporadaRegex);
    
    for (const match of temporadaMatches) {
        const temporada = match[0];
        recognizedWords.add(temporada);
        foundTags.add({
            id: generateUUID(),
            name: temporada,
            type: "temporada",
            metadata: {
                categoryPath: ["Productos"]
            }
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
            
            foundTags.add({
                id: generateUUID(),
                name: normalized,
                type: type,
                metadata: {
                    categoryPath: categoryPath
                }
            });
        }
    });

    // Verificar todos los tipos de mappings
    const mappingTypes = {
        categories: MAPPINGS.categories,
        teams: MAPPINGS.tags.teams,
        versions: MAPPINGS.tags.versions,
        editions: MAPPINGS.tags.editions,
        features: MAPPINGS.tags.features,
        colors: MAPPINGS.tags.colors
    };

    // Procesar cada tipo de mapping
    Object.entries(mappingTypes).forEach(([mappingType, mappingData]) => {
        Object.entries(mappingData).forEach(([itemName, data]) => {
            if (data.matches) {
                const found = data.matches.some(match => {
                    if (normalizedName.includes(match.toUpperCase())) {
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
                        foundTags.add({
                            id: generateUUID(),
                            name: itemName,
                            type: data.type,
                            metadata: {
                                categoryPath: data.categoryPath
                            }
                        });
                    }
                }
            }
        });
    });

    // Agregar manga corta por defecto
    if (!hasLongSleeve) {
        foundTags.add({
            id: generateUUID(),
            name: "Manga Corta",
            type: "caracteristica",
            metadata: {
                categoryPath: ["Productos"]
            }
        });
    }

    // Identificar términos no reconocidos solo si realmente no están en ningún mapping
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
        tags: Array.from(foundTags),
        unrecognized: Array.from(unrecognizedTerms)
    };
}

async function getTotalProducts() {
    const firstPage = await getProductsFromPage(1);
    const totalPages = await getTotalPages();
    return firstPage.length * totalPages;
}

async function getProductsFromPage(pageNum) {
    try {
        const url = `${CONFIG.baseUrl}/Products/list-r${pageNum}.html`;
        const response = await axios.get(url, { headers: CONFIG.headers });
        const $ = cheerio.load(response.data);
        
        const products = [];
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
        return products;
    } catch (error) {
        console.error(`Error en página ${pageNum}:`, error.message);
        return [];
    }
}

async function getTotalPages() {
    try {
        const response = await axios.get(`${CONFIG.baseUrl}/Products/list-r1.html`, { headers: CONFIG.headers });
        const $ = cheerio.load(response.data);
        
        let maxPage = 1;
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
        return 1;
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
            productOptions: BASE_FILES['productOptions.json']
        };
    }
}

// Función para asegurar que existe el directorio de datos
async function ensureDataDirectory() {
    try {
        await fs.access(CONFIG.dataDir);
        console.log('✓ Directorio de datos existente');
    } catch {
        await fs.mkdir(CONFIG.dataDir);
        console.log('✓ Directorio de datos creado');
    }
}

// Función para crear archivos base si no existen
async function ensureBaseFiles() {
    for (const [filename, content] of Object.entries(BASE_FILES)) {
        const filePath = path.join(CONFIG.dataDir, filename);
        try {
            await fs.access(filePath);
            console.log(`✓ Archivo ${filename} existente`);
        } catch {
            await fs.writeFile(filePath, JSON.stringify(content, null, 2));
            console.log(`✓ Archivo ${filename} creado`);
        }
    }
}

// Analizar productos
async function analyzeAllProducts() {
    try {
        console.log('\n=== Iniciando análisis de productos ===\n');
        
        const { categories: existingCategories, tags: existingTags, productOptions: existingProductOptions } = await analyzeExistingData();
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
        
        const totalPages = await getTotalPages();
        console.log(`Total de páginas detectadas: ${totalPages}`);
        const totalProducts = await getTotalProducts();
        console.log(`Total de productos detectados: ${totalProducts}`);
        let processedProducts = 0;

        for (let page = 1; page <= totalPages; page++) {
            const products = await getProductsFromPage(page);
            
            for (const product of products) {
                processedProducts++;
                console.log(`Procesando producto (${processedProducts}/${totalProducts}) - ${product.name}`);

                const nameAnalysis = analyzeProductName(product.name);
                nameAnalysis.unrecognized.forEach(term => allUnrecognizedTerms.add(term));

                // Solo agregar categorías que no existen en categories.json
                nameAnalysis.categories.forEach(category => {
                    const categoryKey = `${category.path.join('/')}/${category.name}`;
                    const existingCategory = existingCategories.categories.find(c => 
                        c.name === category.name
                    );
                    
                    if (!existingCategory && !newCategories.has(categoryKey)) {
                        newCategories.set(categoryKey, {
                            id: generateUUID(),
                            path: category.path,
                            name: category.name,
                            description: category.description
                        });
                    }
                });

                if (product.detailUrl) {
                    const detailAnalysis = await analyzeProductDetail(product.detailUrl);
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
                                const existingOption = existingProductOptions[type]?.find(opt => 
                                    opt.name === option.name
                                );
                                
                                if (!existingOption && !newProductOptions[type].has(option.name)) {
                                    newProductOptions[type].set(option.name, option);
                                }
                            });
                        });
                    }
                    await delay(1000);
                }
                
                nameAnalysis.tags.forEach(tag => {
                    if (!existingTags.tags.find(t => t.name === tag.name) && !newTags.has(tag.name)) {
                        newTags.set(tag.name, tag);
                    }
                });
            }
        }

        // Generar reporte
        console.log('\n=== Generando reporte final ===\n');
        const report = {
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
                totalProducts,
                processedProducts,
                totalPages,
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
        console.log(`Total productos procesados: ${processedProducts}/${totalProducts}`);
        console.log(`Nuevas categorías encontradas: ${newCategories.size}`);
        console.log(`Nuevos tags encontrados: ${newTags.size}`);
        console.log('Nuevas opciones encontradas:');
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