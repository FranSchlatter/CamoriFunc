const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const MAPPINGS = require('./mappings');
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
        // Default no args
        startPage: 1, 
        maxProducts: 50,
        productsPerPage: 50
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

// Helper de verificación: Existe el directorio de datos
async function ensureDataDirectory() {
    try {
        await fs.access(CONFIG.dataDir);
    } catch {
        await fs.mkdir(CONFIG.dataDir);
    }
}

// Helper de verificación: Crear archivos base si no existen
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

function generateNormalizedName(nameAnalysis) {
    const parts = {
        equipo: nameAnalysis.tags.find(t => t.type === "equipo")?.name || "",
        temporada: nameAnalysis.tags.find(t => t.type === "temporada")?.name || "",
        edition: nameAnalysis.tags.find(t => t.type === "edicion")?.name || "",
        color: nameAnalysis.tags.find(t => t.type === "color")?.name || "",
        caracteristica: nameAnalysis.tags.find(t => t.type === "caracteristica")?.name || "",
        version: nameAnalysis.tags.find(t => t.type === "version")?.name || "",
        category: nameAnalysis.categories?.map(cat => cat.name).join(" ") || "Otros",
        feature: nameAnalysis.tags.find(t => t.type === "feature")?.name || "",
        marca: nameAnalysis.tags.find(t => t.type === "marca")?.name || "",
        sexo: nameAnalysis.tags.find(t => t.type === "sexo")?.name || "",
        deporte: nameAnalysis.tags.find(t => t.type === "deporte")?.name || "",
        modelo: nameAnalysis.tags.find(t => t.type === "modelo")?.name || "",
        number: nameAnalysis.tags.find(t => t.type === "number")?.name || "",
        player: nameAnalysis.tags.find(t => t.type === "player")?.name || "",
        unrecognized: nameAnalysis.unrecognized || []
    };

    // Construir el nombre en el orden específico solicitado
    const mainParts = [];
    
    // Primera parte: 
    // Temporada y Equipo
    if (parts.equipo) mainParts.push(parts.equipo); // Argentina
    if (parts.marca) mainParts.push(parts.marca); // Nike
    if (parts.temporada) mainParts.push(parts.temporada); // 1984
    if (parts.edition) mainParts.push(parts.edition); // Local

    // Color y Jugador
    if (parts.color) mainParts.push(parts.color); // Rojo
    if (parts.number) mainParts.push(parts.number); // #10
    if (parts.player) mainParts.push(parts.player); // Maradona
    
    // Tercera parte: Categoría y Característica
    const productParts = [];
    if (parts.category) productParts.push(parts.category); // Camiseta
    if (parts.deporte) productParts.push(parts.deporte); // Futbol
    if (parts.version) productParts.push(parts.version); // Retro
    if (parts.sexo) productParts.push(parts.sexo); // Masculino
    if (parts.feature) productParts.push(parts.feature); // Manga Corta
    if (parts.caracteristica) productParts.push(parts.caracteristica); // Terciopelo
    if (parts.modelo) productParts.push(parts.modelo); // T142
    
    // Construir el nombre final
    let finalName = mainParts.join(" ");
    
    if (productParts.length > 0) {
        finalName += ` - ${productParts.join(" ")}`;
    }
    
    // Agregar términos no reconocidos al final
    // if (parts.unrecognized.length > 0) {
    //     finalName += ` (${parts.unrecognized.join(" ")})`;
    // }

    return finalName;
}

// Actualizar la función generateDescription para mantener consistencia
function generateDescription(nameAnalysis) {
    const equipo = nameAnalysis.tags.find(t => t.type === "equipo")?.name || "";
    const temporada = nameAnalysis.tags.find(t => t.type === "temporada")?.name || "";
    const edition = nameAnalysis.tags.find(t => t.type === "edicion")?.name || ""; // Local/Visitante/Third
    const color = nameAnalysis.tags.find(t => t.type === "color")?.name || "";
    const sexo = nameAnalysis.tags.find(t => t.type === "sexo")?.name || "";
    const deporte = nameAnalysis.tags.find(t => t.type === "deporte")?.name || "";
    const feature = nameAnalysis.tags.find(t => t.type === "feature")?.name || "";
    const version = nameAnalysis.tags.find(t => t.type === "version")?.name || ""; // Jugador/Retro/Fanático
    const category = nameAnalysis.categories?.map(cat => cat.name).join(" ") || "";
    
    // Verificar si el producto es una camiseta de fútbol
    if (category.includes("Camisetas")) {
        // Primera línea: Equipación + edición + equipo + temporada
        let firstLine = "";
        if (edition) { firstLine = `Equipación ${edition.toLowerCase()} de ${equipo}`; } else { firstLine = `Camiseta de ${equipo}`; }
        if (temporada) { firstLine += ` de la temporada ${temporada}.`; } else { firstLine += "."; }
        
        // Segunda línea: Tipo de camiseta + versión + características
        let secondLine = `Camiseta de ${deporte || 'tipo'} importada`;
        if (version) { secondLine += `, estilo ${version.toLowerCase()}`; }
        if (color) { secondLine += `, color ${color.toLowerCase()}`; }
        if (sexo) { secondLine += `, sexo ${sexo.toLowerCase()}`; }
        secondLine += `, ${feature.toLowerCase() || 'manga corta'}`;
        secondLine += ".";

        // Tercera línea: Tecnologías + calidad 
        const thirdLine = "Confeccionada con tecnologías oficiales como Dri-Fit, Climacool, DryCell, entre otras. Materiales premium de primera calidad, diseñada para brindar máxima comodidad y durabilidad.";
        
        // Unir todo en párrafos separados
        return `${firstLine}\n${secondLine}\n${thirdLine}`;
    }
    
    // Descripción por defecto para otros productos
    return "Indumentaria fabricada con materiales premium de primera calidad, diseñada para brindar máxima comodidad y durabilidad.";
}

