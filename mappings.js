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
                "Otras": {
                    matches: ['Otras'],
                    description: "Otras",
                    categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
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
            categoryPath: ["Deportes", "Formula 1"]
        },

        // Indumentarias
        "Camisetas": {
            matches: ['Jersey', 'Shirts'],
            description: "Indumentaria camisetas",
            categoryPath: ["Indumentarias", "Camisetas"]
        },
        "Shorts": {
            matches: ['Shorts Pants'],
            description: "Indumentaria shorts",
            categoryPath: ["Indumentarias", "Shorts"]
        },
        "Medias": {
            matches: ['Socks'],
            description: "Accesorios medias deportivas",
            categoryPath: ["Indumentarias", "Medias"]
        },
        "Conjuntos Largos": {
            matches: ['Tracksuit', 'Tracksuit Jacket', 'Hoodie', 'Half Pull', '(卫衣套装)'],
            description: "Indumentaria conjuntos",
            categoryPath: ["Indumentarias", "Conjuntos Largos"]
        },
        "Conjuntos Cortos": {
            matches: ['Training Short', 'Tank top and shorts suit'],
            description: "Indumentaria conjuntos",
            categoryPath: ["Indumentarias", "Conjuntos Cortos"]
        },
        "Mujer": {
            matches: ['Women'],
            description: "Indumentaria Mujer",
            categoryPath: ["Indumentarias", "Mujer"]
        },
        "Niños": {
            matches: ['Kids'],
            description: "Indumentaria Niños",
            categoryPath: ["Indumentarias", "Niños"]
        },
        "Bebes": {
            matches: ['Baby Infant Crawl Suit'],
            description: "Indumentaria Bebes",
            categoryPath: ["Indumentarias", "Bebes"]
        },
            "Remeras": {
                matches: ['T-Shirt', 'Champion'],
                description: "Indumentaria Remeras casual",
                categoryPath: ["Casual", "Remeras"]
            },
            "Pantalones cortos": {
                matches: ['Casual Short'],
                description: "Indumentaria Pantalones cortos casual",
                categoryPath: ["Casual", "Pantalones cortos"]
            },
            "Pantalones largos": {
                matches: ['Sweatpants'],
                description: "Indumentaria Pantalones largos casual",
                categoryPath: ["Casual", "Pantalones largos"]
            },
            "Chombas": {
                matches: ['Polo'],
                description: "Indumentaria Chombas casual",
                categoryPath: ["Casual", "Chombas"]
            },
            "Buzos": {
                matches: ['Hoody'],
                description: "Indumentaria Chombas casual",
                categoryPath: ["Casual", "Buzos"]
            },
            "Chalecos": {
                matches: ['Vest'],
                type: "edicion",
                categoryPath: ["Casual", "Chalecos"]
            },
            "Camperones": {
                matches: ['Cotton Coat'],
                description: "Indumentaria de abrigo camperon",
                categoryPath: ["Casual", "Camperones"]
            },
            "Rompevientos": {
                matches: ['Windbreaker', 'Outdoor Jackets'],
                description: "Indumentaria de abrigo rompeviento",
                categoryPath: ["Casual", "Rompevientos"]
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
    //         categoryPath: ["Formula 1"]
    //     },
    //         "Camisetas": {
    //             matches: ['Jersey', 'Shirt'],
    //             description: "Indumentaria camisetas",
    //             categoryPath: ["Formula 1", "Camisetas"]
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
            "Southampton": {
                matches: ['Southampton'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Fulham": {
                matches: ['Fulham'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Cardiff City": {
                matches: ['Cardiff City'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Burnley": {
                matches: ['Burnley'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Bournemouth": {
                matches: ['Bournemouth'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Norwich": {
                matches: ['Norwich'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Nottingham Forest": {
                matches: ['Nottingham Forest'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Premier League"]
            },
            "Ipswich Town": {
                matches: ['Ipswich'],
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
            "RCD Espanyol": {
                matches: ['RCD Espanyol'],
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
            "Racing de Santander": {
                matches: ['Santander'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Tenerife": {
                matches: ['Tenerife'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Malaga": {
                matches: ['Malaga'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Gijon": {
                matches: ['Gijon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Getafe": {
                matches: ['Getafe'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Deportivo Alaves": {
                matches: ['Alaves'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Deportivo de La Coruña": {
                matches: ['La Coruna'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Las Palmas": {
                matches: ['Las Palmas'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Granada": {
                matches: ['Granada'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Deportivo Huesca": {
                matches: ['Huesca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Valladolid": {
                matches: ['Valladolid'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Mallorca": {
                matches: ['Mallorca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Elche": {
                matches: ['Elche'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Real Oviedo": {
                matches: ['Real Oviedo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },
            "Club Deportivo Leganes": {
                matches: ['Leganes'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "La Liga"]
            },


            // Ligue 1
            "París Saint-Germain": {
                matches: ['PSG', 'PSG Paris'],
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
            "OGC Nice": {
                matches: ['OGC Nice'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Auxerre": {
                matches: ['Auxerre'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Havre Athletic": {
                matches: ['Havre Athletic'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Stade Brestois": {
                matches: ['Stade Brestois'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Reims": {
                matches: ['Reims'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Metz": {
                matches: ['Metz'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Saint Etienne": {
                matches: ['Saint Etienne'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Toulouse": {
                matches: ['Toulouse'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Ligue 1"]
            },
            "Nantes": {
                matches: ['Nantes'],
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
            "Hamburgo": {
                matches: ['hamburg'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Colonia": {
                matches: ['Koln'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Magdeburg": {
                matches: ['Magdeburg'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            }, 
            "Hertha Berliner": {
                matches: ['Hertha BSC'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            }, 
            "Kaiserslautern": {
                matches: ['Kaiserslautern'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Stuttgart": {
                matches: ['Stuttgart'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Holstein Kiel": {
                matches: ['Holstein Kiel'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Fortuna Dusseldorf": {
                matches: ['Fortuna Dusseldorf'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "FSV Mainz 05": {
                matches: ['Mainz 05'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Karlsruher": {
                matches: ['Karlsruher'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Augsburgo": {
                matches: ['Augsburg'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "VfL Bochum": {
                matches: ['VfL Bochum'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "SC Freiburg": {
                matches: ['Freiburg'],
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
            "Cagliari": {
                matches: ['Cagliari'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Atlanta": {
                matches: ['Atlanta'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Bologna": {
                matches: ['Bologna'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Hellas Verona": {
                matches: ['Verona'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Calcio Monza": {
                matches: ['Monza'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Lecce": {
                matches: ['Lecce'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Calcio Como": {
                matches: ['Como'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Genoa Cricket": {
                matches: ['Genoa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Empoli": {
                matches: ['Empoli'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Serie A"]
            },
            "Udinese Calcio": {
                matches: ['Udinese'],
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
                matches: ['Boca', 'Boca Juniors'],
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
            "Almirante Brown": {
                matches: ['Almirante Brown'],
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
            "Deportivo Palestino": {
                matches: ['Deportivo Palestino'],
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
            "Puebla": {
                matches: ['Puebla'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Tijuana": {
                matches: ['Tijuana'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Club America": {
                matches: ['Club America'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Toluca": {
                matches: ['Toluca'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Santos Laguna": {
                matches: ['Laguna'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Cruz Azul": {
                matches: ['Azul'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Queretaro": {
                matches: ['Queretaro'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Tapatio": {
                matches: ['Tapatio'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Monterrey": {
                matches: ['Monterrey'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },
            "Atlas": {
                matches: ['Atlas'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Liga MX"]
            },


            // MLS
            "Diego": {
                matches: ['Diego'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Inter Miami": {
                matches: ['Inter Miami'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Charlotte": {
                matches: ['Charlotte', 'CHarlotte'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "New York City": {
                matches: ['York'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Los Angeles": {
                matches: ['Los Angeles'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Orlando City": {
                matches: ['Orlando'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Montreal": {
                matches: ['Montreal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Vancouver Whitecaps": {
                matches: ['Vancouver Whitecaps'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Portland Timbers": {
                matches: ['Portland Timbers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Los Angeles Galaxy": {
                matches: ['LA Galaxy'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "New England Revolution": {
                matches: ['Revolution'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Tampa Bay Mutiny": {
                matches: ['Tampa Bay Mutiny'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Chicago Fire": {
                matches: ['Chicago Fire'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Columbus Crew": {
                matches: ['Columbus Crew'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },


            // Eredivise
            "Ajax": {
                matches: ['Ajax'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Eredivise"]
            },
            "Feyenoord": {
                matches: ['Feyenoord'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Eredivise"]
            },
            "PSV": {
                matches: ['PSV'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Eredivise"]
            },


            // Portugal
            "Benfica": {
                matches: ['Benfica'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primeira Liga"]
            },
            "Porto": {
                matches: ['Porto'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primeira Liga"]
            },
            "Sporting Lisbon": {
                matches: ['Sporting Lisbon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Primeira Liga"]
            },


            // Otros clubes
            "Copenhagen": {
                matches: ['Copenhagen'],
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
            "AIK": {
                matches: ['AIK'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Vissel Kobe": {
                matches: ['vissel kobe'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Millonarios": {
                matches: ['Millonarios'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Yokohama F. Marinos": {
                matches: ['Yokohama F. Marinos'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Coventry City": {
                matches: ['Coventry'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Cerro Porteño": {
                matches: ['Cerro Porteno'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "LDU Quito": {
                matches: ['LDU Quito'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Galatasaray": {
                matches: ['Galatasaray'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Fenerbahce": {
                matches: ['Fenerbahce'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Nassr": {
                matches: ['Nassr'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Ittihad": {
                matches: ['Ittihad'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Olimpia": {
                matches: ['Olimpia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Criciuma": {
                matches: ['Criciuma'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Bristol Rovers": {
                matches: ['Bristol Rovers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Ultimate Mostoles": {
                matches: ['Ultimate Mostoles'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Urawa Red Diamonds": {
                matches: ['Urawa Red Diamonds'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Sanfrecce Hiroshima": {
                matches: ['Sanfrecce Hiroshima'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Ceara Sporting": {
                matches: ['Ceara Sporting'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Luton Town": {
                matches: ['Luton Town'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Sagan Tosu": {
                matches: ['Sagan Tosu'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Young Africa": {
                matches: ['Young Africa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Versailles": {
                matches: ['Versailles'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Birmingham": {
                matches: ['Birmingham'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "AL AHLY": {
                matches: ['AL AHLY'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Bolton": {
                matches: ['Bolton'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Ivory Coast": {
                matches: ['Ivory Coast'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Frosinone Calcio": {
                matches: ['Frosinone Calcio'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "San Luis": {
                matches: ['San Luis'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "FCSB": {
                matches: ['FCSB'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Maccabi Haifa": {
                matches: ['Maccabi Haifa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "San Fernando": {
                matches: ['San Fernando'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Ulsan": {
                matches: ['Ulsan'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Coritiba": {
                matches: ['Coritiba'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Shakhtar Donetsk": {
                matches: ['Shakhtar Donetsk'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Aberdeen": {
                matches: ['Aberdeen'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Salernitana": {
                matches: ['Salernitana'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "BaHia": {
                matches: ['BaHia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Penarol": {
                matches: ['Penarol'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Rangers": {
                matches: ['Rangers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Legia Warszawa": {
                matches: ['Legia Warszawa'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Hull City": {
                matches: ['Hull City'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Cliftonville": {
                matches: ['Cliftonville'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Famalicao": {
                matches: ['Famalicao'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Wycombe Wanderers": {
                matches: ['Wycombe Wanderers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Besiktas": {
                matches: ['Besiktas'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Cerezo Osaka": {
                matches: ['Cerezo Osaka'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "North Carolina": {
                matches: ['North Carolina'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Swansea City": {
                matches: ['Swansea City'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Michigan": {
                matches: ['Michigan'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Bullets": {
                matches: ['Bullets'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Los Angeles Dodgers": {
                matches: ['LosAngelesDodgers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Al-Ahli": {
                matches: ['Ahli'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Al-Hilal": {
                matches: ['Hilal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Huddersfield": {
                matches: ['Huddersfield'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Portsmouth": {
                matches: ['Portsmouth'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Plymouth": {
                matches: ['Plymouth'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Real Murcia": {
                matches: ['Real Murcia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Wrexham": {
                matches: ['Wrexham'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Kabylie": {
                matches: ['Kabylie'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "USM Alger": {
                matches: ['USM Alger'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Bari": {
                matches: ['Bari'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Burgos": {
                matches: ['Burgos'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Blackburn": {
                matches: ['Blackburn'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Preston North": {
                matches: ['Preston North'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Derby County": {
                matches: ['Derby County'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Albacete": {
                matches: ['Albacete'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Mamelodi Sundowns": {
                matches: ['Mamelodi Sundowns'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Recife Sports": {
                matches: ['Recife Sports'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },

            // NEWS FALTA CLASIFICAR
            // "Template": {
            //     matches: ['Template'],
            //     type: "equipo",
            //     categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            // },
            
            
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
            "Austria": {
                matches: ['Austria'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Euro"]
            },
            "Ukraine": {
                matches: ['Ukraine'],
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
            "USA": {
                matches: ['USA'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Colombia": {
                matches: ['Colombia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Venezuela": {
                matches: ['Venezuela'],
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
            "Jamaica": {
                matches: ['Jamaica'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Senegal": {
                matches: ['Senegal'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Australia": {
                matches: ['Australia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Arabia Saudita": {
                matches: ['Saudi Arabia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Tunez": {
                matches: ['Tunisia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Guatemala": {
                matches: ['Guatemala'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Filipinas": {
                matches: ['Philippines'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Romania": {
                matches: ['Romania'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Yugoslavia": {
                matches: ['Yugoslavia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Argelia": {
                matches: ['Algeria'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Qatar": {
                matches: ['Qatar'],
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
            "OKC Thunder": {
                matches: ['Thunder'],
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
            "SA Spurs FOX": {
                matches: ['FOX'],
                type: "equipo",
                categoryPath: ["Deportes", "Básquet", "NBA", "Conferencia Oeste"]
            },

            // Formula 1
            "Ducati": {
                matches: ['DUCATI'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "Yamaha": {
                matches: ['YAMaHA'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "Toyota": {
                matches: ['Toyota'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "Mercedes": {
                matches: ['Mercedes'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "Aston Martin": {
                matches: ['Aston Martin'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "Ferrari": {
                matches: ['Ferrari'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },
            "McLaren": {
                matches: ['McLaren'],
                type: "equipo",
                categoryPath: ["Deportes", "Formula 1"]
            },


            // Rugby
            "Fi-Ji": {
                matches: ['Jian'],
                type: "equipo",
                categoryPath: ["Deportes", "Rugby"]
            },
            "Nueva Zelanda": {
                matches: ['New Zealand'],
                type: "equipo",
                categoryPath: ["Deportes", "Rugby"]
            },
            "All Blacks": {
                matches: ['All Blacks'],
                type: "equipo",
                categoryPath: ["Deportes", "Rugby"]
            },
            
        },

        versions: {
            "Jugador": {
                matches: ['Player Version', 'Playr'],
                type: "version",
                categoryPath: ["Deportes"]
            },
            "Fanatico": {
                matches: ['Fans'],
                type: "version",
                categoryPath: ["Deportes"]
            },
            "Retro": {
                matches: ['Retro'],
                type: "version",
                categoryPath: ["Deportes"]
            }
        },

        editions: {
            "Local": {
                matches: ['Home'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Visitante": {
                matches: ['Away'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Alternativa": {
                matches: ['Third'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Alternativa 2": {
                matches: ['Fourth'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Arquero": {
                matches: ['Goalkeeper'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Entrenamiento": {
                matches: ['Training'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Edicion Especial": {
                matches: ['Special Edition'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Edicion Aniversario": {
                matches: ['Anniversary'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            "Edicion Conmemorativa": {
                matches: ['Commemorative Edition'],
                type: "edicion",
                categoryPath: ["Deportes"]
            },
            
        },

        features: {
            "Manga Corta": {
                matches: [],
                type: "caracteristica",
                categoryPath: ["Deportes"]
            },
            "Manga Larga": {
                matches: ['Long Sleeve', '长袖', '(长袖)'],
                type: "caracteristica",
                categoryPath: ["Deportes"]
            },
            "Reversible": {
                matches: ['Double Sided', '(双面风衣)'],
                type: "caracteristica",
                categoryPath: ["Deportes"]
            },
            "Terciopelo": {
                matches: ['Velvet Thickened', "卡其色(加绒)蓝标", "红色(加绒)蓝标", "灰色(加绒)蓝标", "宝蓝色(加绒)蓝标", "白色(加绒)蓝标", "黑色(加绒)蓝标", "红色(加绒)绿标", "宝蓝色(加绒)绿标", "灰色(加绒)绿标", "白色(加绒)绿标", "卡其色(加绒)绿标", "黑色(加绒)绿标","卡其色(加绒)", "红色(加绒)", "白色(加绒)", "宝蓝色(加绒)", "灰色(加绒)", "黑色(加绒)"],
                type: "caracteristica",
                categoryPath: ["Deportes"]
            }
        },
        
        colors: {
            "Negro": { matches: ['Black', 'Blakc'], type: "color" },
            "Blanco": { matches: ['White', '&White'], type: "color" },
            "Azul": { matches: ['Blue', 'blue'], type: "color" },
            "Rojo": { matches: ['Red'], type: "color" },
            "Verde": { matches: ['Green'], type: "color" },
            "Amarillo": { matches: ['Yellow'], type: "color" },
            "Gris": { matches: ['Grey', 'gray'], type: "color" },
            "Naranja": { matches: ['Orange'], type: "color" },
            "Violeta": { matches: ['Purple'], type: "color" },
            "Rosado": { matches: ['Pink'], type: "color" },
            "Beige": { matches: ['Beige'], type: "color" },
            "Bordo": { matches: ['Maroon'], type: "color" },
            "Caqui": { matches: ['khaki', 'Earthy'], type: "color" },
            "Dorado": { matches: ['Gold', 'Golden'], type: "color" },
            "Royal": { matches: ['Royal'], type: "color" },
            "Cielo": { matches: ['Sky'], type: "color" },
            "Jujube": { matches: ['Jujube'], type: "color" },
            "Claro": { matches: ['Light'], type: "color" },
            "Oscuro": { matches: ['Dark'], type: "color" },
            "Militar": { matches: ['Army'], type: "color" },
            "Marino": { matches: ['Navy'], type: "color" },
            "Fluorescente": { matches: ['Fluorescent'], type: "color" },
            "Elegante": { matches: ['Fancy'], type: "color" },
            "Estampado": { matches: ['Comma', 'Picture', 'Halloween', 'Joint', 'Anime'], type: "color" }
        },

        numbers: {
            "25th": { matches: ['25th'], type: "number" },
            "30th": { matches: ['30th'], type: "number" },
            "50th": { matches: ['50th'], type: "number" },
            "70th": { matches: ['70th'], type: "number" },
            "100th": { matches: ['100th'], type: "number" },
            "112th": { matches: ['112th'], type: "number" },
            "125th": { matches: ['125th'], type: "number" },
            "133th": { matches: ['133th'], type: "number" },
            "150th": { matches: ['150th'], type: "number" },
            "#00": { matches: ["#00"], type: "number" },
            "#01": { matches: ["#01"], type: "number" },
            "#02": { matches: ["#02"], type: "number" },
            "#03": { matches: ["#03"], type: "number" },
            "#04": { matches: ["#04"], type: "number" },
            "#05": { matches: ["#05"], type: "number" },
            "#06": { matches: ["#06"], type: "number" },
            "#07": { matches: ["#07"], type: "number" },
            "#08": { matches: ["#08"], type: "number" },
            "#09": { matches: ["#09"], type: "number" },
            "#10": { matches: ["#10", "10#"], type: "number" },
            "#11": { matches: ["#11"], type: "number" },
            "#12": { matches: ["#12"], type: "number" },
            "#13": { matches: ["#13"], type: "number" },
            "#14": { matches: ["#14"], type: "number" },
            "#15": { matches: ["#15"], type: "number" },
            "#16": { matches: ["#16"], type: "number" },
            "#17": { matches: ["#17"], type: "number" },
            "#18": { matches: ["#18"], type: "number" },
            "#19": { matches: ["#19"], type: "number" },
            "#20": { matches: ["#20"], type: "number" },
            "#21": { matches: ["#21"], type: "number" },
            "#22": { matches: ["#22"], type: "number" },
            "#23": { matches: ["#23"], type: "number" },
            "#24": { matches: ["#24"], type: "number" },
            "#25": { matches: ["#25"], type: "number" },
            "#26": { matches: ["#26"], type: "number" },
            "#27": { matches: ["#27"], type: "number" },
            "#28": { matches: ["#28"], type: "number" },
            "#29": { matches: ["#29"], type: "number" },
            "#30": { matches: ["#30"], type: "number" },
            "#31": { matches: ["#31"], type: "number" },
            "#32": { matches: ["#32"], type: "number" },
            "#33": { matches: ["#33"], type: "number" },
            "#34": { matches: ["#34"], type: "number" },
            "#35": { matches: ["#35"], type: "number" },
            "#36": { matches: ["#36"], type: "number" },
            "#37": { matches: ["#37"], type: "number" },
            "#38": { matches: ["#38"], type: "number" },
            "#39": { matches: ["#39"], type: "number" },
            "#40": { matches: ["#40"], type: "number" },
            "#41": { matches: ["#41"], type: "number" },
            "#42": { matches: ["#42"], type: "number" },
            "#43": { matches: ["#43"], type: "number" },
            "#44": { matches: ["#44"], type: "number" },
            "#45": { matches: ["#45"], type: "number" },
            "#46": { matches: ["#46"], type: "number" },
            "#47": { matches: ["#47"], type: "number" },
            "#48": { matches: ["#48"], type: "number" },
            "#49": { matches: ["#49"], type: "number" },
            "#50": { matches: ["#50"], type: "number" },
            "#51": { matches: ["#51"], type: "number" },
            "#52": { matches: ["#52"], type: "number" },
            "#53": { matches: ["#53"], type: "number" },
            "#54": { matches: ["#54"], type: "number" },
            "#55": { matches: ["#55"], type: "number" },
            "#56": { matches: ["#56"], type: "number" },
            "#57": { matches: ["#57"], type: "number" },
            "#58": { matches: ["#58"], type: "number" },
            "#59": { matches: ["#59"], type: "number" },
            "#60": { matches: ["#60"], type: "number" },
            "#61": { matches: ["#61"], type: "number" },
            "#62": { matches: ["#62"], type: "number" },
            "#63": { matches: ["#63"], type: "number" },
            "#64": { matches: ["#64"], type: "number" },
            "#65": { matches: ["#65"], type: "number" },
            "#66": { matches: ["#66"], type: "number" },
            "#67": { matches: ["#67"], type: "number" },
            "#68": { matches: ["#68"], type: "number" },
            "#69": { matches: ["#69"], type: "number" },
            "#70": { matches: ["#70"], type: "number" },
            "#71": { matches: ["#71"], type: "number" },
            "#72": { matches: ["#72"], type: "number" },
            "#73": { matches: ["#73"], type: "number" },
            "#74": { matches: ["#74"], type: "number" },
            "#75": { matches: ["#75"], type: "number" },
            "#76": { matches: ["#76"], type: "number" },
            "#77": { matches: ["#77"], type: "number" },
            "#78": { matches: ["#78"], type: "number" },
            "#79": { matches: ["#79"], type: "number" },
            "#80": { matches: ["#80"], type: "number" },
            "#81": { matches: ["#81"], type: "number" },
            "#82": { matches: ["#82"], type: "number" },
            "#83": { matches: ["#83"], type: "number" },
            "#84": { matches: ["#84"], type: "number" },
            "#85": { matches: ["#85"], type: "number" },
            "#86": { matches: ["#86"], type: "number" },
            "#87": { matches: ["#87"], type: "number" },
            "#88": { matches: ["#88"], type: "number" },
            "#89": { matches: ["#89"], type: "number" },
            "#90": { matches: ["#90"], type: "number" },
            "#91": { matches: ["#91"], type: "number" },
            "#92": { matches: ["#92"], type: "number" },
            "#93": { matches: ["#93"], type: "number" },
            "#94": { matches: ["#94"], type: "number" },
            "#95": { matches: ["#95"], type: "number" },
            "#96": { matches: ["#96"], type: "number" },
            "#97": { matches: ["#97"], type: "number" },
            "#98": { matches: ["#98"], type: "number" },
            "#99": { matches: ["#99"], type: "number" },
            "#2308": { matches: ["#2308"], type: "number" },
            "#2312": { matches: ["#2312"], type: "number" },
            "#2310": { matches: ["#2310"], type: "number" },
            "#AB07": { matches: ["#AB07"], type: "number" },
            "#AJ18": { matches: ["#AJ18"], type: "number" },
            "#A30": { matches: ["#A30"], type: "number" },
            "#A31": { matches: ["#A31"], type: "number" },
            "#A32": { matches: ["#A32"], type: "number" },
            "#A781": { matches: ["#A781"], type: "number" },
            "#A794": { matches: ["#A794"], type: "number" },
            "#A805": { matches: ["#A805"], type: "number" },
            "#A796": { matches: ["#A796"], type: "number" },
            "CQ01": { matches: ["CQ01"], type: "number" },
            "CN01": { matches: ["CN01"], type: "number" },
            "NJ12": { matches: ["NJ12"], type: "number" },
            "ND08": { matches: ["ND08", '#ND08'], type: "number" },
            "#NM07": { matches: ["#NM07"], type: "number" },
            "#AB08": { matches: ["#AB08"], type: "number" },
            "#AM05": { matches: ["#AM05"], type: "number" },
            "#A33": { matches: ["#A33"], type: "number" },
            "NM07": { matches: ["NM07"], type: "number" },
            "T107": { matches: ["T107"], type: "number" },
            "T110": { matches: ["T110"], type: "number" },
            "T111": { matches: ["T111"], type: "number" },
            "T112": { matches: ["T112"], type: "number" },
            "T113": { matches: ["T113"], type: "number" },
            "T114": { matches: ["T114"], type: "number" },
            "T115": { matches: ["T115"], type: "number" },
            "T116": { matches: ["T116"], type: "number" },
            "T117": { matches: ["T117"], type: "number" },
            "T118": { matches: ["T118"], type: "number" },
            "T119": { matches: ["T119"], type: "number" },
            "T120": { matches: ["T120"], type: "number" },
            "T121": { matches: ["T121"], type: "number" },
            "T122": { matches: ["T122"], type: "number" },
            "T123": { matches: ["T123"], type: "number" },
            "T124": { matches: ["T124"], type: "number" },
            "T125": { matches: ["T125"], type: "number" },
            "T126": { matches: ["T126"], type: "number" },
            "T127": { matches: ["T127"], type: "number" },
            "T128": { matches: ["T128"], type: "number" },
            "T129": { matches: ["T129"], type: "number" },
            "T130": { matches: ["T130"], type: "number" },
            "T131": { matches: ["T131"], type: "number" },
            "T132": { matches: ["T132"], type: "number" },
            "T133": { matches: ["T133"], type: "number" },
            "T135": { matches: ["T135"], type: "number" },
            "T136": { matches: ["T136"], type: "number" },
            "T137": { matches: ["T137满分"], type: "number" },
            "T138": { matches: ["T138"], type: "number" },
            "T139": { matches: ["T139"], type: "number" },
            "T140": { matches: ["T140"], type: "number" },
            "T141": { matches: ["T141"], type: "number" },
            "T142": { matches: ["T142"], type: "number" },
            "T143": { matches: ["T143"], type: "number" },
            "T144": { matches: ["T144"], type: "number" },
            "T145": { matches: ["T145"], type: "number" },
            "T146": { matches: ["T146"], type: "number" },
            "T147": { matches: ["T147"], type: "number" },
            "T148": { matches: ["T148"], type: "number" },
            "T149": { matches: ["T149"], type: "number" },
            "T150": { matches: ["T150"], type: "number" },
            "T152": { matches: ["T152"], type: "number" },
            "T153": { matches: ["T153"], type: "number" },
            "T156": { matches: ["T156"], type: "number" },
            "T157": { matches: ["T157"], type: "number" },
            "T158": { matches: ["T158"], type: "number" },
            "T160": { matches: ["T160"], type: "number" },
            "T161": { matches: ["T161"], type: "number" },
            "T162": { matches: ["T162"], type: "number" },
            "T163": { matches: ["T163"], type: "number" },
            "T165": { matches: ["T165"], type: "number" },
            "T166": { matches: ["T166"], type: "number" },
            "T167": { matches: ["T167"], type: "number" },
            "T169": { matches: ["T169"], type: "number" },
            "T170": { matches: ["T170"], type: "number" },
            "T171": { matches: ["T171"], type: "number" },
            "T172": { matches: ["T172"], type: "number" },
            "T173": { matches: ["T173"], type: "number" },
            "T174": { matches: ["T174"], type: "number" },
            "T175": { matches: ["T175"], type: "number" },
            "T176": { matches: ["T176"], type: "number" },
            "T177": { matches: ["T177"], type: "number" },
            "T178": { matches: ["T178"], type: "number" },
            "T179": { matches: ["T179"], type: "number" },
            "T180": { matches: ["T180"], type: "number" },
            "T181": { matches: ["T181"], type: "number" },
            "T182": { matches: ["T182"], type: "number" },
            "T183": { matches: ["T183"], type: "number" },
            "T184": { matches: ["T184"], type: "number" },
            "T185": { matches: ["T185"], type: "number" },
            "T186": { matches: ["T186"], type: "number" },
            "T187": { matches: ["T187"], type: "number" },
            "T188": { matches: ["T188"], type: "number" },
            "T189": { matches: ["T189"], type: "number" },
            "T190": { matches: ["T190"], type: "number" },
            "T191": { matches: ["T191"], type: "number" },
            "T192": { matches: ["T192"], type: "number" },
            "T193": { matches: ["T193"], type: "number" },
            "T194": { matches: ["T194"], type: "number" },
            "T195": { matches: ["T195"], type: "number" },
            "T196": { matches: ["T196"], type: "number" },
            "T197": { matches: ["T197"], type: "number" },
            "T198": { matches: ["T198"], type: "number" },
            "T199": { matches: ["T199"], type: "number" },
            "T200": { matches: ["T200"], type: "number" },
            "T201": { matches: ["T201"], type: "number" },
            "T202": { matches: ["T202"], type: "number" },
            "T203": { matches: ["T203"], type: "number" },
            "T204": { matches: ["T204"], type: "number" },
            "T205": { matches: ["T205"], type: "number" },
            "T206": { matches: ["T206"], type: "number" },
            "T207": { matches: ["T207"], type: "number" },
            "T208": { matches: ["T208"], type: "number" },
            "T209": { matches: ["T209"], type: "number" },
            "T210": { matches: ["T210"], type: "number" },
            "T211": { matches: ["T211"], type: "number" },
            "T212": { matches: ["T212"], type: "number" },
            "T213": { matches: ["T213"], type: "number" },
            "T214": { matches: ["T214"], type: "number" },
            "T215": { matches: ["T215"], type: "number" },
            "T216": { matches: ["T216"], type: "number" },
            "T217": { matches: ["T217"], type: "number" },
            "T219": { matches: ["T219"], type: "number" },
            "T220": { matches: ["T220"], type: "number" },
            "T221": { matches: ["T221"], type: "number" },
            "T222": { matches: ["T222"], type: "number" },
            "T223": { matches: ["T223"], type: "number" },
            "T224": { matches: ["T224"], type: "number" },
            "T225": { matches: ["T225"], type: "number" },
            "T226": { matches: ["T226"], type: "number" },
            "T227": { matches: ["T227"], type: "number" },
            "T228": { matches: ["T228"], type: "number" },
            "T229": { matches: ["T229"], type: "number" },
            "T230": { matches: ["T230"], type: "number" },
            "T231": { matches: ["T231"], type: "number" },
            "T232": { matches: ["T232"], type: "number" },
            "T234": { matches: ["T234"], type: "number" },
            "T235": { matches: ["T235"], type: "number" },
            "T236": { matches: ["T236"], type: "number" },
            "T237": { matches: ["T237"], type: "number" },
            "T238": { matches: ["T238"], type: "number" },
            "T239": { matches: ["T239"], type: "number" },
            "T240": { matches: ["T240"], type: "number" },
            "T241": { matches: ["T241"], type: "number" },
            "T242": { matches: ["T242"], type: "number" },
            "T244": { matches: ["T244"], type: "number" },
            "T246": { matches: ["T246"], type: "number" },
            "T247": { matches: ["T247"], type: "number" },
            "T248": { matches: ["T248"], type: "number" },
            "T249": { matches: ["T249"], type: "number" },
            "T250": { matches: ["T250"], type: "number" },
            "T251": { matches: ["T251"], type: "number" },
            "T252": { matches: ["T252"], type: "number" },
            "T254": { matches: ["T254"], type: "number" },
            "T255": { matches: ["T255"], type: "number" },
            "T256": { matches: ["T256"], type: "number" },
            "T257": { matches: ["T257"], type: "number" },
            "T258": { matches: ["T258"], type: "number" },
            "T259": { matches: ["T259"], type: "number" },
            "T260": { matches: ["T260"], type: "number" },
            "T261": { matches: ["T261"], type: "number" },
            "T262": { matches: ["T262"], type: "number" },
            "T263": { matches: ["T263"], type: "number" },
            "T264": { matches: ["T264"], type: "number" },
            "T265": { matches: ["T265"], type: "number" },
            "T266": { matches: ["T266"], type: "number" },
            "T272": { matches: ["T272"], type: "number" },
            "T273": { matches: ["T273"], type: "number" },
            "T280": { matches: ["T280"], type: "number" },
            "T281": { matches: ["T281"], type: "number" },
            "T282": { matches: ["T282"], type: "number" },
            "T888": { matches: ["T888"], type: "number" },
            "#F701冲锋衣": { matches: ["#F701冲锋衣"], type: "text" },
            "#F706冲锋衣": { matches: ["#F706冲锋衣"], type: "text" },
            "#F700冲锋衣": { matches: ["#F700冲锋衣"], type: "text" },
            "#F705冲锋衣": { matches: ["#F705冲锋衣"], type: "text" },
            "#F703冲锋衣": { matches: ["#F703冲锋衣"], type: "text" },
            "#F707冲锋衣": { matches: ["#F707冲锋衣"], type: "text" },
            "#G234": { matches: ["#G234"], type: "number" },
            "#G234": { matches: ["#G234"], type: "number" },
            "#G235": { matches: ["#G235"], type: "number" },
            "#G236": { matches: ["#G236"], type: "number" },
            "#G237": { matches: ["#G237"], type: "number" },
            "#G238": { matches: ["#G238", "#G238(白绿标)"], type: "number" },
            "#G239": { matches: ["#G239(白彪标)"], type: "number" },
            "#G240": { matches: ["#G240(绿彪标)"], type: "number" },
            "#G241": { matches: ["#G241(蓝彪标)"], type: "number" },
            "#G242": { matches: ["#G242(绿彪标)"], type: "number" },
            "#G243": { matches: ["#G243(白彪标)"], type: "number" },
            "#G244": { matches: ["#G244(橙标)"], type: "number" },
            "#G245": { matches: ["#G245(白标)"], type: "number" },
            "#G246": { matches: ["#G246(橙标)"], type: "number" },
            "#G247": { matches: ["#G247(黑标)"], type: "number" },
            "#G248": { matches: ["#G248(橙标)"], type: "number" },
            "#G249": { matches: ["#G249(白标)"], type: "number" },
            "#G250": { matches: ["#G250"], type: "number" },
            "#G251": { matches: ["#G251"], type: "number" },
            "#G252": { matches: ["#G252"], type: "number" },
            "#G253": { matches: ["#G253(黄标)"], type: "number" },
            "#G254": { matches: ["#G254(红标)"], type: "number" },
            "#G255": { matches: ["#G255(黄标)"], type: "number" },
            "#G256": { matches: ["#G256(红标)"], type: "number" },
            "#G257": { matches: ["#G257(黄标)"], type: "number" },
            "#G258": { matches: ["#G258(红标)"], type: "number" },
            "#G259": { matches: ["#G259"], type: "number" },
            "#G260": { matches: ["#G260"], type: "number" },
            "#G261": { matches: ["#G261"], type: "number" },
            "#G262": { matches: ["#G262光板"], type: "number" },
            "#G263": { matches: ["#G263光板"], type: "number" },
            "#G264": { matches: ["#G264光板"], type: "number" },
            "C2441": { matches: ["C2441"], type: "number" },
            "C2440": { matches: ["C2440"], type: "number" },
            "C2444": { matches: ["C2444"], type: "number" },
            "A2437": { matches: ["A2437"], type: "number" },
            "C2439": { matches: ["C2439"], type: "number" },
            "C2443": { matches: ["C2443"], type: "number" },
            "C2446": { matches: ["C2446"], type: "number" },
            "C2450": { matches: ["C2450"], type: "number" },
            "A2438": { matches: ["A2438"], type: "number" },
            "A2439": { matches: ["A2439"], type: "number" },
            "A2441": { matches: ["A2441"], type: "number" },
            "A2401": { matches: ["A2401"], type: "number" },
            "A2421": { matches: ["A2421"], type: "number" },
            "A2433": { matches: ["A2433"], type: "number" },
            "A2436": { matches: ["A2436"], type: "number" },
            "A2435": { matches: ["A2435"], type: "number" },
            "A2434": { matches: ["A2434"], type: "number" },
            "D701": { matches: ["D701"], type: "number" },
            "D700": { matches: ["D700"], type: "number" },
            "Mamba": { matches: ['Mamba'], type: "number" },
            "SWISH": { matches: ['SWISH'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Supersonic": { matches: ['Supersonic'], type: "number" },
            "Rams": { matches: ['Rams'], type: "number" },
            "NFL": { matches: ['NFL'], type: "number" },
            "49ERS": { matches: ['49ERS'], type: "number" },
            "Heart": { matches: ['Heart'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
            "Justdon": { matches: ['Justdon'], type: "number" },
        },

        players: {
            "CHRISTIE": { matches: ['CHRISTIE'], type: "player" },
            "SABONIS": { matches: ['SABONIS'], type: "player" },
            "BUTLERIII": { matches: ['BUTLERIII'], type: "player" },
            "DONCIC": { matches: ['DONCIC'], type: "player" },
            "JR. JAQUEZ": { matches: ['JR. JAQUEZ'], type: "player" },
            "DAVIS": { matches: ['DAVIS'], type: "player" },
            "O.Dembélé": { matches: ['O.Dembélé 登贝莱'], type: "player" },
            "JAMES": { matches: ['JAMES'], type: "player" },
            "IRVING": { matches: ['IRVING'], type: "player" },
            "BROWN": { matches: ['BROWN'], type: "player" },
            "CURRY": { matches: ['CURRY'], type: "player" },
            "LILLARD": { matches: ['LILLARD'], type: "player" },
            "TATUM": { matches: ['TATUM'], type: "player" },
            "DURANT": { matches: ['DURANT'], type: "player" },
            "WEMBANYAMA": { matches: ['WEMBANYAMA'], type: "player" },
            "GILGEOUS": { matches: ['GILGEOUS'], type: "player" },
            "ALEXANDER": { matches: ['ALEXANDER'], type: "player" },
            "HERRO": { matches: ['HERRO'], type: "player" },
            "EDWARDS": { matches: ['EDWARDS'], type: "player" },
            "BRUNSON": { matches: ['BRUNSON'], type: "player" },
            "MARADONA": { matches: ['MARADONA'], type: "player" },
            "PORTERJR.": { matches: ['PORTERJR.'], type: "player" },
            "GORDON": { matches: ['GORDON'], type: "player" },
            "WESTBROOK": { matches: ['WESTBROOK'], type: "player" },
            "SENGUN": { matches: ['SENGUN'], type: "player" },
            "HARDEN": { matches: ['HARDEN'], type: "player" },
            "RANDLE": { matches: ['RANDLE'], type: "player" },
            "TOWNS": { matches: ['TOWNS'], type: "player" },
            "GEORGE": { matches: ['GEORGE'], type: "player" },
            "EMBIID": { matches: ['EMBIID'], type: "player" },
            "MAXEY": { matches: ['MAXEY'], type: "player" },
            "DEROZAN": { matches: ['DEROZAN'], type: "player" },
            "SOCHAN": { matches: ['SOCHAN'], type: "player" },
            "ADEBAYO": { matches: ['ADEBAYO'], type: "player" },
            "THOMPSON": { matches: ['THOMPSON'], type: "player" },
            "MORANT": { matches: ['MORANT'], type: "player" },
            "ROSE": { matches: ['ROSE'], type: "player" },
            "KAWAMURA": { matches: ['KAWAMURA'], type: "player" },
            "KNECHT": { matches: ['KNECHT'], type: "player" },
            "BOOKER": { matches: ['BOOKER'], type: "player" },
            "IVERSON": { matches: ['IVERSON'], type: "player" },
            "QUETA": { matches: ['QUETA'], type: "player" },
            "PORZINGIS": { matches: ['PORZINGIS'], type: "player" },
            "HOLIDAY": { matches: ['HOLIDAY'], type: "player" },
            "BRIDGES": { matches: ['BRIDGES'], type: "player" },
            "LEONARD": { matches: ['LEONARD'], type: "player" },
            "SIAKAM": { matches: ['SIAKAM'], type: "player" },
            "HALIBURTON": { matches: ['HALIBURTON'], type: "player" },
            "WIGGINS": { matches: ['WIGGINS'], type: "player" },
            "CARTER": { matches: ['CARTER'], type: "player" },
            "BARNES": { matches: ['BARNES'], type: "player" },
            "BARRETT": { matches: ['BARRETT'], type: "player" },
            "PAUL #3": { matches: ['PAUL#3'], type: "player" },
            "CASTELLON": { matches: ['CASTELLON'], type: "player" },
            "HACHIMURA": { matches: ['HACHIMURA'], type: "player" },
            "BRYANT": { matches: ['BRYANT'], type: "player" },
            "REAVES": { matches: ['REAVES'], type: "player" },
            "RUSSELL": { matches: ['RUSSELL'], type: "player" },
            "LANDO #4": { matches: ['LANDO#4'], type: "player" },
            "JOKIC": { matches: ['JOKIC'], type: "player" },
            "WADE": { matches: ['WADE'], type: "player" },
            "KUZMA": { matches: ['KUZMA'], type: "player" },
            "POOLE": { matches: ['POOLE'], type: "player" },
            "CUI": { matches: ['CUI'], type: "player" },
            "PAYTON": { matches: ['PAYTON'], type: "player" },
            // "Template": { matches: ['Template'], type: "player" },
        },

        marcas: {
            "Puma": {
                matches: ['*PM', '(女)*PM', '*PM(球员童装)', '(长袖球员)*PM', '*PM浅绿'],
                type: "marca"
            },
            "The North Face": {
                matches: ['TNF'],
                type: "marca"
            },
            "Adidas": {
                matches: ['AD09'],
                type: "marca"
            },
            "Nike": {
                matches: ['NK'],
                type: "marca"
            },
            "Joma": {
                matches: ['JOM'],
                type: "marca"
            },
            "Jordan": {
                matches: ['Jordan'],
                type: "marca"
            },
            "Descente": {
                matches: ['DST'],
                type: "marca"
            },
            "ARC-TERYX": {
                matches: ['ARC TERYX'],
                type: "marca"
            },
            "Camel": {
                matches: ['Camel'],
                type: "marca"
            },
            "Template": {
                matches: ['Template'],
                type: "marca"
            },
            "Template": {
                matches: ['Template'],
                type: "marca"
            },
            "Template": {
                matches: ['Template'],
                type: "marca"
            },
            
        },

        // Saltear, no add nada.
        nothings:{
            "": {
                matches: ['Champions', 'Yellowish', 'Stars', "(冲锋衣)", "#彩标", "*带二星", "*路飞", "*李洛克", "洪都拉奥林", "*日落", "*红雁塔", "*欧冠版", "*自来也", "*炭治郎", "#笑脸", "#爱心", "#C库里", "#飞人", "#字母", "#独角兽", "#蓝标", "#红标", "*金木研", "*卡卡西", "*九尾鸣人", "#小标", "#风景", "#大标", "#夏日风", "#汉堡", "#三角山", "#鼠标", "#苹果", "*日月星辰", "*独塔", "*Y3武士", "*红太阳", "*黑红龙珠", 'Hooded', 'Fabric', "大阪樱花", "*多彩", "布拉甘红牛", "(V领) ", "*全黑", "*七人制", "Jersey(V领) ", "#B600冲锋衣", 'UCL', 'Greem', 'SDD', "UTA", "PHX", "BOS", "GSW", "MLB", "WAS", "NOP", "*AGUILA", "Motorcycle", "Formula", 'NEO', 'warm', '(圆领）Edition)飞人版', '(Chinese Year)', '1:1', '#2311', 'HALO', '#812', '#715', 'Broyal', 'BFC', 'Vesion', '(黄边)', 'Hot', 'Pressing', '*带章', '*玫瑰蛇', '*火龙', '*Gear5', '神户胜利船', '*圣斗士金色', '广岛三箭', '*狐狸', '(童装)(半拉链)', '*蓝黑', '*新广告', '*有领', '*气功悟空', '浦和红钻', '*海贼鸣人眼神', '#绿标', '*红袖边', '*蓝龙', '*耶稣', '(童装)', '字母印', '*柯南D', '#刺绣', '*草帽', '*眼镜帽子', '*蓝袖边多图', '(加绒)', 'Jersey(V领)', 'Jersey(圆领)', '(Trapeze Edition)', '(V领)', '飞人版', '*贝吉塔红', '*贝吉塔蓝', '*咒术回战', '*龙珠黑悟空', '*橙白赛亚人', '*MonK', '(Print Sponsor)', '(球员童装)', '长袖球员', '横滨水手', '*金广告', '*紫色标', '*金双狮', '*赛亚人黑色', '*富士山与塔', '*浪客剑心', '*犬夜叉白色', '(女)', '(长袖球员)', 'Concept', '半拉链', '萨尔斯堡红牛', '*红星队', 'Milky', '(High Quality)', '*忍者系黑衣', '*忍者系绿', '*忍者系蓝', '*忍者系紫', "*云腾", "*金边赛亚", "*火拳路飞", "*Y3黑刀客", "*黄袖", "*数字", "*红标翻领", "灰色(哆啦A梦)", "鸟栖砂岩", "*背心套装", "*悟空黄", "*双面长袖", "*双面", "*黑色", "(童装长袖)", "*Midea广告", "*长刀武士", "(双面刺绣)(双面风衣)", "*背后没图案", "*七彩赛亚人", "*黄金圣斗士", "(半拉链)(匹印)", "*网格", "*酷玩", "*翻领", "(长袖)欧冠决赛版", "*全广告", "(女)黑色", "*鬼武者", "*彩虹神奇宝贝", "*猫头鹰", "万圣节版", "(背后WALES)", "(背后ARGENTINA)", "#2492(半拉链)", "#三星", "#AJ20(童装)", "*周年1889", "*龙珠赛亚", "*忍者波风", "*刀流索隆", "*右袖广告", "*剑士", "*红发香克斯", "*龙樱花", "*黄袖边", "*虎头", "*前带广告", "(双面风衣)(刺绣)", "*布加勒斯特星", "蔚山现代", "*三叶草", "*绿龙", "*彩带", "*红Y3", "*武士刀", "*樱花龙", "*水墨塔", "*太阳武士", "*金标", "#102冲锋衣", "#103加绒冲锋衣", "*三叶草翻领", "*海贼王布鲁克", "*火焰悟空", "*数码宝贝", "*草帽路飞", "*蓝武士", "*三叶草红黑", "*梅花与桥", "*赛亚贝吉塔", "*三叶草粉黑", "*三叶草蓝红", "*三叶草蓝", "*梅花武士", "*枫叶刀客", "*三叶草金标", "*三叶草黑标", "*三叶草白标", "*千变超人", "#花蛇", "*花蛇", "(欧冠版)", "*前横条", "*粉色", "*鬼脸", "(女)圆领", "(有领)", "(Pants Have Pocket)",
                "(Pants Have Pocket)(半拉链)", "#洛杉矶道奇队", "#快船队", "#洋基队", "#篮网队", "*爵士雪山", "#绝杀", "#起飞", "*詹姆斯高中", "*湖人曼巴", "*湖人队", "*科比", "*热火彩虹版", "*雄鹿队", "*北卡", "太阳队", "火箭队中文版", "#森林狼", "#76人队", "#国王队", "#灰熊队", "#尼克斯队", "#全明星", "密歇根", "湖人拼凯尔特人", "#公牛拼爵士", "奇才队", "#海绵宝宝", "#篮球男孩", "*火箭拼尼克斯", "#凯尔特人", "#步行者队", "#活塞队", "#黄蜂队", "#公牛", "#公牛条纹", "*爵士队", "*勇士队", "76人队", "#公牛C连体", "*派大星", "杜兰特", "75th", "火箭队", "*猛龙", "#魔术队", "*超音速", "*湖人", "*公羊", "*49人队", "*猛龙涂鸦", "*湖人涂鸦", "#灰熊涂鸦", "#公牛涂鸦"],
                type: "nothing"
            },
        }
    },

    // Detector de temporadas
    seasonDetector: {
        regex: /(\d{4})(?:-(\d{2,4})|\/(\d{2,4})|\s+(\d{2,4}))|(\d{4})/g,
        type: "temporada",
        categoryPath: ["Deportes"]
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
            "Sin parches": {
                matches: ['ld..en (左袖广告)', 'We..ds (左袖广告)', 'GC.S (左袖广告)', 'ca..va (左袖广告)', 'SA..ON(左袖广告)', 'JD (左袖广告)', "Sonepar (左袖广告)", 'IN.gia (左袖广告)', 'AMB..tv (左袖广告)', 'Expedia (左袖广告)', 'De..LT (左袖广告)', 'TR..ON (左袖广告)', 'MGS.os (左袖广告)', "No Badge", "MSC (左袖广告)", 'NO Badge', 'noon (左袖广告)'],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/e/8/e80a811156ddf959.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // Campions League
            "UCL": {
                matches: ['UCL (欧冠球)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/9/9/9960506e14391237.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect": {
                matches: ["UCL (欧冠)", 'CUL(欧冠)', 'UCL(欧冠)', '2010/11UCL(欧冠10/11章)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/d/8/d8ad2fa9b08e3118.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/FIFA11": {
                matches: ["UCL+FFWC2011(欧冠+世俱盾2011)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/6/a/6ab7230560d95e37.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/WIN13": {
                matches: ["UCL(欧冠+13杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/11/9/e/9e6646b1c0f46b56.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/WIN13/FIFA18": {
                matches: ["UCL(欧冠/13杯/世俱2018ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/15/2/c/2c3c0abc8226976c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation": {
                matches: ['UCL +ih..ar (欧冠新章+左袖广告)', 'UCL + TR..ON(欧冠新章+左袖广告)', 'UCL(欧冠新章)右袖', 'UCL (欧冠新章) 右袖', 'UCL +OKX (欧冠新章+左袖广告)', "UCL (欧冠新章)右袖", 'UCL/TR..ON(欧冠新章+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/a/0/a0acf265b53042a0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/FIFA23 ": {
                matches: ["UCL +FCWC 2023 (欧冠新章+胸前世俱盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/c/6/c6b36816a394dcb9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL5/Foundation": {
                matches: ["UCL (新平条 5)右袖", 'UCL +AMB..tv (新平条 5+左袖广告)', 'UCL (新平条 5)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/0/0/006f62eb3aa1909c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL6/Foundation": {
                matches: ["UCL(新平条 6)右袖", "UCL(新平条 6)右袖", 'UCL (新平条 6)右袖', 'UCL +Expedia (新平条 6+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/b/a/ba8fd6939ccc0bf8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation": {
                matches: ["UCL (新平条 7)右袖", "UCL +MSC (新平条 7+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/09/1/d/1d787a4c6498230d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/WIN9": {
                matches: ["UCL(欧冠球+小9杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/5/6/5637203255247a52.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN13/FIFA17/CAMP18/Respect": {
                matches: ["UCL(2018大耳杯/13杯/世俱2017ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/e/4/e44773915c2ccea3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN11/FIFA16/CAMP16/Respect": {
                matches: ["UCL(平条/11杯/16大耳杯/世俱2016ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/27/a/6/a65375b4a443ea6d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN10/FIFA14/CAMP14/Respect": {
                matches: ["UCL(平条/10杯/14大耳杯/世俱2014ad下)", "UCL(平条/10杯/14大耳杯/世俱2014ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/01/05/6/2/62fdce3c7521e70b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FIFA16/WIN12/WIN17/Respect": {
                matches: ["CUL(平条/12杯/17大耳杯/世俱2016ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/02/3/2/3253dfdcb97870ea.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FIFA17/WIN12/WIN2017/Respect": {
                matches: ["CUL(平条/12杯/17大耳杯/世俱2017ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/02/b/4/b4d7face98e9f357.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN13/FIFA18/CAMP18/Respect": {
                matches: ["UCL(2018大耳杯/13杯/世俱2018ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/7/d/7dff0f4f519b3f7f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN15/Foundation": {
                matches: ["UCL (新平条/大耳杯15) 右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/3/8371526d80c58eaf.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/ITA20": {
                matches: ["UCL +Shield (欧冠+冠军盾20)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/f/1/f13917a931afeee8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/ITA20/U-Power": {
                matches: ["UCL +Shield +U-Power (欧冠+冠军盾20+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/5/1/51b680b2baff6df2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/ITA/Gate.io/U-Power": {
                matches: ["UCL +Shield +Gate.io +U-Power (欧冠+冠军盾20+左袖/背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/6/66ff7726150b1ce5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation/Milan": {
                matches: ["UCL +MSC+ MILAN(新平条 7+左袖广告+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/b/e/be0acd6c9997be72.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Kohler": {
                matches: ["UCL+KOHLER (欧冠新章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/9/f/9ff4a001915910fc.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL06-07/WIN7": {
                matches: ["UCL(06/07卫冕章+7杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/30/b/2/b292e85f960db126.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/COPAITA/ITA/Respect": {
                matches: ["UCL +co.pa italia +Shield(欧冠+圆圈ad上+三色盾)", 'UCL+Shield+co.pa italia(欧冠+三色圈+三色盾)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/9/9/9926f6b658a2e980.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 2011/FIFA11/Respect": {
                matches: ["UCL Champion2011(平条+卫冕2011+世俱2011)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/b/2/b2d4f49a8bedebc0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Champs 5": {
                matches: ["UCL(欧冠球+5杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/d/f/df203a85b36b4e76.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ 10": {
                matches: ["2015/16 UCL(欧冠/大耳杯10)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/11/c/e/ce762892ce4cd430.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ 10/FIFA14": {
                matches: ["2015/16 UCL(欧冠/大耳杯10)", '2015/16 UCL(欧冠/大耳杯10/世俱2014中间)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/11/2/7/2721c192e33ede32.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL 2010/11/Respect/WIN9": {
                matches: ["2010/11 UCL(欧冠/小9杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/25/0/6/06e0d7351fecd92f.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/WIN9": {
                matches: ["2012/13 UCL(欧冠/大耳9杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/15/f/0/f0182e0f46da147c.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/FIFA23": {
                matches: ["UCL +OKX+ FCWC 2023 (欧冠+左袖广告+胸前世俱盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/4/8/481145696b74e40a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            // UECL
            "UECL/Foundation": {
                matches: ["UECL(欧会杯45)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/3/1/3140ee6e9762ab4e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UECL/Foundation/Fever": {
                matches: ["UECL +fever(欧会杯+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/f/8/f8f11ec5a0892ae3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            // COPAS
            "CA24/Vibra": {
                matches: ["Copa America 2024(美洲杯o)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/17/2/4/249ceb188fa977c5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "CA24/Rocking": {
                matches: ["Copa America 2024(美洲杯THE)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/05/6/8/68ae920f5e3ee341.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FIFA11": {
                matches: ["FF World Champions2011(胸前世俱盾)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/2/7/27253eff1d02a719.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FIFA12": {
                matches: ["FF World Champions2012(胸前世俱盾)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/04/8/1/81ee2f4cd4f552b3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            "FWC2014 WIN": {
                matches: ["FFWCC2014 (世界杯胸前冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/4/4/44a05dc58450616b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2014/FHope": {
                matches: ["BRASI FFWC2014 (世界杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/8/c/8c86be0078b1b73a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2014/FHope/FWC2014 WIN": {
                matches: ["BRASI FFWC+FFWC2014 (胸前冠+2014世界杯)1"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/0/5/05cda534c1f2a420.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022 WIN": {
                matches: ["World WIN2022世界杯胸前金盾", 'World WIN2022世界杯胸前盾', 'World Champions 2022世界杯胸前金盾', 'World Champions 2022世界杯胸前盾'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/a/9/a9c3924ea3344430.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "2022FWC WIN/2026FWCQ/FUnited": {
                matches: ["FWCC2022 +2026FWC Qualifying (世预赛+胸前冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/9/7/970597847c7c97e9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "2026FWCQ/FUnited": {
                matches: ['2026 World Cup Qualifying (世预选', "2026 World Cup Qualifying (世预选)", "2026 World Cup Qualifying (世预选)", "2026FWC Qualifying (世预赛)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/9/8/982c73c16f531bb7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            "UENL/Foundation": {
                matches: ["UEFA NATIONS LEAGUE(欧国联章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/d/0/d0ea0f5dbb710229.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation": {
                matches: ["UEFA E L (欧联45)", 'UEFA E L(欧联45)右袖', 'UEFA E L (欧联45)右袖', 'UEFA E L+JD(欧联+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/1/f/1fd6025fc863d5c9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UELW24/Foundation": {
                matches: ["UEL 2024 Winners (欧冠-亚特兰大)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/d/8d4a09dbabbd4f43.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EURO24/Foundation": {
                matches: ["Euro 2024(欧洲杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/c/2/c2691dd7c0551a82.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW24 ": {
                matches: ["Euro Champions2024(欧洲杯胸前冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/04/d/1/d1802a431d5ef363.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW24/UENL23/Foundation": {
                matches: ["UEFA NL Winner2023+Euro Champions2024(欧国联班牙组合)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/04/7/8/788aa785f9d8da15.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // COPAS EQUIPOS
            "Carabao Cup": {
                matches: ['Carabao Cup +ld..en (英联赛杯+左袖广告)', 'Carabao Cup +We..ds (英联赛杯+左袖广告)', 'Carabao Cup +SA..ON (英联赛杯+左袖广告)', 'Carabao Cup +Expedia (英联赛杯+左袖广告)', 'Carabao Cup +OKX (英联赛杯+左袖广告)', "Carabao Cup (英联赛杯)右袖", 'Carabao Cup +noon (英联赛杯+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/8/0/802bde86a7dfd67c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // Europa Leagues
            // > LaLiga
            "LALIGA": {
                matches: ["La Liga (西甲章)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/8/a/8ad19d0b18bace89.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA 45": {
                matches: ['La Liga +GC.S(45西甲章+左袖广告)', 'La Liga +ca..va (45西甲章+左袖广告)', 'La Liga +IN.gia(45西甲章+左袖广告)', 'La Liga +OK.ty (45西甲章+左袖广告)', 'La Liga +B2.NPA (45西甲章+左袖广告)', 'La Liga +AMB..tv (45西甲章+左袖广告)', 'La Liga +MGS.. (45西甲章+左袖广告)', 'La Liga +CA..DA (45西甲章+左袖广告)', "La Liga (45西甲章)", 'La Liga +MGS.os(45西甲章+左袖广告)','La Liga +JD (45西甲章+左袖广告)',  'La Liga +Kalise (45西甲章+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/f/6fcf280ecb88c188.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "La liga/3": {
                matches: ["LFP+3(西甲+左袖3)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/7/5/75cc3bec73642a1e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA 23/24": {
                matches: ["La Liga +23/24C (红冠军+45西甲)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/8/686e84c18c0004f3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "La liga/3/FIFA11": {
                matches: ["LFP+3+FFWC2011 (西甲+左袖3+世俱盾2011)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/2/2/224e9e3fb5cb2a33.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // > Bundersliga
            "BUN": {
                matches: ['Bundesliga +ih..ar (德普章+左袖广告)', "Bundesliga (德普章)", 'Bundesliga (德甲普章)', 'Bundesliga(普章)', 'Bundesliga +Sonepar (德普章+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/31/8/b/8bdf7dd2865f6383.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN WIN23/24 ": {
                matches: ['Bundesliga Champ23/24 (德金章)', 'Bundesliga Champions 23/24(德甲金章)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/15/b/c/bcf2185dc3e1e4e1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN 2": {
                matches: ["Bundesliga2(德乙)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/f/1/f177882237d3e2a6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // > Premier
            "Premier": {
                matches: ['Pre L +ld..en (34英超+左袖广告)', 'Pre L + We..ds (34英超+左袖广告)', 'Pre L +SA..ON (34英超+左袖广告)', 'Pre L + Expedia (34英超+左袖广告)', 'Pre L/Expedia (34英超+左袖广告)', 'Pre L +De..LT (34英超+左袖广告)', 'Pre L +TR..ON (34英超+左袖广告)', 'Pre L +noon (34英超+左袖广告)', "Premier League (34英超普)", "Pre L +NO.or (34英超/章下字)", "Premier league (34英超普)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/b/6b8aa0557f64e822.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/Kohler": {
                matches: ["Premier league+ KOHLER(普章+左袖子广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/5/5/5569bf90f755f025.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac": {
                matches: ['Pre L +NO.or+ ld..en (34英超/章下字+左袖广告)', 'Pre L +NO.or+ We..ds (34英超/章下字+左袖广告)', 'Pre L +NO.or+ SA..ON ( 34英超/章下字+左袖广告)', 'Pre L + NO..for (34英超普+章下字)', 'Pre L +NO.or+ Expedia (34英超/章下字+左袖广告)', 'Pre L +NO.or+ De..LT (34英超/章下字+左袖广告)', 'Pre L +NO.or+ TR..ON (34英超/章下字+左袖广告)', "Pre L/NO..for (34英超普+章下字)", 'Pre L +NO.or+ noon ( 34英超/章下字+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/8/2849daa0df6783ca.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Fever": {
                matches: ["Pre L +NO..for +fever (英超普/章下字+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/1/21432e05db504c25.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Fever/Flor": {
                matches: ["Pre L +NO.or+ fever +Flower (英超/章下字+左袖广告+红花)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/0/7/0723db2ac74426ed.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Flor": {
                matches: ['Pre L +NO.or+ ld..en+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ We..ds+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ SA..ON+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ De..LT + Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ Expedia+ Flower (34英超/章下字+左袖广告)+红花', 'Pre L +NO.or+ De..LT/Flower (英超/章下字+左袖广告+红花)', "Pre L +NO.or+ Flower (英超/章下字+红花)", 'Pre L +NO.or+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ noon+ Flower (英超/章下字+左袖广告+红花)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/f/2f8a92a783fee35e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/Flor": {
                matches: ["Pre L +NO.or+ Flower( 英超/章下字+红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/f/b/fbfb66b45a8eb819.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold": {
                matches: ["Pre L Champion (34英金章)", 'Pre L Champion +OKX (34英金章+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/3/c/3c42f76541205c01.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/NoRac": {
                matches: ['Pre L C +NO.or. +OKX (英金章/章下字+左袖广告)', "Pre L C +NO.or. (英金章/章下字)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/3/4/34df7ab224c753df.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/FIFA23 WIN": {
                matches: ["Pre L C +NO.or. (英金章/章下字)", 'Pre L C+OKX+ FCWC 2023(胸前世俱盾+34英金章+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/a/2ac6481315eaaec0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/NoRac/FIFA23 WIN": {
                matches: ["Pre L C +NO.or. +FCWC 2023 (英金章/章下字+胸前世俱盾 )", 'Pre L C +NO.or. +OKX+ FCWC 2023 (英金章/章下字+左袖广告+胸前世俱盾 )'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/f/1/f18cc9bfa54f604c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Doble": {
                matches: ["Premier league (Double双普章)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/0/8/083b0795a0b2323a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier 2": {
                matches: ["Premier league (Double)(英超)左右印"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/19/d/f/dff13bc9845a4518.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac 2": {
                matches: ["Pre L + NO..for(Double)(英超+章下字)左右印"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/19/2/e/2e6d76ee7c50fe9a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Flor Gold": {
                matches: ["Pre L C +NO.or. +OKX (英金章/章下字+左袖广告+胸前红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/3/9/3968a0e6aea6269b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier 12/13": {
                matches: ["CHAMPIONS 12/13(双袖联赛金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/28/0/e/0e9f366d1d159d1d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            


            // > SerieA
            "SerieA": {
                matches: ["Serie A (意甲45)", "Serie A(意甲45)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/4/6/462e2dd4ce4860bd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITA20": {
                matches: ["Shield (冠军盾20)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/5/65db16ccbf52eaba.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/ITA20": {
                matches: ["Serie A +Shield (意甲45+冠军盾20)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/2/9/29276c6c26b0554b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITA20/U-Power": {
                matches: ["Shield +U-Power (冠军盾20+背下广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/9/0/902088b48030de6b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/ITA20/U-Power": {
                matches: ["Serie A +Shield +U-Power (意甲45+冠军盾20+背下广告)"],
                type: "badge",
                price: 2,
                "images": "https://us03-imgcdn.ymcart.com/97006/2024/12/20/7/1/71d09e0910805b3e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/ITA20/Gate.io/U-Power": {
                matches: ["Serie A +Shield +Gate.io +U-Power (意甲+冠军盾20+左袖/背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/e/6/e6d5c7f35d86233d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/MSC": {
                matches: ["Serie A +MSC (意甲45+左袖广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/9/e/9e16d1aec42615d8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/MSC/MILAN": {
                matches: ["Serie A +MSC+ MILAN(意甲45+左袖广告+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/b/a/baa55b61af4ca93c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "COPAITA/ITA": {
                matches: ["co.pa italia+Shield (圆圈ad上+三色盾)", 'Shield+co.pa italia(三色圈+三色盾)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/d/6/d6c282da513bf5fb.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // > Ligue1
            "Ligue1": {
                matches: ["Ligue1 (45法甲黑)", 'Ligue1+JD(45法甲黑+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/29/9/5/953477b403a87710.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1 WIN24": {
                matches: ["L1 CHAMPION 2024(法甲冠)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/d/6/d6c1bf9be9eca317.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1 WIN24/Snipes": {
                matches: ["L1 CHAMPION 2024 +Snipes' (法甲冠+背下广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/d/d/dd1304d9890c7177.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // Sudamerica
            "BRA24": {
                matches: ["Brasileirao A2024(巴甲)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/18/f/9/f91c3d62453bfd01.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Brasileirao": {
                matches: ["Brasileirao A2025(巴甲)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/d/c/dc756284effb6b9e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BRA25": {
                matches: ["CAMPEAO2025 (巴西杯冠)胸前"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/9/d/9d05c468ddd25283.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BRA25/Brasileirao": {
                matches: ["Brasileirao A2025 +CAMPEAO2025 (巴甲+巴西杯冠)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/e/b/eb7e84186e180567.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB": {
                matches: ["LIBERTADORES (解放者)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/20/b/1/b142f6193b2c79e1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW1": {
                matches: ["libertadores 1(解放者/新1次)", 'libertadores 1 (解放者/新1次)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/17/e/f/ef98a46bd6909c49.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW2": {
                matches: ["libertadores 2 (解放者/新2次)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/2/9/29155d2ee7683eca.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW3": {
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
            "ITAU": {
                matches: ["itau.No.pel(25智联)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/8/8/88a5cd45fcad50ff.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAU C": {
                matches: ['Campeonato itau (24智联赛右章)', 'Campeonato itau (24智联赛)', "WINato itau (24智联赛)", 'WINato itau (24智联赛右章)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/03/5/b/5bea83efb8193caf.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ChilePD FIFA24": {
                matches: ["2024WIN (冠军ad上)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/e/8/e8ce1ddff407555d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ChilePD FIFA24/Liga/NSP": {
                matches: ["itau.No.pel+2024WIN(25智联+冠军ad上)", 'itau.No.pel+2024CAMPEON(25智联+冠军ad上)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/f/c/fc4ee08b7bc907e6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            

            // Otros
            "Liga BBVA MX": {
                matches: ["LIGA MX(墨西超)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/10/e/6/e6999f9820771981.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "RSL45 Gold": {
                matches: ["RSL(45沙特金新月)左袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/23/6/b/6b9a830df95230ae.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "RSL45": {
                matches: ["RSL(45沙特联)左袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/07/2/4/24dfbe74f6e5ff61.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EFL": {
                matches: ["EFL Championship (英冠章)右"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/17/b/e/be98e294be07cf85.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BetPlay/Dimayor": {
                matches: ["Bet play+Prod..CIAL(哥伦甲联赛)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/3/d/3de2eb837daed8da.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Aniversario 125": {
                matches: ["125th (周年纪念章)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/23/b/4/b4fa6ce58728ae01.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV": {
                matches: ["MLS /TV (25专用色/黑TV)印左袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/21/1/2/12df41cd2acc0cbd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV/Fracht": {
                matches: ["MLS /TV +Fra. GR. (25专用色/黑TV+右袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/21/9/8/9813d47da9abdd86.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV Rosa": {
                matches: ["MLS /TV (25专用色/粉TV)印左袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/01/11/a/f/afb1af7c83ce00bd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV/Fracht Rosa": {
                matches: ["MLS /TV +Fra. GR. (25专用色/粉TV+右袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/01/11/6/6/6651eeb05fd2e963.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Con Sponsor": {
                matches: ["Print Sponsor (印9处广告)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/20/8/f/8fadf639b19709a5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Sponsor Direct TV": {
                matches: ["Sponsor (双袖/背后广告)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/20/d/f/dfe0e1402f4419b5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "2024 Campeon": {
                matches: ["2024CAMPEON (冠军ad上)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/e/8/e8ce1ddff407555d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Emirates Fa Cup": {
                matches: ["FA CUP (英足总杯7次)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/01/20/0/d/0dace85815f57c22.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Eredivisie": {
                matches: ["Eredivisie (荷甲普章)", 'Eredivisie(荷甲普章)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/0/2/02d9847da5883f81.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Liga Portugal": {
                matches: ["Lg Portugal (34葡超)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/11/1/4/142e19810e013ddd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Vega Fibra": {
                matches: ["VeGa FIBRa (胸前广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/d/5/d52bfc966c56a814.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BIWINES/C24": {
                matches: ["BIWINES +C24(右联赛冠+左连冠纪念)", 'BICAMPEONES +C24(右联赛冠+左连冠纪念)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/29/7/a/7a24aa7a2a4f1942.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "La Liga/Vega Fibra": {
                matches: ["La Liga+VeGa FIBRa (45西甲章+胸前广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/b/6/b6a48ebedb9f8cab.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Campeao": {
                matches: ["Lg Portugal +CAMPEAO (34葡超+胸前冠)", 'CAMPEAO(葡超胸前冠军)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/12/4/4/4453dc67998a1626.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Liga Portugal/Campeao": {
                matches: ["Lg Portugal +CAMPEAO (34葡超+胸前冠)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/12/a/2/a2a9ec89318361b6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN2012/13": {
                matches: ["WIN12/13(双袖联赛金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/28/0/e/0e9f366d1d159d1d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            

            // NEWS FALTA ACOMODAR
            "Template 1": {
                matches: ["UEL 2024 Winners +Zondacrypto(欧冠-亚特兰大+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/16/4/0/40ce6bfaade85e08.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Template": {
                matches: ["Template"],
                type: "badge",
                price: 1,
                images: "Template"
            },
            "Template": {
                matches: ["Template"],
                type: "badge",
                price: 1,
                images: "Template"
            },
            "Template": {
                matches: ["Template"],
                type: "badge",
                price: 1,
                images: "Template"
            },
            "Template": {
                matches: ["Template"],
                type: "badge",
                price: 1,
                images: "Template"
            },
        },
        customize: {
            "Sin dorsal": {
                matches: ['No Nam No Number', "No Name No Number", "No Name Number", "No Name No Nubmer"],
                type: "customize",
                price: 0
            },
            "Con dorsal": {
                matches: ['Name / Number (24/25绿ad)', 'Name / Number (周年蓝色字)', 'Name / Number (ad白字)', 'Name / Number (Holstein Kiel) (上带广告-名在号下)', 'Name / Number (只印后面ad红)', "Name / Number (24/25白ad)只印后面", "Name / Number (名与号在框内)", "Name / Number (24/25黑ad)只印后面", "Name / Number (名在号上-没广告)", "Name / Number (周年蓝色字)", 'Name /Number', "Name / Number (24/25ad白)只印后面", "Name / Number (24/25ad粉)", "Name / Number (24/25ad黑字)只印后面", "Name / Number (24/25ad)", 'Name / Number (24/25ad金)', 'Name / Number (名在a广告底下)', 'Name / Number (1.FC Magdeburg)(上带广告-名在号下)', 'Name / Number (24/25ad黑)', 'Name / Number (周年字体)', 'Name / Number (Frankfurt) (上带广告-名在号下)', 'Name / Number (24/25白色ad)', 'Name / Number (前小号NK下)', "Name / Number", "Name/ Number", "Name / Numbe", "Name/ Number (名在号下)", "Name / Number (24/25ad黑)只印后面", "Name / Number (专用周年标)", "Name / Number (只印后面)", "Name / Number (24/25ad红)", "Name / Number (名在号下)", "Name / Number (名在号上)", "Name / Number (FC Augsburg) (上带广告-名在号下)", "Name / Number (Mainz 05) (上带广告-名在号下)", "Name / Number (专用字体)", "Name / Number (只印后台)", "Name / Number (24/25黑ad)", "Name / Number (没广告-名在号上)", "Name / Number (24/25蓝ad)", "Name / Number (24/25白ad)", "Name / Number (没广告-名在号下)", "Name / Number (FC BAY.. MUN..)(带广告-名在号下)", "Name / Number (WERDER) (上带广告-名在号下)", "Name / Number (24/25ad蓝) 只印后面", "Name / Number (专用字体)前小号在PM下", "Name/ Number (RB Leipzig)(上带广告-名在号下)", "Name / Number (24/25ad白)", 'Name/Number'],
                type: "customize",
                price: 3
            },
            "Con dorsal (solo numero)": {
                matches: ['Number', "Number (No Name)"],
                type: "customize",
                price: 3
            },
            "Con dorsal 2": {
                matches: ['Name / Number (Schalke04)(上带广告-名在号下)', 'Name / Number (SC Freiburg) (上带广告-名在号下)', 'Name / Number (Schalke04)(联赛号-名在号下)', 'Name / Number (1.FC Köln)(名在号上-广告在下)专用字体', 'Name / Number (Kaiserslautern) (名在号上-下带广告)', 'Name / Number (BAYER 04)(上带广告-名在号下)', "Name / Number (Bochum)(上带广告-名在号下)", "Name / Number (1.FC Köln)(名在号上-广告在下)", "Name/ Number (Stuttgart) (上带广告-名在号下)", "Name / Number (SAFI CiMENTO) (上带广告-名在号下)", "Name/ Number (Hamburger SV)(上带广告-名在号下)", "Name / Number (Hertha BSC)(上带广告-名在号下)"],
                type: "customize",
                price: 4
            },
            

            // Fonts primarios
            "Con dorsal UCL fonts": {
                matches: ["Name / Number (UCL Fonts) 欧冠主场", "Name / Number (UCL Fonts) 欧冠白字体", 'Name / Number (UCL Fonts) 欧冠三客字', 'Name / Number (UCL Fonts) 欧冠', 'Name / Number (UCL Fonts) 欧冠客场字', "Name / Number (UCL Fonts) 欧冠字体", "Name / Number (UCL Fonts)欧冠字体", "Name / Number (UCL Fonts)(名在号上)杯赛字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal PremierLeague fonts": {
                matches: ["Name / Number (Premier League Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
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
                matches: ['Name / Number ( Ligue1 Fonts ) 联赛主场', 'Name / Number ( Ligue1 Fonts ) 联赛三客字', 'Name / Number ( Ligue1 Fonts ) 联赛客场字', "Name / Number ( Ligue1 Fonts )联赛字体", "Name / Number ( Ligue1 Fonts ) 联赛字体"],
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
                matches: ['Name / Number (League Fonts)联赛字体', "Name / Number (League Fonts )联赛字体"],
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
                matches: ["Name / Number (Pre League Fonts)联赛白字", "Name / Number (Pre League Fonts)联赛白字体", 'Name / Number (Pre League Fonts)联赛黑字', "Name / Number (Pre League Fonts)联赛字体"],
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
            "Con dorsal Anime": {
                matches: ["Name / Anime Number (24/25ad红色名-动漫号)"],
                type: "customize",
                price: 4
            },
            "Con dorsal Aniversario": {
                matches: ["Name / Number (周年字体)(没广告-名在号上)"],
                type: "customize",
                price: 3
            },
            "Con dorsal Aniversario 2": {
                matches: ["Name / Number (Anniversary Fonts) 专用字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial": {
                matches: ["登贝莱 #10 (印球星号-蛇年字体)"],
                type: "customize",
                price: 0
            },
            // "XXXXXXXX": {
            //     matches: ["XXXXXXXXXXX"],
            //     type: "customize",
            //     price: 3
            // }
        }
    }
};