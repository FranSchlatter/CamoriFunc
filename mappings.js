// mappings.js
module.exports = {
    // Categorías con sus jerarquías
    categories: {
        // Deportes y sus subcategorías
        "Fútbol": {
            matches: ['Soccer'],
            description: "Deporte fútbol",
            categoryPath: ["Deportes", "Fútbol"]
        },
            "Clubes": {
                matches: ['Clubes', 'Teams'],
                description: "Todos los clubes",
                categoryPath: ["Deportes", "Fútbol", "Clubes"]
            },
                "Premier League": {
                    matches: ['Premier League', 'EPL'],
                    description: "Liga inglesa",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
                },
                "La Liga": {
                    matches: ['La Liga', 'Spanish League'],
                    description: "Liga española",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
                },
                "Serie A": {
                    matches: ['Serie A', 'Italian League'],
                    description: "Liga italiana",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
                },
                "Bundesliga": {
                    matches: ['Bundesliga', 'German League'],
                    description: "Liga alemana",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
                },
                "Ligue 1": {
                    matches: ['Ligue 1', 'French League'],
                    description: "Liga francesa",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
                },
                "Brasileiro": {
                    matches: ['Brasileirao', 'Brazilian League'],
                    description: "Liga brasileña",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileirao"]
                },
                "Primera División": {
                    matches: ['Primera División', 'Argentina League'],
                    description: "Liga argentina",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
                },
                "Otros": {
                    matches: ['Otros'],
                    description: "Otros",
                    categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
                },
            "Selecciones": {
                matches: ['National Teams', 'Teams'],
                description: "Todos las selecciones",
                categoryPath: ["Deportes", "Fútbol", "Selecciones"]
            },
                "Copa America": {
                    matches: ['National Teams', 'Teams'],
                    description: "Copa America",
                    categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
                },
                "Euro": {
                    matches: ['National Teams', 'Teams'],
                    description: "Euro",
                    categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
                },
                "Otros": {
                    matches: ['Otros'],
                    description: "Otros",
                    categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
                },
                
        // Otros deportes
        "Básquet": {
            matches: ['NBA', 'Basketball', 'Básquet'],
            description: "Deporte básquet",
            categoryPath: ["Deportes", "Básquet"]
        },
            "NBA": {
                matches: ['NBA'],
                description: "Liga de básquet americana",
                categoryPath: ["Deportes", "Básquet", "NBA"]
            },
                "Conferencia Este": {
                    matches: ['Conferencia Este'],
                    description: "NBA Conferencia Este",
                    categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
                },
                "Conferencia Oeste": {
                    matches: ['Conferencia Oeste'],
                    description: "NBA Conferencia Oeste",
                    categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
                },
                "Especiales": {
                    matches: ['Especiales'],
                    description: "NBA Especiales",
                    categoryPath: ["Deportes", "Básquet", "NBA", "Especiales"]
                },
        "Rugby": {
            matches: ['Rugby'],
            description: "Deporte rugby",
            categoryPath: ["Deportes", "Rugby"]
        },
        "Formula 1": {
            matches: ['Racing', 'F1'],
            description: "Deporte automovilismo",
            categoryPath: ["Deportes", "Fórmula 1"]
        },

        // Productos y sus tipos
        "Camisetas": {
            matches: ['Jersey', 'Shirt'],
            description: "Indumentaria camisetas",
            categoryPath: ["Productos", "Camisetas"]
        },
        "Conjuntos": {
            matches: ['Tracksuit', 'Hoodie', 'Half Pull', 'Training Short', 'Tank top and shorts suit', '(卫衣套装)'],
            description: "Indumentaria conjuntos",
            categoryPath: ["Productos", "Conjuntos"]
        },
        "Entrenamiento": {
            matches: ['Training'],
            description: "Indumentaria entrenamiento",
            categoryPath: ["Productos", "Entrenamiento"]
        },
        "Mujer": {
            matches: ['Women'],
            description: "Indumentaria Mujer",
            categoryPath: ["Productos", "Mujer"]
        },
        "Niños": {
            matches: ['Kids'],
            description: "Indumentaria Niños",
            categoryPath: ["Productos", "Niños"]
        },
        "Bebes": {
            matches: ['Baby Infant Crawl Suit'],
            description: "Indumentaria Bebes",
            categoryPath: ["Productos", "Bebes"]
        },
        "Casual": {
            matches: ['Casual', 'Lifestyle'],
            description: "Indumentaria casual",
            categoryPath: ["Productos", "Casual"],
        },
            "Remeras": {
                matches: ['T-Shirt', 'shirts', 'Champion'],
                description: "Indumentaria Remeras casual",
                categoryPath: ["Productos", "Casual", "Remeras"]
            },
            "Pantalones cortos": {
                matches: ['Casual Short'],
                description: "Indumentaria Pantalones cortos casual",
                categoryPath: ["Productos", "Casual", "Pantalones cortos"]
            },
            "Pantalones largos": {
                matches: ['Sweatpants'],
                description: "Indumentaria Pantalones largos casual",
                categoryPath: ["Productos", "Casual", "Pantalones largos"]
            },
            "Chombas": {
                matches: ['Polo'],
                description: "Indumentaria Chombas casual",
                categoryPath: ["Productos", "Casual", "Chombas"]
            },
        "Accesorios": {
            matches: ['Accessories'],
            description: "Accesorios deportivos",
            categoryPath: ["Productos", "Accesorios"],
        },
            "Medias": {
                matches: ['Socks'],
                description: "Accesorios medias deportivas",
                categoryPath: ["Productos", "Accesorios", "Medias"]
            },
        "Abrigos": {
            matches: ['Coats', 'Jackets'],
            description: "Indumentaria de abrigo",
            categoryPath: ["Productos", "Abrigos"],
        },
            "Camperon": {
                matches: ['Cotton Coat'],
                description: "Indumentaria de abrigo camperon",
                categoryPath: ["Productos", "Abrigos", "Camperon"]
            },
            "Rompevientos": {
                matches: ['Windbreaker', 'Double Sided', '(双面风衣)'],
                description: "Indumentaria de abrigo rompeviento",
                categoryPath: ["Productos", "Abrigos", "Rompevientos"]
            }
    },

    // categories_actualizado: {
    //     // Deportes y sus subcategorías
    //     "Fútbol": {
    //         matches: ['Soccer'],
    //         description: "Deporte fútbol",
    //         categoryPath: ["Fútbol"]
    //     },
    //         "Camisetas": {
    //             matches: ['Jersey', 'Shirt'],
    //             description: "Indumentaria camisetas",
    //             categoryPath: ["Fútbol", "Camisetas"]
    //         },
    //         "Shorts": {
    //             matches: ['Shorts'],
    //             description: "Indumentaria shorts",
    //             categoryPath: ["Fútbol", "Shorts"]
    //         },
    //         "Medias": {
    //             matches: ['Socks'],
    //             description: "Indumentaria medias",
    //             categoryPath: ["Fútbol", "Medias"]
    //         },
    //         "Conjuntos": {
    //             matches: ['Tracksuit', 'Hoodie', 'Half Pull', 'Training Short', 'Tank top and shorts suit', '(卫衣套装)'],
    //             description: "Indumentaria conjuntos",
    //             categoryPath: ["Fútbol", "Conjuntos"]
    //         },
            
    //         "Mujer": {
    //             matches: ['Women'],
    //             description: "Indumentaria Mujer",
    //             categoryPath: ["Fútbol", "Mujer"]
    //         },
    //         "Niños": {
    //             matches: ['Kids'],
    //             description: "Indumentaria Niños",
    //             categoryPath: ["Fútbol", "Niños"]
    //         },
    //         "Bebes": {
    //             matches: ['Baby Infant Crawl Suit'],
    //             description: "Indumentaria Bebes",
    //             categoryPath: ["Fútbol", "Bebes"]
    //         },
                
    //     "Básquet": {
    //         matches: ['NBA', 'Basketball', 'Básquet'],
    //         description: "Deporte básquet",
    //         categoryPath: ["Básquet"]
    //     },
    //         "Camisetas": {
    //             matches: ['Jersey', 'Shirt'],
    //             description: "Indumentaria camisetas",
    //             categoryPath: ["Básquet", "Camisetas"]
    //         },
    //         "Shorts": {
    //             matches: ['Shorts'],
    //             description: "Indumentaria shorts",
    //             categoryPath: ["Básquet", "Shorts"]
    //         },
        
    //     "Rugby": {
    //         matches: ['Rugby'],
    //         description: "Deporte rugby",
    //         categoryPath: ["Rugby"]
    //     },
    //         "Camisetas": {
    //             matches: ['Jersey', 'Shirt'],
    //             description: "Indumentaria camisetas",
    //             categoryPath: ["Rugby", "Camisetas"]
    //         },

    //     "Formula 1": {
    //         matches: ['Racing', 'F1'],
    //         description: "Deporte automovilismo",
    //         categoryPath: ["Fórmula 1"]
    //     },
    //         "Camisetas": {
    //             matches: ['Jersey', 'Shirt'],
    //             description: "Indumentaria camisetas",
    //             categoryPath: ["Fórmula 1", "Camisetas"]
    //         },

        
    //     "Casual": {
    //         matches: ['Casual', 'Lifestyle'],
    //         description: "Indumentaria casual",
    //         categoryPath: ["Casual"],
    //     },  
    //         "Entrenamiento": {
    //             matches: ['Training short suit'],
    //             description: "Indumentaria entrenamiento",
    //             categoryPath: ["Casual", "Entrenamiento"]
    //         },
    //         "Remeras": {
    //             matches: ['T-Shirt', 'shirts', 'Champion'],
    //             description: "Indumentaria Remeras casual",
    //             categoryPath: ["Casual", "Remeras"]
    //         },
    //         "Pantalones cortos": {
    //             matches: ['Casual Short'],
    //             description: "Indumentaria Pantalones cortos casual",
    //             categoryPath: ["Casual", "Pantalones cortos"]
    //         },
    //         "Pantalones largos": {
    //             matches: ['Sweatpants'],
    //             description: "Indumentaria Pantalones largos casual",
    //             categoryPath: ["Casual", "Pantalones largos"]
    //         },
    //         "Chombas": {
    //             matches: ['Polo'],
    //             description: "Indumentaria Chombas casual",
    //             categoryPath: ["Casual", "Casual", "Chombas"]
    //         },
    //         "Camperon": {
    //             matches: ['Cotton Coat'],
    //             description: "Indumentaria de abrigo camperon",
    //             categoryPath: ["Casual", "Camperon"]
    //         },
    //         "Rompevientos": {
    //             matches: ['Windbreaker', 'Double Sided', '(双面风衣)'],
    //             description: "Indumentaria de abrigo rompeviento",
    //             categoryPath: ["Casual", "Rompevientos"]
    //         }
    // },


    // Tags para filtrado
    tags: {
        // Teams
        teams: {
            // Premier League
            "Manchester City": {
                matches: ['Man City'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Manchester United": {
                matches: ['Man Utd'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Liverpool": {
                matches: ['LIV'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Chelsea": {
                matches: ['CHE'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Tottenham": {
                matches: ['TOT'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Arsenal": {
                matches: ['ARS'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Newcastle": {
                matches: ['Newcastle'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Brighton": {
                matches: ['Brighton'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Aston Villa": {
                matches: ['Aston Villa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "West Ham": {
                matches: ['West Ham'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Everton": {
                matches: ['EVE'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Crystal Palace": {
                matches: ['Crystal Palace'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Wolves": {
                matches: ['Wolves'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Leicester City": {
                matches: ['Leicester City'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Leeds United": {
                matches: ['Leeds United'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Sheffield United": {
                matches: ['Sheffield United'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Sunderland AFC": {
                matches: ['Sunderland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },


            // La Liga
            "Real Madrid": {
                matches: ['RMA'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Barcelona": {
                matches: ['BAR'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Atletico Madrid": {
                matches: ['ATM'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Girona": {
                matches: ['Girona'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Sevilla": {
                matches: ['Sevilla'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Valencia": {
                matches: ['Valencia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Villarreal": {
                matches: ['Villarreal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Real Betis": {
                matches: ['Real Betis'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Bilbao": {
                matches: ['Bilbao'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Cadiz": {
                matches: ['Cadiz'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Real Sociedad": {
                matches: ['Real Sociedad'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Osasuna": {
                matches: ['Osasuna'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Celta": {
                matches: ['Celta'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Espanyol": {
                matches: ['Espanyol'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Zaragoza": {
                matches: ['Zaragoza'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Rayo Vallecano": {
                matches: ['Rayo Vallecano'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },

            // Ligue 1
            "París Saint-Germain": {
                matches: ['PSG'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Marseille": {
                matches: ['Marseille'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Lyon": {
                matches: ['Lyon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Monaco": {
                matches: ['Monaco'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Lille": {
                matches: ['Lille'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "RC Lens": {
                matches: ['RC Lens'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Stade Rennais": {
                matches: ['Stade Rennais'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Nice": {
                matches: ['Nice'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },

            // Bundesliga
            "Bayern Munich": {
                matches: ['Bayern'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Borussia Dortmund": {
                matches: ['Dortmund'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "RB Leipzig": {
                matches: ['RB Leipzig'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Wolfsburg": {
                matches: ['Wolfsburg'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Frankfurt": {
                matches: ['Frankfurt'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Bayer 04 Leverkusen": {
                matches: ['LeverKusen'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Monchengladbach": {
                matches: ['Monchengladbach'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Schalke 04": {
                matches: ['Schalke 04'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Werder Bremen": {
                matches: ['Werder Bremen'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Berlin Union": {
                matches: ['Berlin Union'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "RB Salzburg": {
                matches: ['Salzburg'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },

            // Serie A
            "Juventus": {
                matches: ['JUV'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "AC Milan": {
                matches: ['ACM'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Inter de Milan": {
                matches: ['INT'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Napoli": {
                matches: ['Napoli'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Roma": {
                matches: ['Roma'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Lazio": {
                matches: ['Lazio'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Parma": {
                matches: ['Parma'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Fiorentina": {
                matches: ['Fiorentina'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Atalanta": {
                matches: ['Atalanta'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Torino": {
                matches: ['Torino'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Sampdoria": {
                matches: ['Sampdoria'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Venezia FC": {
                matches: ['Venezia FC'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },

            // Brasileirao
            "Flamengo": {
                matches: ['Flamengo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Palmeiras": {
                matches: ['Palmeiras'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Corinthians": {
                matches: ['Corinthians'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Atletico Mineiro": {
                matches: ['Atletico Mineiro'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Sao Paulo FC": {
                matches: ['Sao Paulo FC'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Santos FC": {
                matches: ['Santos FC'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Fluminense": {
                matches: ['Fluminense'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Internacional": {
                matches: ['Internacional'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Botafogo": {
                matches: ['Botafogo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Recife": {
                matches: ['Recife'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Bragantino": {
                matches: ['Bragantino'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Fortaleza": {
                matches: ['Fortaleza'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Cruzeiro": {
                matches: ['Cruzeiro'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Grêmio": {
                matches: ['Grêmio'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Vasco da": {
                matches: ['Vasco da'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },

            // Primera División
            "River Plate": {
                matches: ['River Plate'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
            },
            "Boca": {
                matches: ['Boca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
            },
            "Independiente": {
                matches: ['Independiente'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
            },
            "Estudiantes": {
                matches: ['La Plata'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
            },
            "San Lorenzo": {
                matches: ['San Lorenzo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primera División"]
            },

        
            // Primera División Chile
            "Universidad Catolica": {
                matches: ['Universidad Catolica'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Chile Primera División"]
            },
            "Colo-Colo": {
                matches: ['Colo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Chile Primera División"]
            },


            // Liga MX 
            "Pachuca": {
                matches: ['Pachuca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Chivas": {
                matches: ['Chivas'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Necaxa": {
                matches: ['Necaxa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Mazatlan": {
                matches: ['Mazatlan'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Juarez": {
                matches: ['Juarez'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Leon": {
                matches: ['Leon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Tigres": {
                matches: ['Tigres UANL'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },


            // Otros clubes
            "Toluca": {
                matches: ['Toluca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Copenhagen": {
                matches: ['Copenhagen'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Feyenoord": {
                matches: ['Feyenoord'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            
            "Auxerre": {
                matches: ['Auxerre'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Brugge": {
                matches: ['Brugge'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Crvena Zvezda": {
                matches: ['Crvena Zvezda'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Inter Miami": {
                matches: ['Inter Miami'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "PSV": {
                matches: ['PSV'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },

           

            // Selecciones
            // Europa
            "Francia": {
                matches: ['France'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Inglaterra": {
                matches: ['England'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Alemania": {
                matches: ['Germany'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Portugal": {
                matches: ['Portugal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "España": {
                matches: ['Spain'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Italia": {
                matches: ['Italy'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Paises Bajos": {
                matches: ['Netherlands'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Gales": {
                matches: ['Wales'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Escocia": {
                matches: ['Scotland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Dinamarca": {
                matches: ['Denmark'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Irlanda": {
                matches: ['Ireland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Belgica": {
                matches: ['Belgium'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Croacia": {
                matches: ['Croatia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },

            // América
            "Argentina": {
                matches: ['Argentina'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Brasil": {
                matches: ['Brazil'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Chile": {
                matches: ['Chile'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Uruguay": {
                matches: ['Uruguay'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Mexico": {
                matches: ['Mexico'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Canada": {
                matches: ['Canada'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },

            // Otras Selecciones
            "Nigeria": {
                matches: ['Nigeria'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Morocco": {
                matches: ['Morocco'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Cameroon": {
                matches: ['Cameroon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Japan": {
                matches: ['Japan'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Korea": {
                matches: ['Korea'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Palestina": {
                matches: ['Palestina'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Ghana": {
                matches: ['Ghana'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Egypt": {
                matches: ['Egypt'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Senegal": {
                matches: ['Senegal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },

            

             // NBA
             "2024 Olympic Games": {
                matches: ['2024 Olympic Games'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Especiales"]
            },
            "All Star": {
                matches: ['ALL STAR'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Especiales"]
            },
            "Lakers": {
                matches: ['LAKERS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Warriors": {
                matches: ['WARRIORS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Chicago Bulls": {
                matches: ['BULLS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Celtics": {
                matches: ['CELTICS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Nets": {
                matches: ['NETS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Heat": {
                matches: ['HEAT'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Grizzlies": {
                matches: ['GRIZZLIES'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Bucks": {
                matches: ['BUCKS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Jazz": {
                matches: ['JAZZ'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Indiana Pacers": {
                matches: ['Indiana Pacers'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Cleveland Cavaliers": {
                matches: ['Cleveland Cavaliers'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Hawks": {
                matches: ['HAWKS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Rockets": {
                matches: ['ROCKETS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Raptors": {
                matches: ['RAPTORS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Pelicans": {
                matches: ['Pelicans'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Oklahoma City Thunder": {
                matches: ['OKC'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Timberwolves": {
                matches: ['TIMBERWOLVES'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Nuggets": {
                matches: ['NUGGETS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Kings": {
                matches: ['Kings'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Phoenix Suns": {
                matches: ['SUNS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Wizards": {
                matches: ['Wizards'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "San Antonio Spurs": {
                matches: ['SA SPURS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Hornets": {
                matches: ['HORNETS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Pistons": {
                matches: ['Pistons'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Dallas Mavericks": {
                matches: ['Dallas Mavericks'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Knicks": {
                matches: ['KNICKS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Trail Blazers": {
                matches: ['TRAIL BLAZERS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Clippers": {
                matches: ['CLIPPERS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },
            "Philadelphia 76ers": {
                matches: ['76ERS'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            "Magic": {
                matches: ['Magic'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Este"]
            },
            
        },

        // Versiones
        versions: {
            "Jugador": {
                matches: ['Player Version'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Fanatico": {
                matches: ['Fans'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Retro": {
                matches: ['Retro'],
                type: "version",
                categoryPath: ["Productos"]
            }
        },

        // Ediciones
        editions: {
            "Local": {
                matches: ['Home'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Visitante": {
                matches: ['Away'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Alternativa": {
                matches: ['Third'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Alternativa 2": {
                matches: ['Fourth'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Arquero": {
                matches: ['Goalkeeper'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Entrenamiento": {
                matches: ['Training'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Edicion Especial": {
                matches: ['Special Edition'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Edicion Aniversario": {
                matches: ['Special Edition', 'Anniversary'],
                type: "edicion",
                categoryPath: ["Productos"]
            }
           
        },

        // Características
        features: {
            "Manga Corta": {
                matches: [],
                type: "caracteristica",
                categoryPath: ["Productos"]
            },
            "Manga Larga": {
                matches: ['Long Sleeve', '长袖', '(长袖)'],
                type: "caracteristica",
                categoryPath: ["Productos"]
            }
        },
        
        colors: {
            "Negro": {
                matches: ['Black'],
                type: "color"
            },
            "Blanco": {
                matches: ['White'],
                type: "color"
            },
            "Azul": {
                matches: ['Blue', 'blue'],
                type: "color"
            },
            "Rojo": {
                matches: ['Red'],
                type: "color"
            },
            "Verde": {
                matches: ['Green'],
                type: "color"
            },
            "Amarillo": {
                matches: ['Yellow'],
                type: "color"
            },
            "Gris": {
                matches: ['Grey'],
                type: "color"
            },
            "Caqui": {
                matches: ['khaki'],
                type: "color"
            },
            "Violeta": {
                matches: ['Purple'],
                type: "color"
            },
            "Estampado": {
                matches: ['Comma'],
                type: "color"
            }
        },

        marcas: {
            "Puma": {
                matches: ['*PM', '(女)*PM', '*PM(球员童装)', '(长袖球员)*PM'],
                type: "marca"
            },
        },

        // Saltear, no add nada.
        nothings:{
            "": {
                matches: ['*圣斗士金色', '广岛三箭', '*狐狸', '(童装)(半拉链)', '*蓝黑', '*新广告', '*有领', '*气功悟空', '浦和红钻', '*海贼鸣人眼神', '#绿标', '*红袖边', '*蓝龙', '*耶稣', '(童装)', '字母印', '*柯南D', '#刺绣', '*草帽', '*眼镜帽子', '*蓝袖边多图', '(加绒)', 'Jersey(V领)', 'Jersey(圆领)', '(Trapeze Edition)', '(V领)', '飞人版', '*贝吉塔红', '*贝吉塔蓝', '*咒术回战', '*龙珠黑悟空', '*橙白赛亚人', '*MonK', '(Print Sponsor)', '(球员童装)', '长袖球员', '横滨水手', '*金广告', '*紫色标', '*金双狮', '*赛亚人黑色', '*富士山与塔', '*浪客剑心', '*犬夜叉白色', '(女)', '(长袖球员)', 'Concept', '半拉链', '萨尔斯堡红牛', '*红星队', 'Milky', '(High Quality)', '*忍者系黑衣', '*忍者系绿', '*忍者系蓝', '*忍者系紫', ],
                type: "nothing"
            },
        }
    },

    // Detector de temporadas
    seasonDetector: {
        regex: /(\d{4})(?:-(\d{2,4})|\/(\d{2,4})|\s+(\d{2,4}))|(\d{4})/g,
        type: "temporada",
        categoryPath: ["Productos"]
    },

    productOptions: {
        sizes: {
            // Adulto
            "S": {
                matches: ["S", "Adult Size S"],
                type: "size",
                price: 0
            },
            "M": {
                matches: ["M", "Adult Size M"],
                type: "size",
                price: 0
            },
            "L": {
                matches: ["L", "Adult Size L"],
                type: "size",
                price: 0
            },
            "XL": {
                matches: ["XL", "Adult Size XL"],
                type: "size",
                price: 1
            },
            "2XL": {
                matches: ["2XL", "XXL", "Adult Size XXL"],
                type: "size",
                price: 2
            },
            "3XL": {
                matches: ["3XL", "Adult Size 3XL"],
                type: "size",
                price: 2
            },
            "4XL": {
                matches: ["4XL", "Adult Size 4XL", "4xL"],
                type: "size",
                price: 2
            },
            "5XL": {
                matches: ["5XL", "Adult Size 5XL"],
                type: "size",
                price: 2
            },

            // Niños
            "9": {
                matches: ["9"],
                type: "size",
                price: 0
            },
            "10": {
                matches: ["10"],
                type: "size",
                price: 0
            },
            "12": {
                matches: ["12"],
                type: "size",
                price: 0
            },
            "14": {
                matches: ["14"],
                type: "size",
                price: 0
            },
            "16": {
                matches: ["16"],
                type: "size",
                price: 0
            },
            "18": {
                matches: ["18"],
                type: "size",
                price: 0
            },
            "20": {
                matches: ["20"],
                type: "size",
                price: 0
            },
            "22": {
                matches: ["22"],
                type: "size",
                price: 0
            },
            "24": {
                matches: ["24"],
                type: "size",
                price: 0
            },
            "26": {
                matches: ["26"],
                type: "size",
                price: 0
            },
            "28": {
                matches: ["28"],
                type: "size",
                price: 0
            }
        },
        badges: {
            "Sin insignia": {
                matches: ["No Badge", "MSC (左袖广告)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/e/8/e80a811156ddf959.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // UCL
            "UCL + Fundation": {
                matches: ["UCL (欧冠新章)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/a/0/a0acf265b53042a0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 5 + Fundation": {
                matches: ["UCL (新平条 5)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/0/0/006f62eb3aa1909c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 6 + Fundation": {
                matches: ["UCL(新平条 6)右袖", "UCL(新平条 6)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/b/a/ba8fd6939ccc0bf8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 7 + Fundation": {
                matches: ["UCL (新平条 7)右袖", "UCL +MSC (新平条 7+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/09/1/d/1d787a4c6498230d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL + Champions 9": {
                matches: ["UCL(欧冠球+小9杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/5/6/5637203255247a52.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champions 9 + Fundation": {
                matches: ["UCL (新平条/大耳杯15) 右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/3/8371526d80c58eaf.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL + Fundation + Escudo 20": {
                matches: ["UCL +Shield (欧冠+冠军盾20)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/f/1/f13917a931afeee8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL + Fundation + Escudo 20 + U-Power": {
                matches: ["UCL +Shield +U-Power (欧冠+冠军盾20+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/5/1/51b680b2baff6df2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL + Fundation + Escudo + Gate.io + U-Power": {
                matches: ["UCL +Shield +Gate.io +U-Power (欧冠+冠军盾20+左袖/背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/6/66ff7726150b1ce5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 7 + Fundation + Milan": {
                matches: ["UCL +MSC+ MILAN(新平条 7+左袖广告+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/b/e/be0acd6c9997be72.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            // UECL
            "UECL + Fundation": {
                matches: ["UECL(欧会杯45)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/3/1/3140ee6e9762ab4e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UECL + Fundation + Fever": {
                matches: ["UECL +fever(欧会杯+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/f/8/f8f11ec5a0892ae3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            // COPAS
            "Copa America 2024 + Vibra": {
                matches: ["Copa America 2024(美洲杯o)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/17/2/4/249ceb188fa977c5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "2022 FWC champion": {
                matches: ["World Champions 2022世界杯胸前金盾"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/a/9/a9c3924ea3344430.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"

            },
            "2022FWCC + 2026FWC clasificatorias + FUnited": {
                matches: ["FWCC2022 +2026FWC Qualifying (世预赛+胸前冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/9/7/970597847c7c97e9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "2026FWC clasificatorias + FUnited": {
                matches: ["2026 World Cup Qualifying (世预选)", "2026 World Cup Qualifying (世预选)", "2026FWC Qualifying (世预赛)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/9/8/982c73c16f531bb7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEFA Nations League + Fundation": {
                matches: ["UEFA NATIONS LEAGUE(欧国联章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/d/0/d0ea0f5dbb710229.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEFA Europa League + Fundation": {
                matches: ["UEFA E L (欧联45)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/1/f/1fd6025fc863d5c9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // Europa Leagues
            // > LaLiga
            "La Liga 45 + 2023/24": {
                matches: ["La Liga +23/24C (红冠军+45西甲)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/8/686e84c18c0004f3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "La Liga 45": {
                matches: ["La Liga (45西甲章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/f/6fcf280ecb88c188.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // > Bundersliga
            "Bundesliga": {
                matches: ["Bundesliga (德普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/31/8/b/8bdf7dd2865f6383.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Bundesliga + Sonepar": {
                matches: ["Bundesliga +Sonepar (德普章+左袖广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/2/7/273bb0d84fe23ed3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // > Premier
            "Premier League": {
                matches: ["Premier League (34英超普)", "Pre L +NO.or (34英超/章下字)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/b/6b8aa0557f64e822.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier League + No rac": {
                matches: ["Pre L + NO..for (34英超普+章下字)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/8/2849daa0df6783ca.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier League + No rac + Fever": {
                matches: ["Pre L +NO..for +fever (英超普/章下字+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/1/21432e05db504c25.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier League + No rac + Fever + Flor": {
                matches: ["Pre L +NO.or+ fever +Flower (英超/章下字+左袖广告+红花)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/0/7/0723db2ac74426ed.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier League + No rac + Flor": {
                matches: ["Pre L +NO.or+ Flower (英超/章下字+红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/f/2f8a92a783fee35e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier League + Flor": {
                matches: ["Pre L +NO.or+ Flower( 英超/章下字+红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/f/b/fbfb66b45a8eb819.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // > SerieA
            "Serie A": {
                matches: ["Serie A (意甲45)", "Serie A(意甲45)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/4/6/462e2dd4ce4860bd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Escudo 20": {
                matches: ["Shield (冠军盾20)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/5/65db16ccbf52eaba.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Seria A + Escudo 20": {
                matches: ["Serie A +Shield (意甲45+冠军盾20)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/2/9/29276c6c26b0554b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Escudo 20 + U-Power": {
                matches: ["Shield +U-Power (冠军盾20+背下广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/9/0/902088b48030de6b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Serie A + Escudo 20 + U-Power": {
                matches: ["Serie A +Shield +U-Power (意甲45+冠军盾20+背下广告)"],
                type: "badge",
                price: 2,
                "images": "https://us03-imgcdn.ymcart.com/97006/2024/12/20/7/1/71d09e0910805b3e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Serie A + Escudo 20 + Gate.io + U-Power": {
                matches: ["Serie A +Shield +Gate.io +U-Power (意甲+冠军盾20+左袖/背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/e/6/e6d5c7f35d86233d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Serie A + MSC": {
                matches: ["Serie A +MSC (意甲45+左袖广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/9/e/9e16d1aec42615d8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Serie A + MSC + MILAN": {
                matches: ["Serie A +MSC+ MILAN(意甲45+左袖广告+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/b/a/baa55b61af4ca93c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // > Ligue1
            "Ligue1 45": {
                matches: ["Ligue1 (45法甲黑)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/29/9/5/953477b403a87710.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // Sudamerica
            "Carabao Cup": {
                matches: ["Carabao Cup (英联赛杯)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/8/0/802bde86a7dfd67c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Brasileirao A 2025": {
                matches: ["Brasileirao A2025(巴甲)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/d/c/dc756284effb6b9e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Libertadores 3": {
                matches: ["libertadores 3(解放者/新3次)", "libertadores 3 (解放者/新3次)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/8/f/8f61a8c94426d8ec.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LPF": {
                matches: ["LPF(阿甲普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/f/c/fc7e015592193618.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Itau": {
                matches: ["itau.No.pel(25智联)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/8/8/88a5cd45fcad50ff.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            

            // Otros
            "Sonepar": {
                matches: ["Sonepar (左袖广告)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/1/8120ece630f938df.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Fifa 2016 + Champions 12 + Champions 2017": {
                matches: ["CUL(平条/12杯/17大耳杯/世俱2016ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/02/3/2/3253dfdcb97870ea.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Fifa 2017 + Champions 12 + Champions 2017": {
                matches: ["CUL(平条/12杯/17大耳杯/世俱2017ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/02/b/4/b4d7face98e9f357.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Liga BBVA MX": {
                matches: ["LIGA MX(墨西超)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/10/e/6/e6999f9820771981.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "RSL 45 dorado MI": {
                matches: ["RSL(45沙特金新月)左袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/23/6/b/6b9a830df95230ae.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "RSL 45 MI": {
                matches: ["RSL(45沙特联)左袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/07/2/4/24dfbe74f6e5ff61.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // NEWS
            "EFL": {
                matches: ["EFL Championship (英冠章)右"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/17/b/e/be98e294be07cf85.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            }
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXX"],
            //     type: "badge",
            //     price: 2,
            //     images: "XXXXXXXX"
            // },
        },
        customize: {
            "Sin dorsal": {
                matches: ["No Name No Number", "No Name Number", "No Name No Nubmer"],
                type: "customize",
                price: 0
            },
            "Con dorsal": {
                matches: ["Name / Number", "Name/ Number", "Name / Numbe", "Name/ Number (名在号下)", "Name / Number (24/25ad黑)只印后面", "Name / Number (专用周年标)", "Name / Number (只印后面)", "Name / Number (24/25ad红)", "Name / Number (名在号下)", "Name / Number (名在号上)", "Name / Number (FC Augsburg) (上带广告-名在号下)", "Name / Number (Mainz 05) (上带广告-名在号下)", "Name / Number (专用字体)", "Name / Number (只印后台)", "Name / Number (24/25黑ad)", "Name / Number (没广告-名在号上)", "Name / Number (24/25蓝ad)", "Name / Number (24/25白ad)", "Name / Number (没广告-名在号下)", "Name / Number (FC BAY.. MUN..)(带广告-名在号下)", "Name / Number (WERDER) (上带广告-名在号下)", "Name / Number (24/25ad蓝) 只印后面", "Name / Number (专用字体)前小号在PM下", "Name/ Number (RB Leipzig)(上带广告-名在号下)", "Name / Number (24/25ad白)"],
                type: "customize",
                price: 3
            },
            "Con dorsal (solo numero)": {
                matches: ["Number (No Name)"],
                type: "customize",
                price: 3
            },
            "Con dorsal v2": {
                matches: ["Name / Number (Bochum)(上带广告-名在号下)", "Name / Number (1.FC Köln)(名在号上-广告在下)", "Name/ Number (Stuttgart) (上带广告-名在号下)", "Name / Number (SAFI CiMENTO) (上带广告-名在号下)", "Name/ Number (Hamburger SV)(上带广告-名在号下)", "Name / Number (Hertha BSC)(上带广告-名在号下)"],
                type: "customize",
                price: 4
            },
            

            // Champions fonts
            "Con dorsal UCL fonts": {
                matches: ["Name / Number (UCL Fonts) 欧冠字体", "Name / Number (UCL Fonts)欧冠字体", "Name / Number (UCL Fonts)(名在号上)杯赛字体"],
                type: "customize",
                price: 4
            },

            // Europa Liga fonts
            "Con dorsal LaLiga fonts": {
                matches: ["Name / Number (La Liga Fonts) 联赛带吼", "Name / Number (La Liga Fonts)联赛字体", "Name / Number (La Liga Fonts) 联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal SerieA fonts": {
                matches: ["Name / Number (Serie A Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Ligue1 fonts": {
                matches: ["Name / Number ( Ligue1 Fonts )联赛字体", "Name / Number ( Ligue1 Fonts ) 联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal EFL fonts": {
                matches: ["Name / Number (EFL Fonts)英冠字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Liga fonts": {
                matches: ["Name / Number (Schalke04)(联赛号-名在号下)"],
                type: "customize",
                price: 4
            },

            // Copas fonts
            "Con dorsal CUP fonts": {
                matches: ["Name / Number (CUP Fonts) 杯赛字体-名在号下", "Name / Number (CUP Fonts) 杯赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Copa fonts": {
                matches: ["Name / Number (Cup match Fonts)杯赛字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal Liga fonts": {
                matches: ["Name / Number (League Fonts )联赛字体"],
                type: "customize",
                price: 3
            },

            // Otros
            "Con dorsal RSL fonts": {
                matches: ["Name / Number (RSL League Fonts)联赛字体-名在号下", "Name / Number (RSL League Fonts)联赛字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal PreLeague fonts": {
                matches: ["Name / Number (Pre League Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal LigaP fonts": {
                matches: ["Name / Number (Liga-P Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal SuperLigi": {
                matches: ["Name / Number (Super Ligi)(名在号下)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Bronce fonts": {
                matches: ["Name / Number (没广告-名在号上)铜色字"],
                type: "customize",
                price: 3
            },
            "Con dorsal anime": {
                matches: ["Name / Anime Number (24/25ad红色名-动漫号)"],
                type: "customize",
                price: 4
            },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXXXXX"],
            //     type: "customize",
            //     price: 3
            // }
        }
    }
};