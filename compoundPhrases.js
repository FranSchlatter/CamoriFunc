// compoundPhrases.js
module.exports = {
    phrases: [
        // Categoria
        { 
            phrase: 'Long Sleeve', 
            normalized: 'Manga Larga', 
            type: 'caracteristica',
            categoryPath: ['Productos']
        },
        { 
            phrase: 'Tank top and shorts suit', 
            normalized: 'Conjuntos', 
            type: 'product_type',
            categoryPath: ['Productos', 'Conjuntos']
        },
        { 
            phrase: 'Training Short', 
            normalized: 'Conjuntos', 
            type: 'product_type',
            categoryPath: ['Productos', 'Conjuntos']
        },
        { 
            phrase: 'Baby Infant Crawl Suit', 
            normalized: 'Bebes', 
            type: 'product_type',
            categoryPath: ['Productos', 'Bebes']
        },
        { 
            phrase: 'Double Sided', 
            normalized: 'Rompevientos', 
            type: 'product_type',
            categoryPath: ['Productos', 'Abrigos', 'Rompevientos']
        },
       
        
        // Ediciones especiales
        { 
            phrase: 'Special Edition', 
            normalized: 'Edicion Especial', 
            type: 'edicion',
            categoryPath: ['Productos']
        },
        { 
            phrase: 'Limited Edition', 
            normalized: 'Edicion Limitada', 
            type: 'edicion',
            categoryPath: ['Productos']
        },
        
        // Equipos
        // { 
        //     phrase: 'Man Utd', 
        //     normalized: 'Manchester United', 
        //     type: 'equipo',
        //     categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Premier League']
        // },
        // { 
        //     phrase: 'Man City', 
        //     normalized: 'Manchester City', 
        //     type: 'equipo',
        //     categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Premier League']
        // },
        // { 
        //     phrase: 'River Plate', 
        //     normalized: 'River Plate', 
        //     type: 'equipo',
        //     categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Primera División']
        // },
        // { 
        //     phrase: 'Template', 
        //     normalized: 'Template', 
        //     type: 'equipo',
        //     categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Template']
        // },

        // Color
    ],

    defaults: [
        { 
            type: 'caracteristica', 
            value: 'Manga Corta',
            categoryPath: ['Productos']
        }
    ]
};