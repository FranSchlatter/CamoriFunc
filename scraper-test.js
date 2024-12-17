const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const crypto = require('crypto');

const CONFIG = {
    baseUrl: 'https://www.grkits3.com',
    productsToScrape: 5,
    delayBetweenRequests: 1000, // 1 segundo
    // Mapeo de categorías
    categories: {
        'National Teams': 'selecciones',
        'Premier League': ['clubes', 'premier-league'],
        'Soccer': 'futbol',
        'Jersey': 'camisetas',
        '2024-25': 'periodo-2024-25'
    },
    // Palabras clave para tags
    tagKeywords: {
        'Player Version': 'version-jugador',
        'Fans': 'version-fanatico',
        'Special Edition': 'edicion-especial',
        'Black': 'negra',
        'CHE': 'chelsea',
        'Argentina': 'argentina'
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    }
};

const generateUUID = () => {
    const bytes = crypto.randomBytes(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    let uuid = bytes.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    uuid.shift();
    return uuid.join('-');
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const extractPriceAddition = (text) => {
    const match = text.match(/\+US\$ ?([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
};

const processVariants = ($) => {
    const variants = [];
    
    // Procesar tallas
    const sizes = [];
    $('.sale_property_box').each((_, box) => {
        const propertyName = $(box).attr('property_name');
        if (propertyName === 'Size') {
            $(box).find('a').each((_, el) => {
                const size = $(el).text().trim();
                const priceAdd = extractPriceAddition(size);
                if (!size.includes('+US$')) {
                    sizes.push({
                        name: size,
                        priceAddition: priceAdd
                    });
                }
            });
        }
    });

    // Procesar badges
    const badges = [];
    $('.sale_property_box').each((_, box) => {
        const propertyName = $(box).attr('property_name');
        if (propertyName === 'Badge') {
            $(box).find('a').each((_, el) => {
                const badge = $(el).text().trim();
                const priceAdd = extractPriceAddition(badge);
                const imgUrl = $(el).find('img').attr('src');
                badges.push({
                    name: badge,
                    priceAddition: priceAdd,
                    image: imgUrl
                });
            });
        }
    });

    // Procesar customización
    const customizations = [];
    $('.sale_property_box').each((_, box) => {
        const propertyName = $(box).attr('property_name');
        if (propertyName === 'Customized') {
            $(box).find('a').each((_, el) => {
                const custom = $(el).text().trim();
                const priceAdd = extractPriceAddition(custom);
                customizations.push({
                    name: custom,
                    priceAddition: priceAdd
                });
            });
        }
    });

    // Si no hay badges o customizations, agregar opciones por defecto
    if (badges.length === 0) {
        badges.push({ name: 'No Badge', priceAddition: 0, image: null });
    }
    if (customizations.length === 0) {
        customizations.push({ name: 'No Customization', priceAddition: 0 });
    }

    return { sizes, badges, customizations };
};

const processCategories = (breadcrumbs) => {
    const categories = new Set();
    const tags = new Set();

    breadcrumbs.forEach(crumb => {
        // Procesar categorías directas
        if (CONFIG.categories[crumb]) {
            const category = CONFIG.categories[crumb];
            if (Array.isArray(category)) {
                category.forEach(cat => categories.add(cat));
            } else {
                categories.add(category);
            }
        }

        // Procesar tags
        if (CONFIG.tagKeywords[crumb]) {
            tags.add(CONFIG.tagKeywords[crumb]);
        }
    });

    return {
        categories: Array.from(categories),
        tags: Array.from(tags)
    };
};

const getProductLinks = async () => {
    try {
        const response = await axios.get(`${CONFIG.baseUrl}/Products/list-r1.html`, { 
            headers: CONFIG.headers 
        });
        const $ = cheerio.load(response.data);
        
        const links = [];
        $('li .pro_content a').each((_, el) => {
            const href = $(el).attr('href');
            if (href && href.includes('.html')) {
                links.push(CONFIG.baseUrl + href);
            }
        });
        
        return links.slice(0, CONFIG.productsToScrape);
    } catch (error) {
        console.error('Error obteniendo links:', error.message);
        return [];
    }
};

const scrapeProductDetail = async (url) => {
    try {
        const response = await axios.get(url, { 
            headers: CONFIG.headers 
        });
        const $ = cheerio.load(response.data);

        // Extraer breadcrumbs
        const breadcrumbs = [];
        $('.crumb a').each((_, el) => {
            breadcrumbs.push($(el).text().trim());
        });

        // Procesar categorías y tags
        const { categories, tags } = processCategories(breadcrumbs);

        // Extraer precio base
        const basePrice = parseFloat($('.goods_price').text().replace('US$ ', '').trim());

        // Procesar variantes
        const { sizes, badges, customizations } = processVariants($);

        // Extraer imágenes del producto
        const images = [];
        $('#goodsimagelist img').each((_, el) => {
            const imgUrl = $(el).attr('src');
            if (imgUrl && !images.includes(imgUrl)) {
                images.push(imgUrl);
            }
        });

        // Crear las variantes de producto
        const productVariants = [];
        
        // Por cada combinación posible de size/badge/custom, crear una variante
        sizes.forEach(size => {
            badges.forEach(badge => {
                customizations.forEach(custom => {
                    const totalPrice = (basePrice + 
                        size.priceAddition + 
                        badge.priceAddition + 
                        custom.priceAddition) * 3000;

                    const variantImages = badge.image ? 
                        [...images, badge.image] : 
                        images;

                    productVariants.push({
                        price: totalPrice.toFixed(2),
                        stock: 0,
                        image_url: variantImages,
                        status: "active",
                        options: [
                            `Size: ${size.name}`,
                            `Badge: ${badge.name}`,
                            `Custom: ${custom.name}`
                        ]
                    });
                });
            });
        });

        // Extraer nombre del producto
        const name = $('.product_detail_h1').first().contents().filter(function() {
            return this.type === 'text';
        }).text().trim();

        return {
            id: generateUUID(),
            name,
            description: name,
            brand: "GRKits",
            categoryId: categories[0] || '0',
            status: "active",
            tags,
            variants: productVariants
        };

    } catch (error) {
        console.error(`Error procesando ${url}:`, error.message);
        return null;
    }
};

const saveResults = async (products) => {
    try {
        await fs.writeFile(
            'products-test.json',
            JSON.stringify({ products }, null, 2)
        );
        console.log('Resultados guardados en products-test.json');
    } catch (error) {
        console.error('Error guardando resultados:', error);
    }
};

const main = async () => {
    console.log('Iniciando scraping...');
    const startTime = Date.now();

    try {
        // Obtener links
        const productLinks = await getProductLinks();
        console.log(`Links encontrados: ${productLinks.length}`);

        // Procesar productos
        const products = [];
        for (const link of productLinks) {
            console.log(`Procesando: ${link}`);
            const product = await scrapeProductDetail(link);
            if (product) {
                products.push(product);
                console.log(`Producto procesado: ${product.name}`);
            }
            // Esperar entre requests para evitar sobrecarga
            await delay(CONFIG.delayBetweenRequests);
        }

        // Guardar resultados
        await saveResults(products);

        const timeElapsed = (Date.now() - startTime) / 1000;
        console.log(`Proceso completado en ${timeElapsed} segundos`);
        console.log(`Total de productos procesados: ${products.length}`);

    } catch (error) {
        console.error('Error en el proceso principal:', error);
    }
};

// Manejo de errores global
process.on('unhandledRejection', (error) => {
    console.error('Error no manejado:', error);
    process.exit(1);
});

// Ejecutar el scraper
main();