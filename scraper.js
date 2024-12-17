const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const async = require('async');
const fs = require('fs').promises;
const crypto = require('crypto');

// Configuración
const CONFIG = {
    baseUrl: 'https://www.grkits3.com',
    concurrentScrapes: 5,
    saveInterval: 100,
    categoryMap: {
        'Monterrey': '1',
        'Argentina': '2',
        // Agregar más mappings según necesites
    }
};

// Genera un UUID v4 personalizado
const generateUUID = () => {
    const bytes = crypto.randomBytes(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    
    let uuid = bytes.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    uuid.shift(); // Remover el match completo
    return uuid.join('-');
};

// Inicializa el navegador
const initializeBrowser = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    return { browser, page };
};

// Obtiene el total de páginas
const getTotalPages = async (page) => {
    await page.goto(`${CONFIG.baseUrl}/Products/list-r1.html`);
    const html = await page.content();
    const $ = cheerio.load(html);
    const lastPage = $('.pagination li:last-child').text();
    return parseInt(lastPage) || 1;
};

// Obtiene los links de productos de una página
const getProductLinksFromPage = async (page, pageNum) => {
    await page.goto(`${CONFIG.baseUrl}/Products/list-r${pageNum}.html`);
    const html = await page.content();
    const $ = cheerio.load(html);
    
    const links = [];
    $('li .pro_content a').each((_, el) => {
        const href = $(el).attr('href');
        if (href && href.includes('.html')) {
            links.push(CONFIG.baseUrl + href);
        }
    });
    
    return links;
};

// Procesa las categorías y devuelve el ID correspondiente
const getCategoryId = (categories) => {
    for (const category of categories) {
        if (CONFIG.categoryMap[category]) {
            return CONFIG.categoryMap[category];
        }
    }
    return '0';
};

// Genera tags basados en las categorías
const generateTags = (categories) => {
    return categories
        .filter(cat => cat !== 'Home')
        .map(cat => cat.toLowerCase());
};

// Extrae los datos de un producto
const scrapeProductDetail = async (browser, url) => {
    let page = null;
    try {
        page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        const html = await page.content();
        const $ = cheerio.load(html);

        // Datos básicos
        const name = $('.product_detail_h1').text().trim();
        const price = $('.goods_price').text().replace('US$ ', '').trim();
        
        // Imágenes
        const images = [];
        $('#goodsimagelist img').each((_, el) => {
            const imgUrl = $(el).attr('src');
            if (imgUrl) images.push(imgUrl);
        });

        // Categorías
        const categories = [];
        $('.crumb a').each((_, el) => {
            categories.push($(el).text().trim());
        });

        // Variantes/Opciones
        const options = [];
        $('.sale_property_box').each((_, el) => {
            $(el).find('a').each((_, opt) => {
                const optionText = $(opt).text().trim();
                if (optionText && !optionText.includes('+US$')) {
                    options.push(optionText);
                }
            });
        });

        return {
            id: generateUUID(),
            name,
            description: name,
            brand: "GRKits",
            categoryId: getCategoryId(categories),
            status: "active",
            tags: generateTags(categories),
            variants: [{
                price: parseFloat(price) * 3000,
                stock: 0,
                image_url: images,
                status: "active",
                options: options
            }]
        };

    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return null;
    } finally {
        if (page) await page.close();
    }
};

// Guarda el progreso en un archivo
const saveProgress = async (products) => {
    await fs.writeFile(
        'products.json',
        JSON.stringify({ products }, null, 2)
    );
    console.log(`Guardados ${products.length} productos`);
};

// Función principal de scraping
const scrapeProducts = async () => {
    const products = [];
    const { browser, page } = await initializeBrowser();

    try {
        const totalPages = await getTotalPages(page);
        console.log(`Total de páginas a procesar: ${totalPages}`);

        for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
            console.log(`Procesando página ${currentPage} de ${totalPages}`);
            
            const productLinks = await getProductLinksFromPage(page, currentPage);
            
            // Procesar productos en paralelo
            await async.eachLimit(productLinks, CONFIG.concurrentScrapes, async (link) => {
                const product = await scrapeProductDetail(browser, link);
                if (product) {
                    products.push(product);
                    
                    // Guardar progreso periódicamente
                    if (products.length % CONFIG.saveInterval === 0) {
                        await saveProgress(products);
                    }
                }
            });
        }

        // Guardar resultados finales
        await saveProgress(products);

    } catch (error) {
        console.error('Error en el proceso de scraping:', error);
        // Guardar lo que se haya procesado hasta el momento
        if (products.length > 0) {
            await saveProgress(products);
        }
    } finally {
        await browser.close();
    }

    return products;
};

// Manejo de errores global y ejecución
process.on('unhandledRejection', (error) => {
    console.error('Error no manejado:', error);
    process.exit(1);
});

// Ejecución principal
const main = async () => {
    console.log('Iniciando scraping...');
    const startTime = Date.now();
    
    try {
        await scrapeProducts();
        
        const timeElapsed = (Date.now() - startTime) / 1000;
        console.log(`Scraping completado en ${timeElapsed} segundos`);
    } catch (error) {
        console.error('Error fatal:', error);
        process.exit(1);
    }
};

main();