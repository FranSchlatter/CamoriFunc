// compoundPhrases.js
module.exports = {
    phrases: [
        // Deportivas
        { 
            phrase: 'Player Version', 
            normalized: 'Version Jugador', 
            type: 'version',
            categoryPath: ['Productos', 'Camisetas']
        },
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
        
        // Características específicas
        { 
            phrase: 'Double Sided', 
            normalized: 'Rompevientos', 
            type: 'caracteristica',
            categoryPath: ['Productos', 'Rompevientos']
        },
        
        // Equipos compuestos
        { 
            phrase: 'Man Utd', 
            normalized: 'Manchester United', 
            type: 'equipo',
            categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Premier League']
        },
        { 
            phrase: 'Man City', 
            normalized: 'Manchester City', 
            type: 'equipo',
            categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Premier League']
        },
        { 
            phrase: 'River Plate', 
            normalized: 'River Plate', 
            type: 'equipo',
            categoryPath: ['Deportes', 'Fútbol', 'Clubes', 'Primera División']
        },
        
        // Versiones especiales
        { 
            phrase: 'Baby Infant Crawl Suit', 
            normalized: 'Bebes', 
            type: 'version',
            categoryPath: ['Productos']
        },

        // Traducciones del chino
        { 
            phrase: '(长袖)', 
            normalized: 'Manga Larga', 
            type: 'caracteristica',
            categoryPath: ['Productos']
        },
        { 
            phrase: '(双面风衣)', 
            normalized: 'Rompevientos', 
            type: 'product_type',
            categoryPath: ['Productos', 'Rompevientos']
        },
        { 
            phrase: '(卫衣套装)', 
            normalized: 'Conjuntos', 
            type: 'product_type',
            categoryPath: ['Productos', 'Conjuntos']
        }
    ],

    defaults: [
        { 
            type: 'caracteristica', 
            value: 'Manga Corta',
            categoryPath: ['Productos']
        }
    ]
};