// Función para extraer: Imágenes producto
function extractImages($) {
    const images = new Set();

    // Busca en el HTML array img con: id #goodsimagelist > li > a > data_img
    $('#goodsimagelist li').each((_, li) => {
        const style = $(li).attr('style');
        
        // Ignorar elementos con style="display:none;"
        if (style && style.includes('display:none')) {
            return;
        }

        // Procesar solo si no tiene el estilo display:none
        const anchor = $(li).find('a');
        const imgUrl = anchor.attr('data_img');
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


// Función para extraer: Precio producto
function extractBasePrice($) {
    // Buscar el precio en el elemento específico con class 'goods_price'
    const priceElement = $('.goods_price').text().trim();
    
    // Extraer el número del formato "US$ XX.XX"
    const priceMatch = priceElement.match(/US\$\s*(\d+\.?\d*)/);
    
    // Si encontramos un precio, lo convertimos a número y redondeamos
    const price = priceMatch ? Math.round(parseFloat(priceMatch[1])) : 0;

    return price;
}

// Helper de verificación: Categoria ya existe en categories.json
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

// Helper de verificación: Options ya existe en productOptions.json
const productOptionExists = (existingOptions, optionToCheck) => {
    return existingOptions.productOptions.some(option => 
        option.name === optionToCheck.name && 
        option.type === optionToCheck.type
    );
};

// Helper de extracción: Retorna array de productos con url para detail.
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
                        image
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

// Helper de verificación de datos ? products?
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

// Funcion para analizar el nombre de los productos para extraer tags, categories y palabras faltantes en mappings.js
function analyzeProductName(name) {
    const foundCategories = new Set();
    const foundTagsMap = new Map();
    const unrecognizedTerms = new Set();
    const recognizedWords = new Set();

    let normalizedName = name.toUpperCase();
    let processedName = name;

    // Definir mappingTypes al inicio
    const mappingTypes = {
        categories: MAPPINGS.categories,
        equipos: MAPPINGS.tags.equipos,
        temporadas: MAPPINGS.tags.temporadas,
        versions: MAPPINGS.tags.versions,
        editions: MAPPINGS.tags.editions,
        features: MAPPINGS.tags.features,
        colors: MAPPINGS.tags.colors,
        caracteristicas: MAPPINGS.tags.caracteristicas,
        marcas: MAPPINGS.tags.marcas,
        sexos: MAPPINGS.tags.sexo,
        deportes: MAPPINGS.tags.deporte,
        modelos: MAPPINGS.tags.modelos,
        numbers: MAPPINGS.tags.numbers,
        players: MAPPINGS.tags.players,
        nothings: MAPPINGS.tags.nothings
    };

    // Helper para agregar tags sin duplicados
    const addTag = (tag) => {
        const key = `${tag.type}-${tag.name}`;
        foundTagsMap.set(key, tag);
    };

    // Procesar cada tipo de mapping > Primero itera sobre mappingTypes (categories: data), luego itera sobre categories del archivo mappings (Futbol: data) y analiza el key "matches"
    let nameToAnalyze = normalizedName; // Copia del nombre para ir limpiando los matches

    Object.entries(mappingTypes).forEach(([mappingType, mappingData]) => {
        Object.entries(mappingData).forEach(([itemName, data]) => {
            if (data.matches) {
                // Ordenar los matches de mayor a menor longitud (frases largas primero)
                const sortedMatches = data.matches.sort((a, b) => b.length - a.length);

                // Verificar coincidencias exactas para frases completas o palabras
                const found = sortedMatches.some(match => {
                    const regex = new RegExp(`(^|\\s|[^a-zA-Z])${match}($|\\s|[^a-zA-Z])`, 'i'); // Regex para coincidir palabra exacta

                    if (regex.test(nameToAnalyze)) {
                        // Agregar las palabras/frases reconocidas
                        recognizedWords.add(match.toLowerCase());

                        // Limpiar el match encontrado del nombre (para que no matchee después)
                        nameToAnalyze = nameToAnalyze.replace(regex, ' '); // Reemplazar por espacio para no pegar palabras
                        nameToAnalyze = nameToAnalyze.replace(/\s+/g, ' ').trim(); // Limpiar espacios dobles

                        // Si es frase compuesta, también registrar cada palabra por separado
                        if (match.includes(' ')) {
                            match.split(' ').forEach(word => recognizedWords.add(word.toLowerCase()));
                        }

                        // Agregar categoría o tag según corresponda
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

                        return true; // Ya encontró un match en este grupo, no sigue buscando más matches acá
                    }
                    return false; // No encontró match, sigue buscando
                });
            }
        });
    });

    // Agregar sexo Masculino por default
    const hasSexoTag = Array.from(foundTagsMap.values()).some(tag => tag.type === "sexo");

    if (!hasSexoTag) {
        addTag({
            name: "Masculino",
            type: "sexo"
        });
    }

    // Agregar tag Futbol a Camisetas "edicion" - "Entrenamiento"
    const hasEntrenamientoTag = Array.from(foundTagsMap.values()).some(
        tag => tag.type === "edicion" && tag.name === "Entrenamiento"
    );

    const hasDeporteTag = Array.from(foundTagsMap.values()).some(
        tag => tag.type === "deporte"
    );

    if (hasEntrenamientoTag && !hasDeporteTag) {
        addTag({
            name: "Fútbol",
            type: "deporte", // Ajusta el tipo según corresponda en tu estructura
        });
    }

    // Identificar todas las palabras que no matchearon con nada.
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

// Funcion para analizar todos los productos
async function analyzeAllProducts() {
    try {
        console.log('\n=== Iniciando análisis de productos ===\n');
        console.log('Configuración:');
        console.log(`- Página inicial: ${CONFIG.scraping.startPage}`);
        console.log(`- Productos máximos: ${CONFIG.scraping.maxProducts || 'Sin límite'}`);
        console.log(`- Productos por página: ${CONFIG.scraping.productsPerPage || 'Todos'}`);
        
        const { categories: existingCategories, tags: existingTags, productOptions: existingProductOptions } = await analyzeExistingData();

        const productsPath = path.join(CONFIG.dataDir, 'products.json'); // pasar a analyzeExistingData
        let existingProducts = [];
        try {
            const productsData = await fs.readFile(productsPath, 'utf8');
            existingProducts = JSON.parse(productsData).products;
        } catch (error) {
            console.log('No hay productos previos');
        } // pasar a analyzeExistingData

        const existingProductNames = new Set(existingProducts.map(p => p.name));
        const newProducts = [];
        const newCategories = new Map();
        const newTags = new Map();

        const seenOptionNames = {
            badges: new Set(),
            customize: new Set(),
            sizes: new Set()
        };

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
        
        const maxPages = Math.min(CONFIG.scraping.maxProducts && CONFIG.scraping.productsPerPage ? Math.ceil(CONFIG.scraping.maxProducts / CONFIG.scraping.productsPerPage) : "Error");
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
            
                // Verificar límite y stopear for
                if (CONFIG.scraping.maxProducts && processedProducts > CONFIG.scraping.maxProducts) {
                    console.log(`\nAlcanzado límite máximo de productos (${CONFIG.scraping.maxProducts})`);
                    shouldStop = true;
                    break;
                }
            
                // Verificar si ya existe y saltear product
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
                                // Solo agregar si no hemos visto este nombre antes
                                const optionName = option.matches[0]; // Asumiendo que siempre hay al menos un elemento
                                if (!seenOptionNames[type].has(optionName)) {
                                    seenOptionNames[type].add(optionName);
                                    allUnmappedOptions[type].add(JSON.stringify(option));
                                }
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
                            name: generateNormalizedName(nameAnalysis),
                            originalName: product.name,
                            description: generateDescription(nameAnalysis),
                            price: detailAnalysis.productData.price,
                            images: detailAnalysis.productData.images,
                            vendidas: detailAnalysis.productData.sales,
                            status: 'active',
                            categoryIds: nameAnalysis.categories.length > 0 ? nameAnalysis.categories.map(c => c.path.join('/')) : ['Indumentaria Deportiva/Camisetas'],
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

// Función para analizar el detalle del producto
async function analyzeProductDetail(url, productName) {
    try {
        // Api get de detail product, almacena en $
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
            customize: [],
            sales: 0  // Número de ventas por defecto en 0
        };

        // Extraer número de ventas
        const salesText = $('label.porder span').text().trim();
        productData.sales = salesText ? parseInt(salesText, 10) : 0;

        // Helper para extraer precio para options
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
                        const newEntry = JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "size",
                            price: extractPrice(priceStr)
                        });
                        unmappedOptions.sizes.add(newEntry);
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
                        const newEntry = JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "badge",
                            price: extractPrice(priceStr),
                            images: image || null
                        });
                        unmappedOptions.badges.add(newEntry);
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
                            price: extractPrice(priceStr),
                        }));
                    } else {
                        const newEntry = JSON.stringify({
                            matches: [name],
                            itemName: productName,
                            type: "customize",
                            price: extractPrice(priceStr),
                        });
                        unmappedOptions.customize.add(newEntry);
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