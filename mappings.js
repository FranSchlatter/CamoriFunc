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
            "Almeria": {
                matches: ['Almeria'],
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
            "Strasbourg": {
                matches: ['Strasbourg'],
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
            "Hoffenheim": {
                matches: ['Hoffenheim'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Bundesliga"]
            },
            "Heidenheim": {
                matches: ['Heidenheim'],
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
            "Gremio": {
                matches: ['Grêmio', 'Gremio'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Vasco da": {
                matches: ['Vasco da'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Brasileiro Série A"]
            },
            "Esporte Clube Vitoria": {
                matches: ['Vitoria'],
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
            "D.C.United": {
                matches: ["D.C.United"],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Austin FC": {
                matches: ["Austin"],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Seattle Sounders FC": {
                matches: ["Seattle Sounders"],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "MLS"]
            },
            "Sporting Kansas": {
                matches: ['Kansas'],
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
            "West Bromwich Albion": {
                matches: ['Bromwich'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Sheffield Wednesday": {
                matches: ['Wednesday'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "FC Girondins de Burdeos": {
                matches: ['Bordeaux'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Palermo": {
                matches: ['Palermo'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Zenit": {
                matches: ['Zenit'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Hajduk Split": {
                matches: ['Hajduk Split'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Pirates": {
                matches: ['Pirates'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Recreativo de Huelva": {
                matches: ['Recreativo de Huelva'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Standard Liege": {
                matches: ['Standard Liege'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Middlesbrough": {
                matches: ['Middlesbrough'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Dinamo Zagreb": {
                matches: ['Dinamo Zagreb'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Reading": {
                matches: ['Reading'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },

            // NEWS FALTA CLASIFICAR
            "Paysandu": {
                matches: ['Paysandu'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Kashima Antlers": {
                matches: ['Kashima Antlers'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Kawasaki Frontale": {
                matches: ['Kawasaki Frontale'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Lincoln City": {
                matches: ['Lincoln'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Palestinian": {
                matches: ['Palestinian'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Albacete Balompié": {
                matches: ['Albacete Balompie'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Motagua": {
                matches: ['Motagua'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Clubes", "Otros"]
            },
            "Template": {
                matches: ['Template'],
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
                matches: ['Mexico', "'Mexico'"],
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
            "Peru": {
                matches: ['Peru'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Paraguay": {
                matches: ['Paraguay'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Ecuador": {
                matches: ['Ecuador'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Copa America"]
            },
            "Bolivia": {
                matches: ['Bolivia'],
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
            "Grecia": {
                matches: ['Greece'],
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
            "Panama": {
                matches: ['Panama'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Honduras": {
                matches: ['Honduras'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "China": {
                matches: ['China'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Islandia": {
                matches: ['Iceland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Polonia": {
                matches: ['Poland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Eslovenia": {
                matches: ['Slovenia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Suiza": {
                matches: ['Switzerland'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "República Checa": {
                matches: ['Czech'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Noruega": {
                matches: ['Norway'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Serbia": {
                matches: ['Serbia'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Turquia": {
                matches: ['Turkey'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Hungria": {
                matches: ['Hungary'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Albania": {
                matches: ['Albania'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Bulgaria": {
                matches: ['Bulgaria'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Irak": {
                matches: ['Iraque'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Suecia": {
                matches: ['Sweden'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Unión Soviética": {
                matches: ['Soviet union'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otras"]
            },
            "Finlandia": {
                matches: ['Finland'],
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
            "Los Pumas": {
                matches: ['Pumas'],
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
                type: "feature",
                categoryPath: ["Deportes"]
            },
            "Manga Larga": {
                matches: ['Long Sleeve', '长袖', '(长袖)'],
                type: "feature",
                categoryPath: ["Deportes"]
            },
        },

        caracteristicas: {
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
            "10th": { matches: ['10th'], type: "number" },
            "25th": { matches: ['25th'], type: "number" },
            "30th": { matches: ['30th'], type: "number" },
            "50th": { matches: ['50th'], type: "number" },
            "70th": { matches: ['70th'], type: "number" },
            "100th": { matches: ['100th'], type: "number" },
            "110th": { matches: ['110th'], type: "number" },
            "112th": { matches: ['112th'], type: "number" },
            "125th": { matches: ['125th'], type: "number" },
            "133th": { matches: ['133th'], type: "number" },
            "145th": { matches: ['145th'], type: "number" },
            "150th": { matches: ['150th'], type: "number" },
            "90th": { matches: ["90th"], type: "number" },
            "99th": { matches: ["99th"], type: "number" },
            "131th": { matches: ["131th"], type: "number" },
            "132th": { matches: ["132th"], type: "number" },
            "#PJ07": { matches: ["#PJ07"], type: "number" },
            "1993": { matches: ["1993主"], type: "number" },
            "1994": { matches: ["1994主", "1994客"], type: "number" },
            "1995": { matches: ["1995主", "1995会杯客", "1995会杯主", "1995客"], type: "number" },
            "#00": { matches: ["#00"], type: "number" },
            "#01": { matches: ["#01", "#01(半拉链)", "#01(四星)", "三星#01",], type: "number" }, 
            "#02": { matches: ["#02", "#02(蓝领)"], type: "number" },
            "#03": { matches: ["#03"], type: "number" },
            "#04": { matches: ["#04"], type: "number" },
            "#05": { matches: ["#05", "三星#05",], type: "number" },
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
        },

        players: {
            "CHRISTIE": { matches: ['CHRISTIE'], type: "player" },
            "TOSCANO": { matches: ['TOSCANO'], type: "player" },
            "ANDERSON": { matches: ['ANDERSON'], type: "player" },
            "HOLMGREN": { matches: ['HOLMGREN'], type: "player" },
            "ANTETOKOUNMPO": { matches: ['ANTETOKOUNMPO'], type: "player" },
            "ONEPECE": { matches: ['ONEPECE'], type: "player" },
            "NOWITZKI": { matches: ['NOWITZKI'], type: "player" },
            "GARNETT": { matches: ['GARNETT'], type: "player" },
            "AVDIJA": { matches: ['AVDIJA'], type: "player" },
            "DUNCAN": { matches: ['DUNCAN'], type: "player" },
            "GINOBILI": { matches: ['GINOBILI'], type: "player" },
            "PARKER": { matches: ['PARKER'], type: "player" },
            "ANTHONY": { matches: ['ANTHONY'], type: "player" },
            "HENDERSON": { matches: ['HENDERSON'], type: "player" },
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
            "MITCHELL": { matches: ["MITCHELL"], type: "player" },
            "ENBIID": { matches: ["ENBIID"], type: "player" },
            "BEAL": { matches: ["BEAL"], type: "player" },
            "BAANCHERO": { matches: ["BAANCHERO"], type: "player" },
            "McGRADY": { matches: ["McGRADY"], type: "player" },
            "ERDWARDS": { matches: ["ERDWARDS"], type: "player" },
            "RODMAN": { matches: ["RODMAN"], type: "player" },
            "PIPPPEN": { matches: ["PIPPPEN"], type: "player" },
            "LAVINE": { matches: ["LAVINE"], type: "player" },
            "NORRIS": { matches: ["NORRIS"], type: "player" },
            "PAULI": { matches: ["PAULI"], type: "player" },
            "BARKLEY": { matches: ["BARKLEY"], type: "player" },
            "UNAM": { matches: ["UNAM"], type: "player" },
            "CREEN": { matches: ["CREEN"], type: "player" },
            "VINI": { matches: ["VINI"], type: "player" },
            "Guimaraes": { matches: ["Guimaraes"], type: "player" },
            "BELLINGHAM": { matches: ["BELLINGHAM"], type: "player" },
            "O'NEAL": { matches: ["O'NEAL"], type: "player" },
            "WAGNER": { matches: ["WAGNER"], type: "player" },
            "FULTZ": { matches: ["FULTZ"], type: "player" },
            "BANCHERO": { matches: ["BANCHERO"], type: "player" },
            "HARDAWAY": { matches: ["HARDAWAY"], type: "player" },
            "SIMMONS": { matches: ["SIMMONS"], type: "player" },
            "KAZUHA": { matches: ["KAZUHA"], type: "player" },
            "CHAEWON": { matches: ["CHAEWON"], type: "player" },
            "EUNCHAE": { matches: ["EUNCHAE"], type: "player" },
            "YUNJIN": { matches: ["YUNJIN"], type: "player" },
            "SAKURA": { matches: ["SAKURA"], type: "player" },
            "MBAPPE#7": { matches: ["MBAPPE#7"], type: "player" },
            "O.DEMBELE": { matches: ["O.DEMBELE"], type: "player" },
            "KANG": { matches: ["KANG"], type: "player" },
            "BOB": { matches: ["BOB"], type: "player" },
            "BENZEMA": { matches: ["BENZEMA"], type: "player" },
            "Alonso": { matches: ["Alonso"], type: "player" },
            "WAGHER": { matches: ["WAGHER"], type: "player" },
            "BANE": { matches: ["BANE"], type: "player" },
            "CUNNINGHAM": { matches: ["CUNNINGHAM"], type: "player" },
            "CLARKSON": { matches: ["CLARKSON"], type: "player" },
            "MARKKANEN": { matches: ["MARKKANEN"], type: "player" },
            "GIDDEY": { matches: ["GIDDEY"], type: "player" },
            "MILLIAMSON": { matches: ["MILLIAMSON"], type: "player" },
            "MITCHLL": { matches: ["MITCHLL"], type: "player" },
            "GARLAND": { matches: ["GARLAND"], type: "player" },
            "INGRAM": { matches: ["INGRAM"], type: "player" },
            "MURRAY": { matches: ["MURRAY"], type: "player" },
            "HALLBURTON": { matches: ["HALLBURTON"], type: "player" },
            "SMART": { matches: ["SMART"], type: "player" },
            "PIPPEN": { matches: ["PIPPEN"], type: "player" },
            "MUTOMBO": { matches: ["MUTOMBO"], type: "player" },
            "EWING": { matches: ["EWING"], type: "player" },
            "HORFORO": { matches: ["HORFORO"], type: "player" },
            "KNOW": { matches: ["KNOW"], type: "player" },
            "YOURSELF": { matches: ["YOURSELF"], type: "player" },
            "BAPE": { matches: ["BAPE"], type: "player" },
            "GIGI": { matches: ["GIGI"], type: "player" },
            "SHOHOKU": { matches: ["SHOHOKU"], type: "player" },
            "MITSUI": { matches: ["MITSUI"], type: "player" },
            "AKAGI": { matches: ["AKAGI"], type: "player" },
            "RUKAWA": { matches: ["RUKAWA"], type: "player" },
            "MIYAGI": { matches: ["MIYAGI"], type: "player" },
            "McCOLLUM": { matches: ["McCOLLUM"], type: "player" },
            "BRUNSION": { matches: ["BRUNSION"], type: "player" },
            "MIDDLETON": { matches: ["MIDDLETON"], type: "player" },
            "PALL": { matches: ["PALL"], type: "player" },
            "HAROEN": { matches: ["HAROEN"], type: "player" },
            "OUBRE": { matches: ["OUBRE"], type: "player" },
            "WILLIAMSON": { matches: ["WILLIAMSON"], type: "player" },
            "WISEMAN": { matches: ["WISEMAN"], type: "player" },
            "IGUODALA": { matches: ["IGUODALA"], type: "player" },
            "KUMINGA": { matches: ["KUMINGA"], type: "player" },
            "ALPHATAURI": { matches: ["ALPHATAURI"], type: "player" },
            "SAKURAGI": { matches: ["SAKURAGI"], type: "player" },
            "ALPINE": { matches: ["ALPINE"], type: "player" },
            "ROCKRTS": { matches: ["ROCKRTS"], type: "player" },
            "MCGRADY": { matches: ["MCGRADY"], type: "player" },
            "FRANCIS": { matches: ["FRANCIS"], type: "player" },
            "IVEY": { matches: ["IVEY"], type: "player" },
            "KIDD": { matches: ["KIDD"], type: "player" },
            "PIERCE": { matches: ["PIERCE"], type: "player" },
            "ALLEN": { matches: ["ALLEN"], type: "player" },
            "JOHNSON": { matches: ["JOHNSON"], type: "player" },
            "WALL": { matches: ["WALL"], type: "player" },
            "Ronaldo": { matches: ["Ronaldo"], type: "player" },
            "MARLEY": { matches: ["MARLEY"], type: "player" },
            "ADERAYO": { matches: ["ADERAYO"], type: "player" },
            "ARENAS": { matches: ["ARENAS"], type: "player" },
            "CARLAND": { matches: ["CARLAND"], type: "player" },
            "MOBLEY": { matches: ["MOBLEY"], type: "player" },
            "BIBBY": { matches: ["BIBBY"], type: "player" },
            "MURRY": { matches: ["MURRY"], type: "player" },
            "GOBERT": { matches: ["GOBERT"], type: "player" },
            "LILIARD": { matches: ["LILIARD"], type: "player" },
            "O’NEAL": { matches: ["O’NEAL"], type: "player" },
            "O‘NEAL": { matches: ["O‘NEAL"], type: "player" },
            "WILLIAMS": { matches: ["WILLIAMS"], type: "player" },
            "VANVLEET": { matches: ["VANVLEET"], type: "player" },
            "POYTHRESS": { matches: ["POYTHRESS"], type: "player" },
            "ZIDANE": { matches: ["ZIDANE"], type: "player" }
            // "Template": { matches: ['Template'], type: "player" },
        },

        marcas: {
            "Puma": {
                matches: ['*PM', '(女)*PM', '*PM(球员童装)', '(长袖球员)*PM', '*PM浅绿', "#PM", "PM01",],
                type: "marca"
            },
            "The North Face": {
                matches: ['TNF'],
                type: "marca"
            },
            "Adidas": {
                matches: ['AD09', "a#d",  "#ad",],
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
            // "Template": {
            //     matches: ['Template'],
            //     type: "marca"
            // },
            // "Template": {
            //     matches: ['Template'],
            //     type: "marca"
            // },
            // "Template": {
            //     matches: ['Template'],
            //     type: "marca"
            // },
            
        },

        modelos:{
            "#2308": { matches: ["#2308"], type: "modelo" },
            "#2312": { matches: ["#2312"], type: "modelo" },
            "#2310": { matches: ["#2310"], type: "modelo" },
            "#AB07": { matches: ["#AB07"], type: "modelo" },
            "#AJ18": { matches: ["#AJ18"], type: "modelo" },
            "#A30": { matches: ["#A30"], type: "modelo" },
            "#A31": { matches: ["#A31"], type: "modelo" },
            "#A32": { matches: ["#A32"], type: "modelo" },
            "#A781": { matches: ["#A781"], type: "modelo" },
            "#A794": { matches: ["#A794"], type: "modelo" },
            "#A805": { matches: ["#A805"], type: "modelo" },
            "#A796": { matches: ["#A796"], type: "modelo" },
            "CQ01": { matches: ["CQ01"], type: "modelo" },
            "CN01": { matches: ["CN01"], type: "modelo" },
            "NJ12": { matches: ["NJ12"], type: "modelo" },
            "ND08": { matches: ["ND08", '#ND08'], type: "modelo" },
            "#NM07": { matches: ["#NM07"], type: "modelo" },
            "#AB08": { matches: ["#AB08"], type: "modelo" },
            "#AM05": { matches: ["#AM05"], type: "modelo" },
            "#A33": { matches: ["#A33"], type: "modelo" },
            "NM07": { matches: ["NM07"], type: "modelo" },
            "T107": { matches: ["T107"], type: "modelo" },
            "T110": { matches: ["T110"], type: "modelo" },
            "T111": { matches: ["T111"], type: "modelo" },
            "T112": { matches: ["T112"], type: "modelo" },
            "T113": { matches: ["T113"], type: "modelo" },
            "T114": { matches: ["T114"], type: "modelo" },
            "T115": { matches: ["T115"], type: "modelo" },
            "T116": { matches: ["T116"], type: "modelo" },
            "T117": { matches: ["T117"], type: "modelo" },
            "T118": { matches: ["T118"], type: "modelo" },
            "T119": { matches: ["T119"], type: "modelo" },
            "T120": { matches: ["T120"], type: "modelo" },
            "T121": { matches: ["T121"], type: "modelo" },
            "T122": { matches: ["T122"], type: "modelo" },
            "T123": { matches: ["T123"], type: "modelo" },
            "T124": { matches: ["T124"], type: "modelo" },
            "T125": { matches: ["T125"], type: "modelo" },
            "T126": { matches: ["T126"], type: "modelo" },
            "T127": { matches: ["T127"], type: "modelo" },
            "T128": { matches: ["T128"], type: "modelo" },
            "T129": { matches: ["T129"], type: "modelo" },
            "T130": { matches: ["T130"], type: "modelo" },
            "T131": { matches: ["T131"], type: "modelo" },
            "T132": { matches: ["T132"], type: "modelo" },
            "T133": { matches: ["T133"], type: "modelo" },
            "T135": { matches: ["T135"], type: "modelo" },
            "T136": { matches: ["T136"], type: "modelo" },
            "T137": { matches: ["T137满分"], type: "modelo" },
            "T138": { matches: ["T138"], type: "modelo" },
            "T139": { matches: ["T139"], type: "modelo" },
            "T140": { matches: ["T140"], type: "modelo" },
            "T141": { matches: ["T141"], type: "modelo" },
            "T142": { matches: ["T142"], type: "modelo" },
            "T143": { matches: ["T143"], type: "modelo" },
            "T144": { matches: ["T144"], type: "modelo" },
            "T145": { matches: ["T145"], type: "modelo" },
            "T146": { matches: ["T146"], type: "modelo" },
            "T147": { matches: ["T147"], type: "modelo" },
            "T148": { matches: ["T148"], type: "modelo" },
            "T149": { matches: ["T149"], type: "modelo" },
            "T150": { matches: ["T150"], type: "modelo" },
            "T152": { matches: ["T152"], type: "modelo" },
            "T153": { matches: ["T153"], type: "modelo" },
            "T156": { matches: ["T156"], type: "modelo" },
            "T157": { matches: ["T157"], type: "modelo" },
            "T158": { matches: ["T158"], type: "modelo" },
            "T160": { matches: ["T160"], type: "modelo" },
            "T161": { matches: ["T161"], type: "modelo" },
            "T162": { matches: ["T162"], type: "modelo" },
            "T163": { matches: ["T163"], type: "modelo" },
            "T165": { matches: ["T165"], type: "modelo" },
            "T166": { matches: ["T166"], type: "modelo" },
            "T167": { matches: ["T167"], type: "modelo" },
            "T169": { matches: ["T169"], type: "modelo" },
            "T170": { matches: ["T170"], type: "modelo" },
            "T171": { matches: ["T171"], type: "modelo" },
            "T172": { matches: ["T172"], type: "modelo" },
            "T173": { matches: ["T173"], type: "modelo" },
            "T174": { matches: ["T174"], type: "modelo" },
            "T175": { matches: ["T175"], type: "modelo" },
            "T176": { matches: ["T176"], type: "modelo" },
            "T177": { matches: ["T177"], type: "modelo" },
            "T178": { matches: ["T178"], type: "modelo" },
            "T179": { matches: ["T179"], type: "modelo" },
            "T180": { matches: ["T180"], type: "modelo" },
            "T181": { matches: ["T181"], type: "modelo" },
            "T182": { matches: ["T182"], type: "modelo" },
            "T183": { matches: ["T183"], type: "modelo" },
            "T184": { matches: ["T184"], type: "modelo" },
            "T185": { matches: ["T185"], type: "modelo" },
            "T186": { matches: ["T186"], type: "modelo" },
            "T187": { matches: ["T187"], type: "modelo" },
            "T188": { matches: ["T188"], type: "modelo" },
            "T189": { matches: ["T189"], type: "modelo" },
            "T190": { matches: ["T190"], type: "modelo" },
            "T191": { matches: ["T191"], type: "modelo" },
            "T192": { matches: ["T192"], type: "modelo" },
            "T193": { matches: ["T193"], type: "modelo" },
            "T194": { matches: ["T194"], type: "modelo" },
            "T195": { matches: ["T195"], type: "modelo" },
            "T196": { matches: ["T196"], type: "modelo" },
            "T197": { matches: ["T197"], type: "modelo" },
            "T198": { matches: ["T198"], type: "modelo" },
            "T199": { matches: ["T199"], type: "modelo" },
            "T200": { matches: ["T200"], type: "modelo" },
            "T201": { matches: ["T201"], type: "modelo" },
            "T202": { matches: ["T202"], type: "modelo" },
            "T203": { matches: ["T203"], type: "modelo" },
            "T204": { matches: ["T204"], type: "modelo" },
            "T205": { matches: ["T205"], type: "modelo" },
            "T206": { matches: ["T206"], type: "modelo" },
            "T207": { matches: ["T207"], type: "modelo" },
            "T208": { matches: ["T208"], type: "modelo" },
            "T209": { matches: ["T209"], type: "modelo" },
            "T210": { matches: ["T210"], type: "modelo" },
            "T211": { matches: ["T211"], type: "modelo" },
            "T212": { matches: ["T212"], type: "modelo" },
            "T213": { matches: ["T213"], type: "modelo" },
            "T214": { matches: ["T214"], type: "modelo" },
            "T215": { matches: ["T215"], type: "modelo" },
            "T216": { matches: ["T216"], type: "modelo" },
            "T217": { matches: ["T217"], type: "modelo" },
            "T219": { matches: ["T219"], type: "modelo" },
            "T220": { matches: ["T220"], type: "modelo" },
            "T221": { matches: ["T221"], type: "modelo" },
            "T222": { matches: ["T222"], type: "modelo" },
            "T223": { matches: ["T223"], type: "modelo" },
            "T224": { matches: ["T224"], type: "modelo" },
            "T225": { matches: ["T225"], type: "modelo" },
            "T226": { matches: ["T226"], type: "modelo" },
            "T227": { matches: ["T227"], type: "modelo" },
            "T228": { matches: ["T228"], type: "modelo" },
            "T229": { matches: ["T229"], type: "modelo" },
            "T230": { matches: ["T230"], type: "modelo" },
            "T231": { matches: ["T231"], type: "modelo" },
            "T232": { matches: ["T232"], type: "modelo" },
            "T234": { matches: ["T234"], type: "modelo" },
            "T235": { matches: ["T235"], type: "modelo" },
            "T236": { matches: ["T236"], type: "modelo" },
            "T237": { matches: ["T237"], type: "modelo" },
            "T238": { matches: ["T238"], type: "modelo" },
            "T239": { matches: ["T239"], type: "modelo" },
            "T240": { matches: ["T240"], type: "modelo" },
            "T241": { matches: ["T241"], type: "modelo" },
            "T242": { matches: ["T242"], type: "modelo" },
            "T244": { matches: ["T244"], type: "modelo" },
            "T246": { matches: ["T246"], type: "modelo" },
            "T247": { matches: ["T247"], type: "modelo" },
            "T248": { matches: ["T248"], type: "modelo" },
            "T249": { matches: ["T249"], type: "modelo" },
            "T250": { matches: ["T250"], type: "modelo" },
            "T251": { matches: ["T251"], type: "modelo" },
            "T252": { matches: ["T252"], type: "modelo" },
            "T254": { matches: ["T254"], type: "modelo" },
            "T255": { matches: ["T255"], type: "modelo" },
            "T256": { matches: ["T256"], type: "modelo" },
            "T257": { matches: ["T257"], type: "modelo" },
            "T258": { matches: ["T258"], type: "modelo" },
            "T259": { matches: ["T259"], type: "modelo" },
            "T260": { matches: ["T260"], type: "modelo" },
            "T261": { matches: ["T261"], type: "modelo" },
            "T262": { matches: ["T262"], type: "modelo" },
            "T263": { matches: ["T263"], type: "modelo" },
            "T264": { matches: ["T264"], type: "modelo" },
            "T265": { matches: ["T265"], type: "modelo" },
            "T266": { matches: ["T266"], type: "modelo" },
            "T272": { matches: ["T272"], type: "modelo" },
            "T273": { matches: ["T273"], type: "modelo" },
            "T280": { matches: ["T280"], type: "modelo" },
            "T281": { matches: ["T281"], type: "modelo" },
            "T282": { matches: ["T282"], type: "modelo" },
            "T888": { matches: ["T888"], type: "modelo" },
            "T277": { matches: ["T277"], type: "modelo" },
            "T275": { matches: ["T275"], type: "modelo" },
            "T279": { matches: ["T279"], type: "modelo" },
            "T278": { matches: ["T278"], type: "modelo" },
            "T274": { matches: ["T274"], type: "modelo" },
            "T270": { matches: ["T270"], type: "modelo" },
            "T276": { matches: ["T276"], type: "modelo" },
            "T269": { matches: ["T269"], type: "modelo" },
            "T268": { matches: ["T268"], type: "modelo" },
            "T267": { matches: ["T267"], type: "modelo" },
            "NJ13": { matches: ["NJ13"], type: "modelo" },
            "#RK902": { matches: ["#RK902冲锋衣"], type: "modelo" },
            "#RK901": { matches: ["#RK901冲锋衣"], type: "modelo" },
            "#RK903": { matches: ["#RK903冲锋衣"], type: "modelo" },
            "#RK907": { matches: ["#RK907冲锋衣"], type: "modelo" },
            "#RK906": { matches: ["#RK906冲锋衣"], type: "modelo" },
            "RK905": { matches: ["RK905冲锋衣"], type: "modelo" },
            "RK904": { matches: ["RK904冲锋衣"], type: "modelo" },
            "#P2加棉": { matches: ["#P2加棉冲锋衣"], type: "modelo" },
            "#P7加棉": { matches: ["#P7加棉冲锋衣"], type: "modelo" },
            "#P5加棉": { matches: ["#P5加棉冲锋衣"], type: "modelo" },
            "#P6加棉": { matches: ["#P6加棉冲锋衣"], type: "modelo" },
            "#F709": { matches: ["#F709冲锋衣"], type: "modelo" },
            "#F708": { matches: ["#F708冲锋衣"], type: "modelo" },
            "120th": { matches: ["120th"], type: "modelo" },
            "#F704": { matches: ["#F704冲锋衣"], type: "modelo" },
            "#A34": { matches: ["#A34"], type: "modelo" },
            "#G226": { matches: ["#G226"], type: "modelo" },
            "#G233": { matches: ["#G233"], type: "modelo" },
            "#G225": { matches: ["#G225"], type: "modelo" },
            "#G206": { matches: ["#G206"], type: "modelo" },
            "#G229": { matches: ["#G229光板"], type: "modelo" },
            "#G221": { matches: ["#G221"], type: "modelo" },
            "#G231": { matches: ["#G231"], type: "modelo" },
            "#G205": { matches: ["#G205(黑标)"], type: "modelo" },
            "#G220": { matches: ["#G220"], type: "modelo" },
            "#G207": { matches: ["#G207"], type: "modelo" },
            "#G222": { matches: ["#G222"], type: "modelo" },
            "#G203": { matches: ["#G203"], type: "modelo" },
            "#G228": { matches: ["#G228光板"], type: "modelo" },
            "#G209": { matches: ["#G209(彩标)"], type: "modelo" },
            "#G224": { matches: ["#G224"], type: "modelo" },
            "#G223": { matches: ["#G223"], type: "modelo" },
            "#G204": { matches: ["#G204(黄标)"], type: "modelo" },
            "#G232": { matches: ["#G232"], type: "modelo" },
            "#G227": { matches: ["#G227"], type: "modelo" },
            "#G208": { matches: ["#G208(金标)"], type: "modelo" },
            "#G218": { matches: ["#G218"], type: "modelo" },
            "#G216": { matches: ["#G216"], type: "modelo" },
            "#G219": { matches: ["#G219"], type: "modelo" },
            "#G217": { matches: ["#G217"], type: "modelo" },
            "#G215": { matches: ["#G215"], type: "modelo" },
            "#G212": { matches: ["#G212"], type: "modelo" },
            "#G211": { matches: ["#G211(白标)"], type: "modelo" },
            "#G213": { matches: ["#G213"], type: "modelo" },
            "#G210": { matches: ["#G210(金标)"], type: "modelo" },
            "#G214": { matches: ["#G214"], type: "modelo" },
            "#G202": { matches: ["#G202"], type: "modelo" },
            "#G201": { matches: ["#G201"], type: "modelo" },
            "#G209": { matches: ["#G209棉衣"], type: "modelo" },
            "#G199": { matches: ["#G199(红标)棉衣"], type: "modelo" },
            "#G198": { matches: ["#G198(白标)棉衣"], type: "modelo" },
            "#G184": { matches: ["#G184(蓝标)棉衣"], type: "modelo" },
            "#G197": { matches: ["#G197棉衣"], type: "modelo" },
            "#G196": { matches: ["#G196棉衣"], type: "modelo" },
            "#G182": { matches: ["#G182(蓝标)棉衣"], type: "modelo" },
            "#G188": { matches: ["#G188棉衣"], type: "modelo" },
            "#G190": { matches: ["#G190棉衣"], type: "modelo" },
            "#G191": { matches: ["#G191棉衣"], type: "modelo" },
            "#G192": { matches: ["#G192棉衣"], type: "modelo" },
            "#G194": { matches: ["#G194棉衣"], type: "modelo" },
            "#G189": { matches: ["#G189棉衣"], type: "modelo" },
            "#G186": { matches: ["#G186(蓝标)棉衣"], type: "modelo" },
            "#G187": { matches: ["#G187(金标)棉衣"], type: "modelo" },
            "#G185": { matches: ["#G185(金标)棉衣"], type: "modelo" },
            "#G193": { matches: ["#G193棉衣"], type: "modelo" },
            "#G195": { matches: ["#G195棉衣"], type: "modelo" },
            "#G183": { matches: ["#G183(金标)棉衣"], type: "modelo" },
            "J10": { matches: ["J10"], type: "modelo" },
            "J11": { matches: ["J11"], type: "modelo" },
            "MF7": { matches: ["MF7"], type: "modelo" },
            "MF5": { matches: ["MF5"], type: "modelo" },
            "MF4": { matches: ["MF4"], type: "modelo" },
            "MF3": { matches: ["MF3"], type: "modelo" },
            "MF1": { matches: ["MF1"], type: "modelo" },
            "MF6": { matches: ["MF6"], type: "modelo" },
            "#F602": { matches: ["#F602"], type: "modelo" },
            "#F601": { matches: ["#F601"], type: "modelo" },
            "#A725": { matches: ["#A725"], type: "modelo" },
            "#F569": { matches: ["#F569"], type: "modelo" },
            "#A788": { matches: ["#A788"], type: "modelo" },
            "#A799": { matches: ["#A799(喷墨龙)"], type: "modelo" },
            "#A797": { matches: ["#A797(喷墨龙)"], type: "modelo" },
            "#A801": { matches: ["#A801(喷墨龙)"], type: "modelo" },
            "#A806": { matches: ["#A806"], type: "modelo" },
            "#A768": { matches: ["#A768"], type: "modelo" },
            "#A798": { matches: ["#A798(喷墨龙)"], type: "modelo" },
            "#A800": { matches: ["#A800(喷墨龙)"], type: "modelo" },
            "#A768": { matches: ["#A768(喷墨龙)"], type: "modelo" },
            "#F580": { matches: ["#F580"], type: "modelo" },
            "#A795": { matches: ["#A795(喷墨)"], type: "modelo" },
            "#F579": { matches: ["#F579"], type: "modelo" },
            "#F594": { matches: ["#F594"], type: "modelo" },
            "#A812": { matches: ["#A812(喷墨)"], type: "modelo" },
            "A811": { matches: ["A811(喷墨)"], type: "modelo" },
            "A744": { matches: ["A744"], type: "modelo" },
            "#A757": { matches: ["#A757(喷墨)"], type: "modelo" },
            "#A753": { matches: ["#A753(喷墨)"], type: "modelo" },
            "#F564": { matches: ["#F564半拉连帽"], type: "modelo" },
            "#F585": { matches: ["#F585半拉连帽"], type: "modelo" },
            "#F599": { matches: ["#F599半拉连帽"], type: "modelo" },
            "#F598": { matches: ["#F598半拉连帽"], type: "modelo" },
            "#F583": { matches: ["#F583"], type: "modelo" },
            "#F581": { matches: ["#F581"], type: "modelo" },
            "#F563": { matches: ["#F563"], type: "modelo" },
            "#F568": { matches: ["#F568"], type: "modelo" },
            "#A749": { matches: ["#A749"], type: "modelo" },
            "#A778": { matches: ["#A778"], type: "modelo" },
            "#A761": { matches: ["#A761"], type: "modelo" },
            "#F589": { matches: ["#F589半拉连帽"], type: "modelo" },
            "#F591": { matches: ["#F591半拉连帽"], type: "modelo" },
            "#F574": { matches: ["#F574"], type: "modelo" },
            "#F590": { matches: ["#F590"], type: "modelo" },
            "#F587": { matches: ["#F587"], type: "modelo" },
            "#A807": { matches: ["#A807(喷墨)"], type: "modelo" },
            "#A808": { matches: ["#A808(喷墨)"], type: "modelo" },
            "#A814": { matches: ["#A814(喷墨)"], type: "modelo" },
            "#A810": { matches: ["#A810(喷墨)"], type: "modelo" },
            "#A785": { matches: ["#A785"], type: "modelo" },
            "#F567": { matches: ["#F567半拉连帽"], type: "modelo" },
            "#F560": { matches: ["#F560"], type: "modelo" },
            "#F573": { matches: ["#F573"], type: "modelo" },
            "#F593": { matches: ["#F593半拉连帽"], type: "modelo" },
            "#F592": { matches: ["#F592半拉连帽"], type: "modelo" },
            "#A733": { matches: ["#A733"], type: "modelo" },
            "#A759": { matches: ["#A759(蓝领)"], type: "modelo" },
            "#F595": { matches: ["#F595半拉连帽"], type: "modelo" },
            "#A735": { matches: ["#A735"], type: "modelo" },
            "#F575": { matches: ["#F575"], type: "modelo" },
            "#F597": { matches: ["#F597半拉连帽"], type: "modelo" },
            "#F596": { matches: ["#F596半拉连帽"], type: "modelo" },
            "#A770": { matches: ["#A770"], type: "modelo" },
            "A763": { matches: ["A763"], type: "modelo" },
            "#A734": { matches: ["#A734"], type: "modelo" },
            "#F566": { matches: ["#F566"], type: "modelo" },
            "#F561": { matches: ["#F561"], type: "modelo" },
            "#F565": { matches: ["#F565"], type: "modelo" },
            "#F577": { matches: ["#F577"], type: "modelo" },
            "#F576": { matches: ["#F576"], type: "modelo" },
            "#A746": { matches: ["#A746"], type: "modelo" },
            "#A747": { matches: ["#A747"], type: "modelo" },
            "#A748": { matches: ["#A748"], type: "modelo" },
            "#A751": { matches: ["#A751"], type: "modelo" },
            "#A754": { matches: ["#A754"], type: "modelo" },
            "#A755": { matches: ["#A755"], type: "modelo" },
            "#A756": { matches: ["#A756"], type: "modelo" },
            "#A758": { matches: ["#A758"], type: "modelo" },
            "#A760": { matches: ["#A760"], type: "modelo" },
            "#A762": { matches: ["#A762"], type: "modelo" },
            "#A764": { matches: ["#A764"], type: "modelo" },
            "#A765": { matches: ["#A765"], type: "modelo" },
            "#A766": { matches: ["#A766"], type: "modelo" },
            "#A767": { matches: ["#A767"], type: "modelo" },
            "#A769": { matches: ["#A769"], type: "modelo" },
            "#A771": { matches: ["#A771"], type: "modelo" },
            "#A772": { matches: ["#A772"], type: "modelo" },
            "#A773": { matches: ["#A773"], type: "modelo" },
            "#A774": { matches: ["#A774"], type: "modelo" },
            "#A775": { matches: ["#A775"], type: "modelo" },
            "#A776": { matches: ["#A776"], type: "modelo" },
            "#A777": { matches: ["#A777"], type: "modelo" },
            "#A779": { matches: ["#A779"], type: "modelo" },
            "#A780": { matches: ["#A780"], type: "modelo" },
            "#A781": { matches: ["#A781"], type: "modelo" },
            "#A782": { matches: ["#A782"], type: "modelo" },
            "#A783": { matches: ["#A783"], type: "modelo" },
            "#A784": { matches: ["#A784"], type: "modelo" },
            "#A786": { matches: ["#A786"], type: "modelo" },
            "#A787": { matches: ["#A787"], type: "modelo" },
            "#A789": { matches: ["#A789"], type: "modelo" },
            "#A790": { matches: ["#A790"], type: "modelo" },
            "#A791": { matches: ["#A791"], type: "modelo" },
            "#A792": { matches: ["#A792"], type: "modelo" },
            "#A793": { matches: ["#A793"], type: "modelo" },
            "#A794": { matches: ["#A794"], type: "modelo" },
            "#A796": { matches: ["#A796"], type: "modelo" },
            "#A799": { matches: ["#A799"], type: "modelo" },
            "#A801": { matches: ["#A801"], type: "modelo" },
            "#A802": { matches: ["#A802"], type: "modelo" },
            "#A803": { matches: ["#A803"], type: "modelo" },
            "#A804": { matches: ["#A804"], type: "modelo" },
            "#A805": { matches: ["#A805"], type: "modelo" },
            "#A809": { matches: ["#A809"], type: "modelo" },
            "#A811": { matches: ["#A811"], type: "modelo" },
            "#A813": { matches: ["#A813"], type: "modelo" },
            "#A815": { matches: ["#A815"], type: "modelo" },
            "#A816": { matches: ["#A816"], type: "modelo" },
            "#A817": { matches: ["#A817"], type: "modelo" },
            "#A818": { matches: ["#A818"], type: "modelo" },
            "#A819": { matches: ["#A819"], type: "modelo" },
            "#A820": { matches: ["#A820"], type: "modelo" },
            "#A821": { matches: ["#A821"], type: "modelo" },
            "#A822": { matches: ["#A822"], type: "modelo" },
            "#A823": { matches: ["#A823"], type: "modelo" },
            "#A824": { matches: ["#A824"], type: "modelo" },
            "#A825": { matches: ["#A825"], type: "modelo" },
            "#A826": { matches: ["#A826"], type: "modelo" },
            "#A827": { matches: ["#A827"], type: "modelo" },
            "#A828": { matches: ["#A828"], type: "modelo" },
            "#A829": { matches: ["#A829"], type: "modelo" },
            "#A830": { matches: ["#A830"], type: "modelo" },
            "#A831": { matches: ["#A831"], type: "modelo" },
            "#A832": { matches: ["#A832"], type: "modelo" },
            "#A833": { matches: ["#A833"], type: "modelo" },
            "#A834": { matches: ["#A834"], type: "modelo" },
            "#A835": { matches: ["#A835"], type: "modelo" },
            "#A836": { matches: ["#A836"], type: "modelo" },
            "#A837": { matches: ["#A837"], type: "modelo" },
            "#A838": { matches: ["#A838"], type: "modelo" },
            "#A839": { matches: ["#A839"], type: "modelo" },
            "#A840": { matches: ["#A840"], type: "modelo" },
            "#A841": { matches: ["#A841"], type: "modelo" },
            "#A842": { matches: ["#A842"], type: "modelo" },
            "#A843": { matches: ["#A843"], type: "modelo" },
            "#A844": { matches: ["#A844"], type: "modelo" },
            "#A845": { matches: ["#A845"], type: "modelo" },
            "#A846": { matches: ["#A846"], type: "modelo" },
            "#A847": { matches: ["#A847"], type: "modelo" },
            "#A848": { matches: ["#A848"], type: "modelo" },
            "#A849": { matches: ["#A849"], type: "modelo" },
            "#A850": { matches: ["#A850"], type: "modelo" },
            "#A851": { matches: ["#A851"], type: "modelo" },
            "#A852": { matches: ["#A852"], type: "modelo" },
            "#A853": { matches: ["#A853"], type: "modelo" },
            "#A854": { matches: ["#A854"], type: "modelo" },
            "#A855": { matches: ["#A855"], type: "modelo" },
            "#A856": { matches: ["#A856"], type: "modelo" },
            "#A857": { matches: ["#A857"], type: "modelo" },
            "#A858": { matches: ["#A858"], type: "modelo" },
            "#A859": { matches: ["#A859"], type: "modelo" },
            "#A860": { matches: ["#A860"], type: "modelo" },
            "#A861": { matches: ["#A861"], type: "modelo" },
            "#A862": { matches: ["#A862"], type: "modelo" },
            "#A863": { matches: ["#A863"], type: "modelo" },
            "#A864": { matches: ["#A864"], type: "modelo" },
            "#A865": { matches: ["#A865"], type: "modelo" },
            "#A866": { matches: ["#A866"], type: "modelo" },
            "#A867": { matches: ["#A867"], type: "modelo" },
            "#A868": { matches: ["#A868"], type: "modelo" },
            "#A869": { matches: ["#A869"], type: "modelo" },
            "#A870": { matches: ["#A870"], type: "modelo" },
            "#A871": { matches: ["#A871"], type: "modelo" },
            "#A872": { matches: ["#A872"], type: "modelo" },
            "#A873": { matches: ["#A873"], type: "modelo" },
            "#A874": { matches: ["#A874"], type: "modelo" },
            "#A875": { matches: ["#A875"], type: "modelo" },
            "#A876": { matches: ["#A876"], type: "modelo" },
            "#A877": { matches: ["#A877"], type: "modelo" },
            "#A878": { matches: ["#A878"], type: "modelo" },
            "#A879": { matches: ["#A879"], type: "modelo" },
            "#A880": { matches: ["#A880"], type: "modelo" },
            "#A881": { matches: ["#A881"], type: "modelo" },
            "#A882": { matches: ["#A882"], type: "modelo" },
            "#A883": { matches: ["#A883"], type: "modelo" },
            "#A884": { matches: ["#A884"], type: "modelo" },
            "#A885": { matches: ["#A885"], type: "modelo" },
            "#A886": { matches: ["#A886"], type: "modelo" },
            "#A887": { matches: ["#A887"], type: "modelo" },
            "#A888": { matches: ["#A888"], type: "modelo" },
            "#A889": { matches: ["#A889"], type: "modelo" },
            "#A890": { matches: ["#A890"], type: "modelo" },
            "#A891": { matches: ["#A891"], type: "modelo" },
            "#A892": { matches: ["#A892"], type: "modelo" },
            "#A893": { matches: ["#A893"], type: "modelo" },
            "#A894": { matches: ["#A894"], type: "modelo" },
            "#A895": { matches: ["#A895"], type: "modelo" },
            "#A896": { matches: ["#A896"], type: "modelo" },
            "#A897": { matches: ["#A897"], type: "modelo" },
            "#A898": { matches: ["#A898"], type: "modelo" },
            "#A899": { matches: ["#A899"], type: "modelo" },
            "#F701": { matches: ["#F701冲锋衣"], type: "modelo" },
            "#F706": { matches: ["#F706冲锋衣"], type: "modelo" },
            "#F700": { matches: ["#F700冲锋衣"], type: "modelo" },
            "#F705": { matches: ["#F705冲锋衣"], type: "modelo" },
            "#F703": { matches: ["#F703冲锋衣"], type: "modelo" },
            "#F707": { matches: ["#F707冲锋衣"], type: "modelo" },
            "#G234": { matches: ["#G234"], type: "modelo" },
            "#G234": { matches: ["#G234"], type: "modelo" },
            "#G235": { matches: ["#G235"], type: "modelo" },
            "#G236": { matches: ["#G236"], type: "modelo" },
            "#G237": { matches: ["#G237"], type: "modelo" },
            "#G238": { matches: ["#G238", "#G238(白绿标)"], type: "modelo" },
            "#G239": { matches: ["#G239(白彪标)"], type: "modelo" },
            "#G240": { matches: ["#G240(绿彪标)"], type: "modelo" },
            "#G241": { matches: ["#G241(蓝彪标)"], type: "modelo" },
            "#G242": { matches: ["#G242(绿彪标)"], type: "modelo" },
            "#G243": { matches: ["#G243(白彪标)"], type: "modelo" },
            "#G244": { matches: ["#G244(橙标)"], type: "modelo" },
            "#G245": { matches: ["#G245(白标)"], type: "modelo" },
            "#G246": { matches: ["#G246(橙标)"], type: "modelo" },
            "#G247": { matches: ["#G247(黑标)"], type: "modelo" },
            "#G248": { matches: ["#G248(橙标)"], type: "modelo" },
            "#G249": { matches: ["#G249(白标)"], type: "modelo" },
            "#G250": { matches: ["#G250"], type: "modelo" },
            "#G251": { matches: ["#G251"], type: "modelo" },
            "#G252": { matches: ["#G252"], type: "modelo" },
            "#G253": { matches: ["#G253(黄标)"], type: "modelo" },
            "#G254": { matches: ["#G254(红标)"], type: "modelo" },
            "#G255": { matches: ["#G255(黄标)"], type: "modelo" },
            "#G256": { matches: ["#G256(红标)"], type: "modelo" },
            "#G257": { matches: ["#G257(黄标)"], type: "modelo" },
            "#G258": { matches: ["#G258(红标)"], type: "modelo" },
            "#G259": { matches: ["#G259"], type: "modelo" },
            "#G260": { matches: ["#G260"], type: "modelo" },
            "#G261": { matches: ["#G261"], type: "modelo" },
            "#G262": { matches: ["#G262光板"], type: "modelo" },
            "#G263": { matches: ["#G263光板"], type: "modelo" },
            "#G264": { matches: ["#G264光板"], type: "modelo" },
            "C2441": { matches: ["C2441"], type: "modelo" },
            "C2440": { matches: ["C2440"], type: "modelo" },
            "C2444": { matches: ["C2444"], type: "modelo" },
            "A2437": { matches: ["A2437"], type: "modelo" },
            "C2439": { matches: ["C2439"], type: "modelo" },
            "C2443": { matches: ["C2443"], type: "modelo" },
            "C2446": { matches: ["C2446"], type: "modelo" },
            "C2450": { matches: ["C2450"], type: "modelo" },
            "A2438": { matches: ["A2438"], type: "modelo" },
            "A2439": { matches: ["A2439"], type: "modelo" },
            "A2441": { matches: ["A2441"], type: "modelo" },
            "A2401": { matches: ["A2401"], type: "modelo" },
            "A2421": { matches: ["A2421"], type: "modelo" },
            "A2433": { matches: ["A2433"], type: "modelo" },
            "A2436": { matches: ["A2436"], type: "modelo" },
            "A2435": { matches: ["A2435"], type: "modelo" },
            "A2434": { matches: ["A2434"], type: "modelo" },
            "D701": { matches: ["D701"], type: "modelo" },
            "D700": { matches: ["D700"], type: "modelo" },
            "Mamba": { matches: ['Mamba'], type: "modelo" },
            "SWISH": { matches: ['SWISH'], type: "modelo" },
            "Justdon": { matches: ['Justdon'], type: "modelo" },
            "Supersonic": { matches: ['Supersonic'], type: "modelo" },
            "Rams": { matches: ['Rams'], type: "modelo" },
            "NFL": { matches: ['NFL'], type: "modelo" },
            "49ERS": { matches: ['49ERS'], type: "modelo" },
            "Heart": { matches: ['Heart'], type: "modelo" },
        },

        // Saltear, no add nada.
        nothings:{
            "": {
                matches: ['Glory', 'Popule', "#2.974", 'Champions', 'Yellowish', 'Stars', "*布拉甘红牛", "#粉色樱花", "荣耀版", "#夕阳红", "*韦尔瓦", "#紫色动漫", "(圆领)银牛", "Suit(有领)", "*大彩悟空", "#粉红动漫", "*黑龙勇士", "*悟空太阳", "*忍者宇智波", "*日文与龙", "*Y3绿龙兽", "(球员短裤)", "霍芬海姆", "(荣耀版)", "Jersey(蛇纹)", "(冲锋衣)", "#彩标", "*带二星", "*路飞", "*李洛克", "洪都拉奥林", "*日落", "*红雁塔", "*欧冠版", "*自来也", "*炭治郎", "#笑脸", "#爱心", "#C库里", "#飞人", "#字母", "#独角兽", "#蓝标", "#红标", "*金木研", "*卡卡西", "*九尾鸣人", "#小标", "#风景", "#大标", "#夏日风", "#汉堡", "#三角山", "#鼠标", "#苹果", "*日月星辰", "*独塔", "*Y3武士", "*红太阳", "*黑红龙珠", 'Hooded', 'Fabric', "大阪樱花", "*多彩", "布拉甘红牛", "(V领) ", "*全黑", "*七人制", "Jersey(V领) ", "#B600冲锋衣", 'UCL', 'Greem', 'SDD', "UTA", "PHX", "BOS", "GSW", "MLB", "WAS", "NOP", "*AGUILA", "Motorcycle", "Formula", 'NEO', 'warm', '(Chinese Year)', '1:1', '#2311', 'HALO', '#812', '#715', 'Broyal', 'BFC', 'Vesion', '(黄边)', 'Hot', 'Pressing', '*带章', '*玫瑰蛇', '*火龙', '*Gear5', '神户胜利船', '*圣斗士金色', '广岛三箭', '*狐狸', '(童装)(半拉链)', '*蓝黑', '*新广告', '*有领', '*气功悟空', '浦和红钻', '*海贼鸣人眼神', '#绿标', '*红袖边', '*蓝龙', '*耶稣', '(童装)', '字母印', '*柯南D', '#刺绣', '*草帽', '*眼镜帽子', '*蓝袖边多图', '(加绒)', 'Jersey(V领)', 'Jersey(圆领)', '(Trapeze Edition)', '(V领)', '飞人版', '*贝吉塔红', '*贝吉塔蓝', '*咒术回战', '*龙珠黑悟空', '*橙白赛亚人', '*MonK', '(Print Sponsor)', '(球员童装)', '长袖球员', '横滨水手', '*金广告', '*紫色标', '*金双狮', '*赛亚人黑色', '*富士山与塔', '*浪客剑心', '*犬夜叉白色', '(女)', '(长袖球员)', 'Concept', '半拉链', '萨尔斯堡红牛', '*红星队', 'Milky', '(High Quality)', '*忍者系黑衣', '*忍者系绿', '*忍者系蓝', '*忍者系紫', "*云腾", "*金边赛亚", "*火拳路飞", "*Y3黑刀客", "*黄袖", "*数字", "*红标翻领", "灰色(哆啦A梦)", "鸟栖砂岩", "*背心套装", "*悟空黄", "*双面长袖", "*双面", "*黑色", "(童装长袖)", "*Midea广告", "*长刀武士", "(双面刺绣)(双面风衣)", "*背后没图案", "*七彩赛亚人", "*黄金圣斗士", "(半拉链)(匹印)", "*网格", "*酷玩", "*翻领", "(长袖)欧冠决赛版", "*全广告", "(女)黑色", "*鬼武者", "*彩虹神奇宝贝", "*猫头鹰", "万圣节版", "(背后WALES)", "(背后ARGENTINA)", "#2492(半拉链)", "#三星", "#AJ20(童装)", "*周年1889", "*龙珠赛亚", "*忍者波风", "*刀流索隆", "*右袖广告", "*剑士", "*红发香克斯", "*龙樱花", "*黄袖边", "*虎头", "*前带广告", "(双面风衣)(刺绣)", "*布加勒斯特星", "蔚山现代", "*三叶草", "*绿龙", "*彩带", "*红Y3", "*武士刀", "*樱花龙", "*水墨塔", "*太阳武士", "*金标", "#102冲锋衣", "#103加绒冲锋衣", "*三叶草翻领", "*海贼王布鲁克", "*火焰悟空", "*数码宝贝", "*草帽路飞", "*蓝武士", "*三叶草红黑", "*梅花与桥", "*赛亚贝吉塔", "*三叶草粉黑", "*三叶草蓝红", "*三叶草蓝", "*梅花武士", "*枫叶刀客", "*三叶草金标", "*三叶草黑标", "*三叶草白标", "*千变超人", "#花蛇", "*花蛇", "(欧冠版)", "*前横条", "*粉色", "*鬼脸", "(女)圆领", "(有领)", "(Pants Have Pocket)",
                "(蓝边)", "(灰色)", "(墨绿色)", "(双面风衣)(红龙)", "(双面风衣)(涂鸦)", "(双面风衣)(黑龙)", "(双面风衣)(白龙)", "*棕灰", "#彩龙", "(紫边)", "(风衣)", "(蓝领)", "(半拉链)(粉色领)", "(半拉链)(金标)", "(半拉链)(红色领)", "(半拉链)(新标)", "补差价", "(单)", "(黑灰色)", "*三混色", "(长袖)红袖边", "*红绿袖边", "*铁丝网", "Suit(圆领)", "Hoody(有帽卫衣)", "鹿岛鹿角", "川崎前锋", "*译西", "*油漆", "*阿拉伯文", "(MAROC)", "(浅绿)", "*带广告", "*变色英文", "*白色广告", "*金色广告", "莫塔瓜", "(带章)", "Socks(儿童)", "(冠军版)", "勒沃库森", "*黑神话", "*粉黑", "*橙紫", "#龙金黑标", "#龙杏色", "#金标金龙", "#三叶黑", "#三叶白", "海之蓝", "*渐变紫", "#黄标", "#广告/龙爪", "#广告/龙头", "黄马龙头", "萤光黄", "#闪电龙", "(黑领)", "(彩龙)", "(紫黑龙)", "(焰红龙)", "蓝紫龙", "*队徽花纹", "混色13黑", "混色13白", "(前带广告)", "(带全广告)", "*科尔多瓦", "火焰Y3", "*蓝粉", "*山水蓝", "*樱花剑", "七彩云", "鸣人动漫", "#蓝赛亚人", "#红赛亚人", "#佩恩", "#粉墨鸣人", "*Y3土黄", "*七龙珠", "*97拳王", "*Y3黑武士", "*Y3梅花", "#鲤鱼Y3", "经典款1", "经典款4", "经典款3", "经典款2", "Y3粉绿", "*夕阳红", "#白色标", "#红袖边", "#粉色剑", "(条纹)", "(龙珠)", "(黑灰东京)", "Jersey(雪山)", "*带袖广告", "(带广告)", "*黄金马蹄", "*绿标", "*黑标", "(球员短裤)红标", "(涂鸦)", "(大灌篮)", "粉色东京", "(Retro Logo)(V领)", "(胶标)", "(红色)", "Suit(圆领 带号码)", "(星火十代)", "(纽约红牛)", "前没广告", "(无广告)", "(长袖)*新广告", "(长袖球员)*酷玩", "(长袖球员)*新广告", "*金队标", "#碳画鸣人", "#悟空", "97拳王", "龙珠联名", "龙珠战士", "(蓝动漫)", "蜡笔小新", "东京灰白", "超级赛车", "*队标暗纹", "(粉边)", "(七人制)", "(胸前带广告)", "Sleeve(有领)", "(广告渐变版)", "(紫粉色)", "蓝东京", "(冲浪里)", "(春江)", "(白勇者)", "(蓝勇者)", "(玫瑰花)", "(粉彩)", "浅蓝边", "*红狮头", "*狮头", "(三星球员)", "*太阳神", "(冠军纪念版)", "(带二星)", "英格兰", "#龙珠", "#带广告", "#黑金", "绿花边", "*耶稣黄色", "(没图案)", "*耶稣蓝色", "*黄袖前灰", "*黑金前金", "*黑红龙纹", "*蝙蝠", "*耶稣黑灰", "*狮版", "*粉边", "*城市版", "*紫边", "(黑绿花)", "(白绿花)", "(龙)", "(白金龙)", "(反光彩标 黑广告)", "(龙年)", "(白龙标)", "(三星)", "(花绿)", "(翻领)", "(金色边)", "(黑色边)", "(白色边)", "黄色边", "灰色边", "*耶稣灰黑", "(白图纹)", "(黑暗版)", "黑金龙", "金边龙纹", "Jersey(前底纹 灰标)", "(春江泛舟)", "(黑武士)", "(V领)(定制款)", "(红色边)", "(黄龙)", "Silver", "(海潮)", "(清水寺)", "(白ad足球小将)", "(梅花)", "红东京", "(豹)", "Tokusatsu", "(特摄版)", "(黑动漫)", "(战神)", "彩云版", "(动漫版)", "女神版", "(圆圈广告)", "(左袖带图案)", "(字母版)", "(蓝鸟版)", "(枫叶版)", "(粉白)", "(世界杯版)", "Shirt(红牛T恤)", "(有领广告版)", "(宝蓝色)", "(阿尔法托利T恤)", "(奔驰T恤)", "Jersey(猿人头)", "Suit(有领11号)", "Suit(有领1号)", "(圆领16号)", "(圆领55号)", "Suit(有领55号)", 
                "(圆领11号车)", "(圆领1号车)", "(圆领广告版)", "(半拉链)(涂鸦)", "(黑袖)", "(红边)", "红色(加绒)彩标", "白色(加绒)彩标", "黑色(加绒)彩标", "卡其色(加绒)彩标", "灰色(加绒)彩标", "联名(加绒)", "联名(加绒)宝蓝色", "联名(加绒)黑色", "(印花)", "（迷彩）", "（蛇纹）", "(渐变)", "Pants(彩边)", "(欧冠决赛版)", "(背后空白)", "(长袖)(UCL版暗色有决赛字)", "Jersey(UCL版暗色有决赛字)", "Jersey(长袖)", "(长袖)(带决赛字)", "(决赛小字)", "(带决赛字)", "(双袖带章)", "(长袖)(带胸前决赛字)", "jersey(带胸前决赛字)", "(决赛字)", "(长袖)(决赛版)", "(钢印)", "*前带小字", "(长袖)球员版", "球员版", "(长袖)(欧冠决赛字)", "Jersey(带决赛字)", "(胸前决赛字)", "(长袖)(带决赛小字)", "UCL(欧冠版)", "(联赛版)", "(背后带广告)", "Jersey(带胸前小字)", "Jersey(右胸带小字)", "(带小字)", "(长袖)(右胸带小字)", "(钢印纹)", "Jersey(队微位置)", "Jersey(带胸前决赛字)", "(长袖)(带小字)", "(纪念版)", "红色(AD加绒)", "黑色(AD加绒)", "白色(加绒)(AD标)", "宝蓝色(加绒)(AD标)", "卡其色(加绒)(AD标)", "灰色(加绒)(AD标)", "#棕标棉衣", "(半拉链)(印花)", "(黑边)", "(童装半拉链)(宫本)", "(童装半拉链)(七龙珠)", "(半拉链)(悟空)", "(半拉链)(宫本)", "(半拉链)(七龙珠)", "(红领半拉链)", "W2纯棉卫裤",
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
                matches: ["No" , "FCWC 2017 世俱盾ad上" , "PAR.+DP..NE +Bou.. (印全广告)" , "VISIT..DA(左袖广告)" , "DXC.TE (左袖广告)" , "VISIT..DA (左袖广告)" , "GLS (左袖广告)" , "co.pa italia (J三色圈ad上)" , "TOTO (左袖广告)" , "PA.T+DP.+Rbo.ger(印3处广告)" , "B2.in (左袖广告)" , "Print AD*带全广告" , "di..na (左袖广告)" , "Gree (胸前广告)" , "Ka..m (左袖广告)" , "CE..NG (左袖广告)", "No Name No Number", "Shield (冠军盾)", "Shield +eb..y (三色盾N+左袖广告)", 'co.pa italia (三色圈)', "Bundesliga (Black 黑色章)", 'Hep..est (左袖广告)', 'ki..ee (左袖广告)', 'HA..M(左袖广告)', 'ME..ZA (左袖广告)', 'rel..NS (左袖广告)', 'qb (左袖广告)', 'ld..en (左袖广告)', 'We..ds (左袖广告)', 'GC.S (左袖广告)', 'ca..va (左袖广告)', 'SA..ON(左袖广告)', 'JD (左袖广告)', "Sonepar (左袖广告)", 'IN.gia (左袖广告)', 'AMB..tv (左袖广告)', 'Expedia (左袖广告)', 'De..LT (左袖广告)', 'TR..ON (左袖广告)', 'MGS.os (左袖广告)', "No Badge", "MSC (左袖广告)", 'NO Badge', 'noon (左袖广告)'],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/e/8/e80a811156ddf959.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // Campions League
            "UCL": {
                matches: ['UCL(欧冠球)', 'UCL (欧冠球)', 'UCL99/00(欧冠球)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/9/9/9960506e14391237.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect": {
                matches: ['UCL(欧冠2012)', 'UCL 17/18(欧冠)', 'UCL 2019/20 欧冠章', "UCL 2018/19欧冠章", 'UCL+DXC.TE (欧冠新章+左袖广告)', 'UCL+VISIT..DA(欧冠新章+左袖广告)', "UCL (欧冠)", 'CUL(欧冠)', 'UCL(欧冠)', '2010/11UCL(欧冠10/11章)'],
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
            "UCL/Respect/FinalB15": {
                matches: ['UCL +FINAL BERLIN 2015(欧冠+ 胸前决赛字)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/1/2/12d492fe8bbc3038.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation": {
                matches: ['UCL+KOHLER (欧冠新章+左袖广告)', 'UCL +GLS (欧冠新章+左袖广告)', 'UCL + VISIT..DA (欧冠新章+左袖广告)', 'UCL +ih..ar (欧冠新章+左袖广告)', 'UCL + TR..ON(欧冠新章+左袖广告)', 'UCL(欧冠新章)右袖', 'UCL (欧冠新章) 右袖', 'UCL +OKX (欧冠新章+左袖广告)', "UCL (欧冠新章)右袖", 'UCL/TR..ON(欧冠新章+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/a/0/a0acf265b53042a0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Toto": {
                matches: ['UCL +TOTO (欧冠新章+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/03/d/e/deb58e9f1024cf5e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Nieda": {
                matches: ['UCL +NIEDA (欧冠新章+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/17/3/f/3f7dbd235bb29155.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Kraken": {
                matches: ['UCL +Kraken (欧冠新章+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/04/c/3/c3e6f1c816ab17ff.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Goat": {
                matches: ['UCL + GOAT (欧冠新章+左袖广告)', 'UCL+GOAT(欧冠新章+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/12/11/b/b/bbdf0be131da3836.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/ITAINT": {
                matches: ['UCL+Shield(欧冠新章+int冠军盾NK上)', 'UCL+Shield(欧冠新章+冠军盾)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/04/15/5/7/576831fe898a070e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/FinalR09": {
                matches: ['UCL +Final Roma2009 27 MAIG..(欧冠球+胸前决赛字)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/27/9/3/93660efec3a9a65b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/FIFA08": {
                matches: ['UCL+FFCWC2008(世俱盾+欧冠)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/b/b/bb0e22b3e025df15.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAINT": {
                matches: ['Shield(冠军盾int)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/02/5/a/5ac12b2d2415bf08.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/Kraken/Save": {
                matches: ['UCL +Kraken +Save.. (欧冠+左袖广告+背下儿童)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/04/c/0/c0fe1076d8a0f38f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/FIFA23 ": {
                matches: ["UCL +FCWC 2023 (欧冠新章+胸前世俱盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/c/6/c6b36816a394dcb9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL4/Foundation": {
                matches: ['UCL(新平条 4)右袖'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/7/4/7440164b6e1284df.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL5/Foundation": {
                matches: ['UCL(新平条 5)右袖', "UCL (新平条 5)右袖", 'UCL +AMB..tv (新平条 5+左袖广告)', 'UCL (新平条 5)'],
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
            "UCL6/Foundation/Allianz": {
                matches: ["UCL +Allianz (新平条 6+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/20/b/c/bc835c5a670b437c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL6/Foundation/Audi": {
                matches: ["UCL +au-di (新平条 6 +左袖四环)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/10/07/f/0/f068e221045a4d22.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL6/Foundation/Champ10": {
                matches: ["UCL+Champion10(新平条 6+胸前10连冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/5/a/5a0e5ef295a592ff.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation": {
                matches: ["UCL (新平条 7)右袖", "UCL +MSC (新平条 7+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/09/1/d/1d787a4c6498230d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation/BitP": {
                matches: ['UCL +MSC+ bitpanda(新平条 7+左袖/背下广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/08/5/2/52d20942af53baad.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation/MSC": {
                matches: ['UCL +MSC(新平条/7+左袖广告)', 'UCL +MSC+ wefox (新平条 7+左袖广告+背下广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/02/d/5/d572547a520de406.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL7/Foundation/ITA20": {
                matches: ["UCL+Shield(新平条 7+冠军盾)C"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/7/47ca0f471f6a4705.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ7": {
                matches: ["UCL (10/11平条7/欧冠球)", "UCL (09/10平条7/欧冠球)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/02/25/b/5/b57bcc89adf9d046.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/ITA20/Champ7": {
                matches: ["UCL (11/12平条7/欧冠球/三色盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/24/7/8/7830029a8eedee75.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL13/Foundation": {
                matches: ["UCL(新平条 13)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/08/b/9/b92698155edf4d18.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL14/Foundation": {
                matches: ["UCL (新平条/14) 右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/04/1/f/1fa5b65ee38a5ef6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL14/Foundation/FIFA22": {
                matches: ["UCL + CWC 2022 (新平条 14+世俱盾ad上)", 'UCL+CWC2022(新平条 14+世俱盾ad上)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/15/f/f/ff322a3fd6c28376.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL14/Foundation/Hp": {
                matches: ["UCL+ hP (新平条/14+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/31/e/2/e2105c1ea93ceb97.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL14/Foundation/Hp/FinalL24": {
                matches: ["UCL+ hP+ FINAL LONDON 2024 (新平条/14+左袖广告+胸前决赛字)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/06/01/8/b/8b851f7f20fb0a86.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/WIN6": {
                matches: ["UCL(欧冠球+6杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/02/25/9/e/9ed841ca7999ecf7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/WIN9": {
                matches: ["UCL(欧冠球+小9杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/5/6/5637203255247a52.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN13/FIFA17/CAMP18/Respect": {
                matches: ["UCL(2018大耳杯/13杯/世俱2017ad上)", "CUL(平条/13杯/18大耳杯/世俱2017ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/e/4/e44773915c2ccea3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN11/FIFA16/CAMP16/Respect": {
                matches: ["UCL(平条/11杯/16大耳杯/世俱2016ad上)", '2016/17UCL(欧冠16/17组合章)'],
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
                matches: ["UCL(2018大耳杯/13杯/世俱2018ad上)", "CUL(平条/13杯/18大耳杯/世俱2018ad上)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/7/d/7dff0f4f519b3f7f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN5/FIFA15/CAMP15/Respect": {
                matches: ["CUL(平条/5杯/2015大耳杯/世俱2015)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/e/c/ec85cc0bd61251a7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "WIN15/Foundation": {
                matches: ["UCL (新平条/大耳杯15) 右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/3/8371526d80c58eaf.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/ITA20": {
                matches: ["UCL +Shield (欧冠+冠军盾20)", 'UCL +Shield +eb..y (欧冠+三色盾N+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/f/1/f13917a931afeee8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/ITA20": {
                matches: ["UCL+Shield(欧冠+三色盾ad上面)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/01/d/0/d08a197204bdd1db.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "UCL04-05/WIN5": {
                matches: ["CUL 2005/06 liv欧冠章"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/6/469f14e6da79aa68.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL05-06": {
                matches: ["CHAMPIONS 05/06 (卫冕章)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/1/c/1cee82c6cd608ac2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL06-07/WIN7": {
                matches: ["UCL(06/07卫冕章+7杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/30/b/2/b292e85f960db126.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL07-08/FFCWC08": {
                matches: ["FFCWC2008+CHAMPIONS 07/08(卫冕章+2008世俱盾)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/5/c/5c6870a266db57a2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/COPAITA/ITA/Respect": {
                matches: ["UCL +co.pa italia +Shield(欧冠+圆圈ad上+三色盾)", 'UCL+Shield+co.pa italia(欧冠+三色圈+三色盾)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/9/9/9926f6b658a2e980.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/FIFA09/Respect": {
                matches: ["2010/11UCL+FFWC2009(世俱盾+欧冠10/11章)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/a/4/a4016319ad11a7be.webp?x-oss-process=image/quality,q_90/resize,m_lfit,w_1500,h_1500/interlace,0/auto-orient,1"
            },
            "UCL11/FIFA11/Respect": {
                matches: ["UCL Champion2011(平条+卫冕2011+世俱2011)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/b/2/b2d4f49a8bedebc0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Champ5": {
                matches: ["UCL(欧冠球+5杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/d/f/df203a85b36b4e76.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Champ5/Respect": {
                matches: ['UCL(欧冠+5字杯)', "UCL (欧冠+5字杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/5/c/5cd0bc637169cbfb.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ5/FIFA15": {
                matches: ['2015/16 UCL(欧冠/大耳杯10/世俱2014中间)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/5/f/5f6769aaa6d1518a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ7": {
                matches: ["UCL(欧冠+7杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/02/25/f/f/ffb0992b9495c5e3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ9": {
                matches: ["2012/13 UCL(欧冠/大耳9杯)", '2013/14 UCL(欧冠/大耳9杯)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/15/f/0/f0182e0f46da147c.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ10": {
                matches: ["2015/16 UCL(欧冠/大耳杯10)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/11/c/e/ce762892ce4cd430.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Respect/Champ10/FIFA14": {
                matches: ['2015/16 UCL(欧冠/大耳杯10/世俱2014在ad下)'],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/11/2/7/2721c192e33ede32.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ/Foundation": {
                matches: ['UCL (大耳杯/新平条)右袖'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/11/5/9/5988639b06139dac.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ/Foundation/OKX": {
                matches: ['UCL +OKX (大耳杯/新平条+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/24/6/5/65692db704e129e2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ09/Respect/FIFA09": {
                matches: ["UCL Champion2009(平条+卫冕2009+世俱2009)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/a/4/a4d753012f349895.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ10/Foundation": {
                matches: ['UCL(大耳14次杯/新平条)右袖'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/08/0/7/077b499daa2decd8.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ14/Foundation/FIFA22": {
                matches: ["UCL+CWC2022(大耳14/新平条/世俱盾ad上)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/04/13/6/d/6d44677b44d453e4.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ15/Foundation/Hp": {
                matches: ["UCL+ hP (新平条/大耳杯15+左袖广告)", 'UCL+ hP (新平条/大耳杯15+左袖广告'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/06/21/d/3/d32199042ceb17d4.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/11/Respect/WIN9": {
                matches: ["2010/11 UCL(欧冠/小9杯)", '2011/12 UCL(欧冠/小9杯)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/25/0/6/06e0d7351fecd92f.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/FIFA23": {
                matches: ["UCL +OKX+ FCWC 2023 (欧冠+左袖广告+胸前世俱盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/4/8/481145696b74e40a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 06-07/FFCWC08": {
                matches: ["champion..league 06/07+FFCWC2008(双金章+世俱杯2008)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/e/a/ea9ab6132b67f85f.webp?x-oss-process=image/quality,q_90/resize,m_lfit,w_1500,h_1500/interlace,0/auto-orient,1"
            },
            "Premier BARCLAYS 07-08/FFCWC08": {
                matches: ["FFCWC2008+ champion..league 07/08 (双金章+世俱杯2008)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/d/b/dbca2f6ebbcf3f76.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 08-09": {
                matches: ["champion..league 08/09(双金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/a/4/a47bfbd9ed8a8eb4.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 08-09/FFCWC08": {
                matches: ["FFCWC2008+ champion..league 08/09 (双金章+世俱杯2008)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/26/8/0/80e93883165cb309.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            
            // UECL
            "UECL/Foundation": {
                matches: ["UECL(欧会杯)右袖", "UECL(欧会杯45)右袖", "UECL +Revel +Gree(欧会杯+左袖/G胸前广告)"],
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
            "Copa America Campeon 2019": {
                matches: ["CAMPEON 2019 (美洲杯2019冠军盾)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/f/1/f1e340abe180dd2a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America 24/Vibra": {
                matches: ["Copa America 2024(美洲杯o)", "Copa America 2024(美洲杯EL)", "Copa America 2024(美洲杯u)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/17/2/4/249ceb188fa977c5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America Final 24/Vibra": {
                matches: ["EL+FINAL2024(决赛+EL)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/07/18/4/2/4270637269a7ba34.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America Final 24/Vibra/Campeon21": {
                matches: ["Campeon2021+EL+FINAL2024(决赛+EL+2021美洲杯冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/07/18/c/7/c7d372577caa1ea1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America 24/Rocking": {
                matches: ["Copa America 2024(美洲杯THE)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/05/6/8/68ae920f5e3ee341.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America 24/Vibra/Campeon 2021": {
                matches: ["Campeon2021+Copa America 2024(美洲杯EL+2021美洲杯冠)", "Campeon2021+Copa America 2024 (美洲杯EL+2021美洲杯冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/06/26/1/2/129b8f3e3a146192.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America 21/Campeon 2019/CA9": {
                matches: ["2021 COPA AMERICA(美洲杯巴西组合章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/9/e/9e47dfb4f4a4f10a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America Final 21/Campeon 2019/CA9": {
                matches: ["COPA AMEICA 2021 FINAL(决赛巴西组合章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/c/a/caa9d5988eceed01.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Copa America Final 21/CA14": {
                matches: ["COPA AMEICA 2021 FINAL(决赛阿根廷组合章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/7/475317fc224f3e63.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FIFA09": {
                matches: ["FF World Champions2009(胸前世俱盾)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/3/9/392eb21e32eb5a16.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "FIFA15": {
                matches: ["FF World Champions2015(胸前世俱盾)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/24/c/6/c68bccc3a8a5b94e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC1998": {
                matches: ["FIFA WORLD CUP FRANCE 98"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/05/06/d/7/d7e059fe9e09b8ca.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2014 WIN": {
                matches: ["FFWCC2014 (世界杯胸前冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/4/4/44a05dc58450616b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2018 WIN": {
                matches: ["FFWCC2018 (世界杯胸前冠)白色", "FFWCC2018 (世界杯胸前冠)金色"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/6/b/6ba301c843da7d02.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2014 WIN": {
                matches: ["World Champions 2018世界杯胸前金盾"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/01/14/1/e/1e8eabf02c6ce79e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2018": {
                matches: ["FF World Cup 2022世界杯(蓝+白)", "FF World Cup 2022世界杯(蓝+紫)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/3/f/3faae81464cf9002.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2018/Living": {
                matches: ["Russsia FFWC2018(世界杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/09/c/0/c018db4035c71770.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2018/Living/FWC2018 WIN": {
                matches: ["Russsia FFWC2018+FFWCC2018 (胸前冠白色+2018世界杯)", "Russsia FFWC2018+FFWCC2018 (胸前冠金色+2018世界杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/09/9/5/95b34c875579c8c8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2014/FHope/FWC2014 WIN": {
                matches: ["BRASI FFWC+FFWC2014 (胸前冠+2014世界杯)1", "BRASI FFWC+FFWCC2014 (胸前冠+2014世界杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/28/0/5/05cda534c1f2a420.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022 WIN": {
                matches: ["FIFA CWC2022(世俱盾在ad上)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/04/13/1/0/10c9c87ac797901a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022": {
                matches: ["FF World Cup 2022世界杯(蓝+白)", "FF World Cup 2022世界杯(蓝+紫)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/3/f/3faae81464cf9002.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022Q": {
                matches: ["2022 Qualifiers(世预赛)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/01/1/4/1459c8ee7580cc36.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022Q/CACampeon19": {
                matches: ["2022 Qualifiers+Campeon2019(世预赛+2019)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/4/44c64346d146ee95.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022/FWC2018 WIN": {
                matches: ["FF World Cup 2022/Champions(蓝/紫+22胸前金盾)", "F2018+FF2022世界杯(蓝+白+2018胸前杯)", "F2018+FF2022世界杯(蓝+紫+2018胸前杯)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/5/1/5196eb4e0e5634a7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022/FWC2022 WIN": {
                matches: ["FF World Cup 2022/Champions(蓝/白+22胸前金盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/3/d/3d4a1147b3db52b8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022 WIN": {
                matches: ["World WIN2022世界杯胸前金盾", 'World WIN2022世界杯胸前盾', 'World Champions 2022世界杯胸前金盾', 'World Champions 2022世界杯胸前盾'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/13/a/9/a9c3924ea3344430.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "FWC2022 Q/Respect": {
                matches: ["2022 Qualifiers(欧洲区世预赛)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/05/26/3/f/3f5fd15d44803e71.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "UEFA/Respect": {
                matches: ["UEFA (欧联)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/04/16/c/5/c548a0799960861d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation": {
                matches: ["UEFA E L +PAR.+DP..NE +Bou..(欧联+全广告)", "UEFA E L (欧联)右袖", "UEFA E L +RE..LE (欧联45+左袖广告)", "UEFA E L+Expedia(欧联新章+左袖广告)", "UEFA E L (欧联新章)右袖", "UEFA E L +DXC.TE (欧联45+左袖广告)", 'UEFA E L +B2.in (欧联45+左袖广告)', 'UEFA E L(欧联新章)右袖', 'UEFA E L +Hep..est (欧联45+左袖广告)', 'UEFA E L +rel..NS (欧联45+左袖广告)', "UEFA E L (欧联45)", 'UEFA E L(欧联45)右袖', 'UEFA E L (欧联45)右袖', 'UEFA E L+JD(欧联+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/1/f/1fd6025fc863d5c9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/MG": {
                matches: ['UEFA E L +MG(欧联45+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/04/d/a/da34cf21a50a1c77.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/MG/FoundOL": {
                matches: ["UEFA E L +MG +Fondation(欧联45+左袖/背下广告)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/04/e/7/e73beaf27d8c2c2f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/Curacao": {
                matches: ['UEFA E L +CURACAO (欧联45+左袖广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/01/2/1/218ca66cfa25b116.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/AubergeR": {
                matches: ["UEFA E L +Aub..rts (欧联+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/01/6/8/687bc48ad36d5b14.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/Kraken": {
                matches: ["UEFA E L +Kraken (欧联45+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/13/f/7/f73ad38d2e68a2f4.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/DP": {
                matches: ["UEFA E L +DP..pla. (欧联+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/17/8/4/8481647afda2c616.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/MSC": {
                matches: ["UEFA E L+MSC (欧联+左袖广告)", 'UEFA E L +MSC (欧联新章+左袖广告)', 'UEFA E L+MSC+ wefox (欧联+左袖广告+背下广告)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/02/f/a/fa17b456d157df42.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEEL/Foundation/Curacao": {
                matches: ["UEFA E L +CURACAO (欧联新章+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/24/a/9/a940fc96b8eb69c0.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UELW24/Foundation": {
                matches: ["UEL 2024 Winners (欧冠-亚特兰大)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/8/d/8d4a09dbabbd4f43.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UEL24/Foundation/ZondaC": {
                matches: ["UEL 2024 Winners +Zondacrypto(欧冠-亚特兰大+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/16/4/0/40ce6bfaade85e08.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW20": {
                matches: ["2020 UROPEAN CHAMPIONS(冠军胸前杯)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/11/29/c/4/c4dd4a93e272d35d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW20/Respect": {
                matches: ["2020 EFC Badge(欧洲杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/12/9/3/93db60e34306ca91.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW20/Foundation": {
                matches: ["2024 Euro (新平条+右袖欧洲杯2020冠军)", "Euro 2024 Qualifying(欧洲杯预选-意专用)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/06/15/0/3/034924e28bdb4d88.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW24": {
                matches: ["Euro Champions2024(欧洲杯胸前冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/04/d/1/d1802a431d5ef363.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EURO24/Foundation": {
                matches: ["Euro 2024(欧洲杯)", "Euro 2024 Qualifying(欧洲杯预选)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/c/2/c2691dd7c0551a82.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UENL/Foundation": {
                matches: ["UEFA NATIONS LEAGUE(欧国联章)", "UEFA NATIONS LEAGUE (欧国联章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/d/0/d0ea0f5dbb710229.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UENL/Foundation/Champ20": {
                matches: ["UEFA NATIONS LEAGUE(欧国联+18世界杯金盾)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/b/e/be6b42b5f230adf3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UENLW21/Foundation/FIFA18": {
                matches: ["UEFA N L+2020 CHAMPIONS(欧国联+冠军胸前杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/11/29/5/7/57c0a43a62ff5c5d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EURO24/Foundation/UENL23": {
                matches: ["Euro 2024+ WINNER2023 (欧洲杯+欧国联胸前冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/27/d/6/d65bde0230b37848.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "EUROW24/UENL23/Foundation": {
                matches: ["UEFA NL Winner2023+Euro Champions2024(欧国联班牙组合)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/04/7/8/788aa785f9d8da15.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "CAF": {
                matches: ["AFCON 2023(非洲杯)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/01/31/8/8/8889da1e5c5f5179.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Africa Champ 2021": {
                matches: ["CHAMPIONS 2021非洲杯右胸前盾"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/01/31/1/a/1a4a657f4ab0bd6f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Africa Champ 2021/CAF": {
                matches: ["21Champions+AFCON 2023(非洲杯+右胸前盾)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/01/31/1/9/1938f5ed37f7c5fa.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },

            // COPAS EQUIPOS
            "Carabao Cup": {
                matches: ["Carabao Cup +DXC.TE  (英联赛杯+左袖广告)" , "Carabao Cup +DXC.TE (英联赛杯+左袖广告)" , "Carabao Cup +VISIT..DA  (英联赛杯+左袖广告)" , "Carabao Cup +VISIT..DA (英联赛杯+左袖广告)" , "Carabao Cup +Ka..m (英联赛杯+左袖广告)" , "Carabao Cup +JD (英联赛杯+左袖广告)" , "Carabao Cup +TR..ON (英联赛杯+左袖广告)" , "Carabao Cup +OKX  (英联赛杯+左袖广告)" , "Carabao Cup +De..LT (英联赛杯+左袖广告)", 'Carabao Cup +ki..ee (英联赛杯+左袖广告)', 'Carabao Cup +HA..M (英联赛杯+左袖广告)', 'Carabao Cup +HA..M(英联赛杯+左袖广告)', 'Carabao Cup +We..ds  (英联赛杯+左袖广告)', 'Carabao Cup +qb (英联赛杯+左袖广告)', 'Carabao Cup +ld..en (英联赛杯+左袖广告)', 'Carabao Cup +We..ds (英联赛杯+左袖广告)', 'Carabao Cup +SA..ON (英联赛杯+左袖广告)', 'Carabao Cup +Expedia (英联赛杯+左袖广告)', 'Carabao Cup +OKX (英联赛杯+左袖广告)', "Carabao Cup (英联赛杯)右袖", 'Carabao Cup +noon (英联赛杯+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/8/0/802bde86a7dfd67c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Emirates Fa Cup": {
                matches: ["FA CUP (英足总杯7次)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/01/20/0/d/0dace85815f57c22.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Emirates Fa Cup/Final": {
                matches: ["FA Cup12+FA CUP FINAL..2024 (金色决赛字+足总杯12)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/30/b/f/bf417b37677c857d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // Europa Leagues
            // > LaLiga
            "LALIGA": {
                matches: ["La Liga (西甲章)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/8/a/8ad19d0b18bace89.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA/21-22": {
                matches: ["La Liga+21/22(普章/金章)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/6/f/6f5e133f2fa03f9e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA/21-22/FIFA22": {
                matches: ["La Liga+21/22+CWC2022(普章/金章/世俱盾ad上)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/04/13/c/f/cfc38c6b539b4808.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA22": {
                matches: ["La Liga(普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/1/0/1060adc7e3313ae5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA34": {
                matches: ["La Liga (34西甲章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/04/4/9/49dac8d237301b7a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA34/HP": {
                matches: ["La Liga +hp (西甲章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/31/6/6/66092a9d024b4102.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA34/FIFA22": {
                matches: ["La Liga + CWC2022 (西甲34/世俱盾ad上)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/15/0/a/0a292c6600d69c00.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA45": {
                matches: ["La Liga +D.GI (45西甲章+左袖广告)" , "La Liga +Va..ne (45西甲章+左袖广告)" , "La Liga +CE..NG (45西甲章+左袖广告)" , "La Liga +Revel +Gree(西甲章+左袖/G胸前广告)" , "La Liga + Revel (45西甲章+左袖广告)" , "La Liga +di..na (45西甲章+左袖广告)", "La Liga +B2.in (45西甲章+左袖广告)", 'La Liga +EB..ay (45西甲章+左袖广告)', 'La Liga +RE..LE (45西甲章+左袖广告)', 'La Liga +ma..ga (45西甲章+左袖广告)', 'La Liga +ME..ZA (45西甲章+左袖广告)', 'La Liga +IN.gia (45西甲章+左袖广告)', 'La Liga +GC.S(45西甲章+左袖广告)', 'La Liga +ca..va (45西甲章+左袖广告)', 'La Liga +IN.gia(45西甲章+左袖广告)', 'La Liga +OK.ty (45西甲章+左袖广告)', 'La Liga +B2.NPA (45西甲章+左袖广告)', 'La Liga +AMB..tv (45西甲章+左袖广告)', 'La Liga +MGS.. (45西甲章+左袖广告)', 'La Liga +CA..DA (45西甲章+左袖广告)', "La Liga (45西甲章)", 'La Liga +MGS.os(45西甲章+左袖广告)','La Liga +JD (45西甲章+左袖广告)',  'La Liga +Kalise (45西甲章+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/f/6fcf280ecb88c188.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA45/Kraken": {
                matches: ["La Liga +Kraken (45西甲章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/04/4/a/4ad41acb7958eb36.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA45/Kraken/HYU": {
                matches: ["La Liga +Kraken +HYU.. (45西甲+左袖广告+背下现代)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/04/3/1/312bf552894714fd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA/3": {
                matches: ["LFP+3(西甲+左袖3)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/7/5/75cc3bec73642a1e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA23": {
                matches: ["La Liga +22/23champion (34西甲+红标冠军)", "La Liga +22/23 +AMB..tv (34西甲+红标冠军+左袖广告)", "La Liga +23/24C (红冠军+45西甲)右袖", "LLiga +22/23champion (34西甲+红标冠军)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/8/686e84c18c0004f3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LALIGA23/HP": {
                matches: ["La Liga +23/24C +hp (红冠军/45西甲+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/07/22/1/d/1de211023d301cb1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LaLiga45/Kalise/IslasC": {
                matches: ["La Liga +Kalise +ISLas. (45西甲章+左袖广告+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/11/f/7/f7b56708a8a072b2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LFP/3/FIFA11": {
                matches: ["LFP+3+FFWC2011 (西甲+左袖3+世俱盾2011)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/2/2/224e9e3fb5cb2a33.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LFP/3/FIFA09": {
                matches: ["LFP+3+FFWC2009 (西甲+左袖3+世俱盾2009)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/9/0/9014b6be828872d7.webp?x-oss-process=image/quality,q_90/resize,m_lfit,w_1500,h_1500/interlace,0/auto-orient,1"
            },


            // > Bundersliga
            "BUN": {
                matches: ["Bundesliga Black (黑色章)", "Bundesliga +GLS (黑德甲+左袖广告)", "Bundesliga +GLS (德普章+左袖广告)", "Bundesliga +GLS (黑色章+左袖广告)", 'Bundesliga +Hep..est (德普章+左袖广告)', 'Bundesliga +rel..NS (德普章+左袖广告)', 'Bundesliga +ih..ar (德普章+左袖广告)', "Bundesliga (德普章)", 'Bundesliga (德甲普章)', 'Bundesliga(普章)', 'Bundesliga +Sonepar (德普章+左袖广告)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/31/8/b/8bdf7dd2865f6383.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN WIN22-23/ROGERA": {
                matches: ["Champions 22/23+ RO.GE.RA.(金章+左袖RO广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/10/07/4/1/41b5d6e3ef67c66e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN WIN23-24 ": {
                matches: ["Bundesliga Champ23/24(德金章)", "Bundesliga Champions 22/23(德甲金章)", "Bundesliga Champions 22/23 (德甲金章)", 'Bundesliga Champ23/24 (德金章)', 'Bundesliga Champions 23/24(德甲金章)'],
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
            "BUN/Allianz": {
                matches: ["Bundesliga +Allianz (德普章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/20/5/0/504f947d98429743.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN10": {
                matches: ["Bundesliga10(金章10)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/0/4/043ea5217b0fdcb5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "BUN10/Champ10": {
                matches: ["Bundesliga10+Champion10(金章10/胸前10连冠)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/6/b/6bb3f5775a770ab7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Champ10": {
                matches: ["Champion10(胸前10连冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/6/0/609a7b35aa4a3c8f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // > Premier
            "Premier": {
                matches: ["Pre L +De..LT  (34英超+左袖广告)", "Pre L +JD (34英超+左袖广告)", "Pre L +Ka..m (34英超+左袖广告)", "Pre L (34英超)", "Pre L + VISIT..DA (34英超+左袖广告)", "Pre L +DXC.TE (34英超+左袖广告)", "Pre L+VISIT..DA (34英超+左袖广告)", "Pre L+Expedia (34英超+左袖广告)", 'Pre L + ki..ee (34英超+左袖广告)', 'Pre L +HA..M (34英超+左袖广告)', 'Pre L + qb (34英超+左袖广告)', 'Pre L +ld..en (34英超+左袖广告)', 'Pre L + We..ds (34英超+左袖广告)', 'Pre L +SA..ON (34英超+左袖广告)', 'Pre L + Expedia (34英超+左袖广告)', 'Pre L/Expedia (34英超+左袖广告)', 'Pre L +De..LT (34英超+左袖广告)', 'Pre L +TR..ON (34英超+左袖广告)', 'Pre L +noon (34英超+左袖广告)', "Premier League (34英超普)", "Pre L +NO.or (34英超/章下字)", "Premier league (34英超普)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/6/b/6b8aa0557f64e822.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier v2": {
                matches: ["Premier league(普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/7/c/7cb682f4ea32d795.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier v2/NoRac": {
                matches: ["PrL+NO..for(普章+章下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/9/b/9b18bc8a6dbc71e8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier v2/NoRac/Flor": {
                matches: ["PrL+NO..for(普章+章下广告+胸前红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/c/0/c0e4dc08c314eaf9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/Kohler": {
                matches: ["Premier league+ KOHLER(普章+左袖子广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/5/5/5569bf90f755f025.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac": {
                matches: ["Pre L +NO.or+ De..LT  (34英超/章下字+左袖广告)", "Pre L +NO.or+ JD (34英超/章下字+左袖广告)", "Pre L +NO.or+ Ka..m ( 34英超/章下字+左袖广告)", "Pre L +NO.or+ VISIT..DA (34英超/章下字+左袖广告)", "Pre L +NO.or+ DXC.TE (34英超/章下字+左袖广告)", "Pre L+NO.or+VISIT..DA(34英超/章下字+左袖广告)", "Pre L +NO.or+ DXC.TE ( 34英超/章下字+左袖广告)", "Pre L+NO.or+Expedia(34英超/章下字+左袖广告)", "Pre L +NO..for (34英超普+章下字)", 'Pre L +NO.or+ ki..ee (34英超/章下字+左袖广告)', 'Pre L +NO.or+ HA..M ( 34英超/章下字+左袖广告)', 'Pre L +NO.or+ qb (34英超/章下字+左袖广告)', 'Pre L +NO.or+ ld..en (34英超/章下字+左袖广告)', 'Pre L +NO.or+ We..ds (34英超/章下字+左袖广告)', 'Pre L +NO.or+ SA..ON ( 34英超/章下字+左袖广告)', 'Pre L + NO..for (34英超普+章下字)', 'Pre L +NO.or+ Expedia (34英超/章下字+左袖广告)', 'Pre L +NO.or+ De..LT (34英超/章下字+左袖广告)', 'Pre L +NO.or+ TR..ON (34英超/章下字+左袖广告)', "Pre L/NO..for (34英超普+章下字)", 'Pre L +NO.or+ noon ( 34英超/章下字+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/8/2849daa0df6783ca.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Flor": {
                matches: ["Pre L +NO.or+ TR..ON+ Flower (英超/章下字+左袖广告+红花)", "Pre L +NO.or+ JD+ Flower (英超/章下字+左袖广告+红花)", "Pre L +NO.or+ Ka..m+ Flower (英超/章下字+左袖广告+红花)", "Pre L +NO.or+ VISIT..DA+ Flower (英超/章下字+左袖广告+红花)", "Pre L +NO.or+ DXC.TE+ Flower ( 英超/章下字+左袖广告+红花)", "Pre L +NO.or+ DXC.TE+ Flower (英超/章下字+左袖广告+红花)", "Pre L +NO.or+ Expedia+ Flower (英超/章下字+左袖广告)+红花", "Pre L + NO..for +Flower(34英超普/章下字)+红花", 'Pre L +NO.or+ ki..ee+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ HA..M+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ qb+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ ld..en+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ We..ds+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ SA..ON+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ De..LT + Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ Expedia+ Flower (34英超/章下字+左袖广告)+红花', 'Pre L +NO.or+ De..LT/Flower (英超/章下字+左袖广告+红花)', "Pre L +NO.or+ Flower (英超/章下字+红花)", 'Pre L +NO.or+ Flower (英超/章下字+左袖广告+红花)', 'Pre L +NO.or+ noon+ Flower (英超/章下字+左袖广告+红花)'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/f/2f8a92a783fee35e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Fever": {
                matches: ["Pre L +NO..for +fever (英超普/章下字+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/1/21432e05db504c25.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Kraken": {
                matches: ["Pre L + NO..for +Kraken (英超普/章下字+左袖广告)", "Pre L + NO..for  +Kraken (英超普/章下字+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/13/2/1/214c53c55078ff4c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Kraken/Flor": {
                matches: ["Pre L +NO.or +Kraken +Flower (英超/章下字+左袖广告+红花)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/13/2/7/27a861e1fd970613.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier/NoRac/Fever/Flor": {
                matches: ["Pre L +NO.or+ fever +Flower (英超/章下字+左袖广告+红花)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/0/7/0723db2ac74426ed.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
                matches: ["Pre L Champions+NO.or.(34英金章+章下字)", "Pre L Champions + NO.or. (34英金章+章下字)", 'Pre L C +NO.or. +OKX (英金章/章下字+左袖广告)', "Pre L C +NO.or. (英金章/章下字)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/3/4/34df7ab224c753df.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/NoRac/OKX": {
                matches: ["Pre L Champions +NO.or. +OKX (34英金章/章下字+左袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/08/24/f/a/fad651e12df80460.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/FIFA23": {
                matches: ["Pre L C +FCWC 2023 (胸前世俱盾+34英金章)", "Pre L C+ FCWC 2023(胸前世俱盾+34英金章)", "Pre L C +NO.or. (英金章/章下字)", 'Pre L C+OKX+ FCWC 2023(胸前世俱盾+34英金章+左袖广告)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/2/a/2ac6481315eaaec0.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Gold/NoRac/FIFA23": {
                matches: ["Pre L C +NO.or. +FCWC 2023 (英金章/章下字+胸前世俱盾 )", 'Pre L C +NO.or. +OKX+ FCWC 2023 (英金章/章下字+左袖广告+胸前世俱盾 )'],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/02/f/1/f18cc9bfa54f604c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Champions 21-22": {
                matches: ["Champlons 2021/22(联赛冠军章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/b/f/bfe011a0ec0547f5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Champions 21-22/NoRac": {
                matches: ["Champlons 21/22+NO..for(金章/章下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/7/2/7258f2ce8d469474.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier Champions 21-22/NoRac/Flor": {
                matches: ["Champlons 21/22+NO..for(金章/章下广告+胸前红花)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/0/e/0e694d5b84c51769.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "Premier 2000/01": {
                matches: ["Champions Premier 2000/2001(双金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/21/c/f/cfe9d53a018d262d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 06/07": {
                matches: ["champion premier league 06/07(双金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/f/4f61da4eb2c2e780.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 12/13": {
                matches: ["CHAMPIONS 12/13(双袖联赛金章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/28/0/e/0e9f366d1d159d1d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Premier BARCLAYS 13/14": {
                matches: ["Pre League 13/14 Double(双英超章)印左右"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/05/8/4/84dc343da694782e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            


            // > SerieA
            "SerieA/Enilive": {
                matches: ["Serie A (意甲45)", "Serie A(意甲45)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/4/6/462e2dd4ce4860bd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/TIM": {
                matches: ["Serie A(普章)", "Serie A (普章)", "Serie A +Shield +eb..y (普章+三色盾N+左袖广告)", "Serie A +co.pa italia +eb.y (普章+三色圈+左袖广告)", "Serie A"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/04/14/9/e/9e755066a6f362db.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA21/TIM": {
                matches: ["21-22 Serie A(普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/20/6/9/69860f9a4292ec17.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/TIM/COPAITA": {
                matches: ["Serie A +co.pa italia(普章+意杯冠军)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/d/0/d0b4f7a26a33d834.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/TIM/MSC": {
                matches: ["Serie A +MSC (普章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/02/a/3/a3a1d2cf15ed4a76.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/TIM/MSC/Wefox": {
                matches: ["Serie A +MSC+ wefox (普章+左袖广告+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/06/3/6/36a5699654b09a9a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/TIM/COPAITA/Upower": {
                matches: ["Serie A +co.pa italia +eb.y +U-Power (普章+三色圈+左袖/背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/10/07/a/0/a0b09544982bd8d7.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITA": {
                matches: ["Shield(冠军盾)C"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/c/5/c57b09fc9884fa68.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITA20": {
                matches: ["Shield (冠军盾20)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/16/6/5/65db16ccbf52eaba.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAJUV": {
                matches: ["Shield (三色盾ad上面)", "Shield(三色盾ad上面)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/13/5/5/551baa3a568261dd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAINT": {
                matches: ["Shield(int冠军盾NK上)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/04/15/7/a/7a4a333864caa68f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/ITA": {
                matches: ["Serie A+Shield(普章/冠军盾)C"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/7/f/7fb6c433fea5deba.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "SerieA/Enilive/ITA20/U-Power": {
                matches: ["Serie A +Shield +U-Power (意甲45+冠军盾20+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/7/1/71d09e0910805b3e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/ITA20/Cygames": {
                matches: ["Serie A +co.pa italia +CYgames(意甲45+J三色圈ad上+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/13/9/e/9e167660a74e734b.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/ITA20/Gate.io/U-Power": {
                matches: ["Serie A +Shield +Gate.io +U-Power (意甲+冠军盾20+左袖/背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/e/6/e6d5c7f35d86233d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive": {
                matches: ["Serie A +MSC (意甲45+左袖广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/9/e/9e16d1aec42615d8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/COPAITA": {
                matches: ["Serie A +co.pa italia (意甲45+J三色圈ad上)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/13/0/c/0ca412c0f41a8d52.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/Milan": {
                matches: ["Serie A +MSC+ MILAN(意甲45+左袖广告+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/20/b/a/baa55b61af4ca93c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/Bitpanda": {
                matches: ["Serie A +MSC+ bitpanda(意甲45+左袖/背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/03/08/5/0/500b3103d3be51d1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/Enilive/Auberge": {
                matches: ["Serie A +Aub..rts (意甲+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/01/4/b/4b08f0834648b5e1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "SerieA/ZondaC": {
                matches: ["Serie A +Zondacrypto(意甲+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/10/c/5/c5d4402a7db9ce28.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "COPAITA/ITA": {
                matches: ["co.pa italia+Shield (圆圈ad上+三色盾)", 'Shield+co.pa italia(三色圈+三色盾)'],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/13/d/6/d6c282da513bf5fb.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "UCL/Foundation/COPAITA": {
                matches: ['UCL+co.pa italia(欧冠新章+意杯冠军)', 'UCL +co.pa italia +eb.y +U-Power (欧冠+三色圈+左袖/背下广告)', 'UCL +co.pa italia +eb.y (欧冠+三色圈+左袖广告)', "UCL +co.pa italia(欧冠新章+J三色圈ad上)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/2/42870559c0bba37e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },


            // > Ligue1
            "Ligue1": {
                matches: ["Ligue1(普章)", "Ligue1 (普章)新", "Ligue1 +PAR.+DP..NE +Bou.. (普章+全广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/14/b/1/b109de3712cc42ce.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1/DP": {
                matches: ["Ligue1 +DP..pla. (普章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/17/e/a/eadbdf7835d9b6ae.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1 Champion": {
                matches: ["LIGUE1 CHAMPION 2022(法甲冠军章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/1/a/1ab88626e8f370b2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1 Champion/GOAT": {
                matches: ["LIGUE1 CHAMPION 2023 +GOAT (法甲冠军+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/12/11/0/c/0cd7ecd194ddc158.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M": {
                matches: ["Ligue1 +PA.T+DP.+Rbo.ger(45法甲黑+印3处广告)", "Ligue1 (45法甲黑)", 'Ligue1+JD(45法甲黑+左袖广告)', "Ligue1 +Print AD*(45法甲黑+带全广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/29/9/5/953477b403a87710.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M/MG": {
                matches: ["Ligue1 +MG(45法甲黑+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/04/3/3/33be92d1737e7ccc.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M/MG/Aush": {
                matches: ["Ligue1 +MG +AUSHOPPING (45法甲+左袖/后上广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/04/a/0/a00e6a8b9554f8ac.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M/Sponsor": {
                matches: ["Ligue1 +PA.S.t+DP.+bo.r (45法甲+三处广告)"],
                type: "badge",
                price: 4,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/29/8/7/8779b68c6d49d6e2.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M WIN24": {
                matches: ["L1 CHAMPION 2024(法甲冠)右袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/25/d/6/d6c1bf9be9eca317.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Ligue1M WIN24/Snipes": {
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
                matches: ["libertadores 1(解放者/新1次)", 'libertadores 1 (解放者/新1次)', "libertadores 1 +ASSISt CARD(解放者/新1次++背上广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/17/e/f/ef98a46bd6909c49.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW1/Campeon23": {
                matches: ["libertadores 1+Campeon 2023 (解放者/新1次+解放者胸前冠)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/19/c/2/c2a1e261974125ac.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIBCampeon23": {
                matches: ["Campeon 2023 解放者胸前冠"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/04/2/3/2360911c468d15b6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIBCampeon23/Brasilerao": {
                matches: ["Campeon 2023 +Brasileirao A2024(巴甲+解放者胸前冠)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/29/0/5/05d315fa67b3921e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "LIB/LIBW4": {
                matches: ["libertadores 4(解放者/新4次)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/04/25/0/8/082e0353c9ca4606.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW4/DIRECTV": {
                matches: ["libertadores 4 +DIRECTV (解放者/4+背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/07/2/5/255bd4cb1627ec47.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LIB/LIBW5": {
                matches: ["libertadores 5(解放者/新5次)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/06/01/d/2/d2d5a060239ad2b8.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LPF": {
                matches: ["LPF(阿甲普章)", 'LPF (阿甲普章)', "LPF(21阿根廷甲普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/f/c/fc7e015592193618.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "LPF/DIRECTV": {
                matches: ["LPF +DIRECTV (阿甲普章+背下广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/05/07/4/b/4bd9f6dbf13e785d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAU": {
                matches: ["itau.No.pel(25智联)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/27/8/8/88a5cd45fcad50ff.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "ITAU C": {
                matches: ["Campeonato itau +ASSISt CARD (24智联赛+背上广告)", 'Campeonato itau (24智联赛右章)', 'Campeonato itau (24智联赛)', "WINato itau (24智联赛)", 'WINato itau (24智联赛右章)'],
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
                matches: ["LIGA MX(墨西哥超)右袖", "LIGA MX(墨西超)右袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/11/10/e/6/e6999f9820771981.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Liga MX Champ": {
                matches: ["LIGA MX CAMPEON A23 (墨超冠)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/15/3/3/3397b797577ca26a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "RSL45/NOUG": {
                matches: ["RSL+NOUG(45沙特联+右袖蓝广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/13/1/7/1722b2e21e688ff9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "MLS": {
                matches: ["MLS(专用色章)印左袖"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/06/11/4/f/4f941e787233827f.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV": {
                matches: ["MLS /TV (专用色/章下红TV)印左袖" ,"MLS /TV (专用色/章下白TV)印左袖" ,"MLS /TV (专用色/章下粉TV)印左袖" ,"MLS /TV (专用色/章下黑TV)印左袖" ,"MLS +TV (专用色+章下粉TV)印左袖" ,"MLS +TV (专用色+章下黑TV)印左袖", "MLS /TV (25专用色/黑TV)印左袖", "MLS /TV (25专用色/粉TV)印左袖"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/21/1/2/12df41cd2acc0cbd.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "MLS/Apple TV/Fracht": {
                matches: ["MLS /TV +Fra. GR. (25专用色/粉TV+右袖广告)", "MLS /TV  +Fra. GR. (专用色/章下白TV+右袖广告)" ,"MLS /TV  +Fra. GR. (专用色/章下粉TV+右袖广告)" ,"MLS /TV  +Fra. GR. (专用色/章下黑TV+右袖广告)" ,"MLS /TV +Fra. GR. (专用色/章下粉TV+右袖广告)" ,"MLS /TV +Fra. GR. (专用色/章下黑TV+右袖广告)" ,"MLS /TV +Fra. GR. (专用色/章下白TV+右袖广告)", "MLS /TV +Fra. GR. (25专用色/黑TV+右袖广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/26/3/0/30d5a6db1c26bd4a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Con Sponsor": {
                matches: ["Print Sponsor (印9处广告)"],
                type: "badge",
                price: 0,
                images: "https://us03-imgcdn.ymcart.com/97006/2025/02/20/8/f/8fadf639b19709a5.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Con Sponsor v3": {
                matches: ["PA.S.t+DP.+bo.r (三处广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/29/4/b/4b57c31cbd736eb6.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "Eredivisie": {
                matches: ["Eredivisie (荷甲普章)", 'Eredivisie(荷甲普章)'],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/13/0/2/02d9847da5883f81.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Eredivisie/TOTO": {
                matches: ["Eredivisie +TOTO (荷甲普章+左袖广告)", "Eredivisie +TOTO (荷甲金章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/10/03/2/a/2ae3412d012b800d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Eredivisie/Curacao": {
                matches: ["Eredivisie +CURACAO (荷甲普章+左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/01/3/f/3f853f8241295a9a.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Eredivisie/Curacao/Ziggo": {
                matches: ["Eredivisie +CURACAO +ZI.O SP.T (普章+左袖/背下广告)"],
                type: "badge",
                price: 3,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/09/01/1/c/1cf02ad1ba47ca0d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "Campeao 2021": {
                matches: ["CAMPEAO 2021 巴甲冠军胸前杯"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/3/6/3657724f1f6d4d18.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Campeao 2023": {
                matches: ["CAMPEAO 2023 胸前联赛冠军", "CAMPEAO 2023 联赛胸前冠"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/31/2/c/2cea57eec15658c1.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Brasilerao23": {
                matches: ["BRASI..ASSAI 2023 巴甲"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/06/18/2/c/2cb8036692dae59d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Brasilerao/Campeao23": {
                matches: ["CAMPEAO 2023 +Brasileirao A2024(巴甲+联赛胸前冠)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/31/4/f/4f08be203663bf7e.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Liga Portugal bwin/Campeao": {
                matches: ["Portugal+Campeao(葡超章+22/23胸前杯)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/0/5/05f0a96fca349bf9.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
            "Premiership Champs": {
                matches: ["SPFL CHAMPIONS (45苏超冠军)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/30/1/6/16187f44a8c6ef88.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Cinch Premiership": {
                matches: ["SPEL(苏超新章)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/03/26/2/8/2816a4ec56d17d2d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "HP": {
                matches: ["HP (左袖广告)"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/08/16/a/1/a1d24e209d79b87c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "DP": {
                matches: ["DP..pla.(左袖广告)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/09/17/8/4/84fc7f1d2e6e2c4d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Anime 2022": {
                matches: ["Anime badge 2022世界杯动漫植绒"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2023/03/25/4/d/4d77db5ce058963d.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
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
                matches: ["No Name NO Number", "No Name NoNumber", "No Badge", 'No Nam No Number', "No Name No Number", "No Name Number", "No Name No Nubmer"],
                type: "customize",
                price: 0
            },
            "Con dorsal": {
                matches: [
                        "Name/ Number (带 Dortmund名在号下)", "Name/ Number (Dortmund 上带广告-名在号下)", "Name/ Number ('上印DORTMUND‘)名在号下", "Name / Number (Dragon Font)龙年字体",
                        "Name / Number (欧冠字体)", "Name / Number (没广告名在号上)", "Name/ Number (只印后面) 银灰色字", "Name/ Number (只印后面)", "Name/ Number (名在号下)专用字体", "Name / Number (白色-名在号下)", "Name / Number (前小号印中间)", "Name / Number (名号广告色一至)", "Name / Number (Name On Number)名在号上", "Name / Number (Name Under Number)名在号下", "Name / Number (24/25ad绿) 只印后面", "Name / Number (24/25ad白) 只印后面", "Name / Number (24/25ad绿)上衣只印后面", "Name / Number (24/25ad白)上衣只印后面", "Name / Number (24/25ad蓝)上衣只印后面", "Name / Number (23/24主场字)", "Name / Number (24/25黑色ad)", "Name / Number (24/25ad白字)只印后面", "Name / Number (24/25ad黑字)", "Name / Number (24/25AD白字体)", "Name / Number (24/25AD蓝字体)", "Name / Number (24/25AD字体)", "Name / Number (24/25ad黄色)", "Name / Number (24/25ad红字)", "Name/ Number (没广告-名在号上)", "Name / Number (不印前小号)", "Name / Number (24/25主场字)", "Name / Number (24/25金色ad字)", "Name / Number (24/25金ad字)", "Name / Number (主场字)", "Name / Number (专用)", "Name / Number (前小号中间)", "Name / Number (白色前小号NK下)", "Name / Number (22/23ad白字)", "Name / Number (22/23ad黑字)", "Name / Number (前小号右标下)", "Name / Number (只印后面)22/23主场", "Name / Number (只印后面-客场黄字)", "Name / Number (24/25主场字) 只印后面", "Name / Number(黑衣标专用字)", "Name/ Number(名在号下)", "Name / Number (22/23ad黄色字)", "Name / Number (22-23ad黑字)", "Name / Number (22-23ad白字)", "Name / Number (只印背后)", "Name / Number (22/23 主场字体)只印背后", "Name / Number (20/21主场字体只印后面)", "Name / Number (前白后蓝)", "Name / Number (名在号上)主场字体", "Name/ Number (专用字体)", "Name/ NumberName / Number (League Fonts 07/08联赛字体)", "Name / NumberName / Number (League Fonts 07/08联赛字体)", "Name / Number (金色联赛字)", 
                        'Name / Number (Name Under Number)名在号下面', 'Name / Number (24/25红ad)', 'Name / Number (24/25绿ad)', 'Name / Number (周年蓝色字)', 'Name / Number (ad白字)', 'Name / Number (Holstein Kiel) (上带广告-名在号下)', 'Name / Number (只印后面ad红)', "Name / Number (24/25白ad)只印后面", "Name / Number (名与号在框内)", "Name / Number (24/25黑ad)只印后面", "Name / Number (名在号上-没广告)", "Name / Number (周年蓝色字)", 'Name /Number', "Name / Number (24/25ad白)只印后面", "Name / Number (24/25ad粉)", "Name / Number (24/25ad黑字)只印后面", "Name / Number (24/25ad)", 'Name / Number (24/25ad金)', 'Name / Number (名在a广告底下)', 'Name / Number (1.FC Magdeburg)(上带广告-名在号下)', 'Name / Number (24/25ad黑)', 'Name / Number (周年字体)', 'Name / Number (Frankfurt) (上带广告-名在号下)', 'Name / Number (24/25白色ad)', 'Name / Number (前小号NK下)', "Name / Number", "Name/ Number", "Name / Numbe", "Name/ Number (名在号下)", "Name / Number (24/25ad黑)只印后面", "Name / Number (专用周年标)", "Name / Number (只印后面)", "Name / Number (24/25ad红)", "Name / Number (名在号下)", "Name / Number (名在号上)", "Name / Number (FC Augsburg) (上带广告-名在号下)", "Name / Number (Mainz 05) (上带广告-名在号下)", "Name / Number (专用字体)", "Name / Number (只印后台)", "Name / Number (24/25黑ad)", "Name / Number (没广告-名在号上)", "Name / Number (24/25蓝ad)", "Name / Number (24/25白ad)", "Name / Number (没广告-名在号下)", "Name / Number (FC BAY.. MUN..)(带广告-名在号下)", "Name / Number (WERDER) (上带广告-名在号下)", "Name / Number (24/25ad蓝) 只印后面", "Name / Number (专用字体)前小号在PM下", "Name/ Number (RB Leipzig)(上带广告-名在号下)", "Name / Number (24/25ad白)", 'Name/Number'],
                type: "customize",
                price: 3
            },
            "Con dorsal (solo numero)": {
                matches: ["Numbe", "Number ( No Name)", 'Number', "Number (No Name)", "Number (no name)", "Customized Number (NO Name)", "Number (NO Name)", "Name / Number (No Name)", "Number (No Name) (前后都印号)"],
                type: "customize",
                price: 3
            },
            "Con dorsal v2": {
                matches: ['Name / Number (Joint Edition Fonts)特别版字体', 'Name / Number (英文名-龙年号)', 'Name/ Number (HOFFENHEIM)(下带广告-名在号上)', 'Name/ Number (Heidenheim)(上带广告-名在号下)', 'Name / Number (Wolfsburg) (上带广告-名在号下)', 'Name/ Number (Frankfurt)(上带广告-名在号下)', 'Name / Number (Schalke04)(上带广告-名在号下)', 'Name / Number (SC Freiburg) (上带广告-名在号下)', 'Name / Number (Schalke04)(联赛号-名在号下)', 'Name / Number (1.FC Köln)(名在号上-广告在下)专用字体', 'Name / Number (Kaiserslautern) (名在号上-下带广告)', 'Name / Number (BAYER 04)(上带广告-名在号下)', "Name / Number (Bochum)(上带广告-名在号下)", "Name / Number (1.FC Köln)(名在号上-广告在下)", "Name/ Number (Stuttgart) (上带广告-名在号下)", "Name / Number (SAFI CiMENTO) (上带广告-名在号下)", "Name/ Number (Hamburger SV)(上带广告-名在号下)", "Name / Number (Hertha BSC)(上带广告-名在号下)"],
                type: "customize",
                price: 4
            },
            

            // Fonts primarios
            "Con dorsal UCL fonts": {
                matches: ["Name / Number (UCL Fonts) 皇马欧冠金字", "Name / Number(UCL Fonts) 欧冠", "Name / Number(UCL Fonts)欧冠字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal UCL fonts v2": {
                matches: ["Name / Number ( UCL Fonts )欧冠字体", "Name / Number (UCL Fonts 07/08欧冠字体)", "Name / Number (UCL Fonts )欧冠字体", "Name / Number (UCL Fonts) 欧冠主场字", "Name / Number (UCL Fonts) 欧冠白字", "Name / Number (UCL Fonts) 欧冠红字", "Name / Number (UCL Fonts)欧冠黑字", "Name / Number (UCL Fonts)欧冠白字", "Name / Number (UCL Fonts) 欧冠白色字", "Name / Number(UCL Fonts)欧冠球员字", "Name / Number(UCL Fonts)(欧冠字体)", "Name / Number(UCL Fonts) 欧冠字体", "Name / Number (UCL Fonts) 欧冠主场", "Name / Number (UCL Fonts) 欧冠白字体", 'Name / Number (UCL Fonts) 欧冠三客字', 'Name / Number (UCL Fonts) 欧冠', 'Name / Number (UCL Fonts) 欧冠客场字', "Name / Number (UCL Fonts) 欧冠字体", "Name / Number (UCL Fonts)欧冠字体", "Name / Number (UCL Fonts)(名在号上)杯赛字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal PremierLeague fonts": {
                matches: ["Name / Number (Premier League Fonts )联赛字体", "Name / Number(Premier League Fonts)联赛字体", "Name / Number (Premier League Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal LaLiga fonts": {
                matches: ['Name / Number (LaLiga Fonts)联赛字体', "Name / Number (La Liga Fonts) 联赛带吼", "Name / Number (La Liga Fonts)联赛字体", "Name / Number (La Liga Fonts) 联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal SerieA fonts": {
                matches: ["Name / Number (Serie A Fonts)联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Ligue1 fonts": {
                matches: ['Name / Number (La Liga Fonts)联赛白字', 'Name / Number (Ligue1 Fonts)联赛字体', 'Name / Number ( Ligue1 Fonts ) 联赛主场', 'Name / Number ( Ligue1 Fonts ) 联赛三客字', 'Name / Number ( Ligue1 Fonts ) 联赛客场字', "Name / Number ( Ligue1 Fonts )联赛字体", "Name / Number ( Ligue1 Fonts ) 联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal EFL fonts": {
                matches: ["Name / Number (EFL Fonts)英冠字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Liga fonts": {
                matches: ['Name / Number (League Player Fonts)联赛球员字体', 'Name / Number (League Player Fonts)联赛球员字', "Name / Number (Schalke04)(联赛号-名在号下)"],
                type: "customize",
                price: 4
            },
            "Con dorsal CUP fonts": {
                matches: ["Name / Number (CUP Fonts) 杯赛字体-名在号下", "Name / Number (CUP Fonts) 杯赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal Copa fonts": {
                matches: ["Name / Number ( Cup match Fonts )杯赛字体", "Name / Number (Cup match Fonts)杯赛白字", "Name / Number (Cup match Fonts) 杯赛字体", "Name / Number (Cup Fonts) 杯赛字体", "Name / Number (Cup match Fonts)杯赛字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal Liga fonts": {
                matches: ["Name / Number (League Fonts) 联赛带吼", "Name / Number(League Fonts) 联赛字体", "Name / Number ( League Fonts )联赛字体", "Name / Number (League Fonts 07/08联赛字体)", "Name / Number ( League Fonts ) 联赛字体)", "Name / Number (League Fans Fonts)联赛球迷字体", 'Name / Number (League Fonts)联赛字体', "Name / Number (League Fonts )联赛字体"],
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
                matches: ["Name / Number (Pre League Fonts)联赛主场字", "Name / Number (Pre League Fonts) 联赛红字", "Name / Number (Pre League Fonts) 联赛白字", "Name / Number (Pre League Fonts)联赛白色字", "Name / Number (Pre League Fonts) 联赛字体", "Name / Number (Pre League Fonts)联赛红字", "Name / Number (Pre League Fonts)联赛白字", "Name / Number (Pre League Fonts)联赛白字体", 'Name / Number (Pre League Fonts)联赛黑字', "Name / Number (Pre League Fonts)联赛字体"],
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
                matches: ["Name / Anime Number (24/25ad红色名-动漫号)", "Name / Anime Number (24/25ad黑色名-动漫号)只印后面", "Name / Anime Number (24/25ad白色名-动漫号)只印后面", "Name / Number (Anime Number)黄色名/足球小将动漫号", "Name / Number (Anime Number) 黄色名/足球小将动漫号", "Name / Number (Anime-黄色名/龙珠动漫号)只印背后", "Name / Number (Anime Number) 黑色名/足球小将动漫号"],
                type: "customize",
                price: 4
            },
            "Con dorsal Aniversario": {
                matches: ["Name / Number (周年字体)(没广告-名在号上)"],
                type: "customize",
                price: 3
            },
            "Con dorsal Aniversario v2": {
                matches: ["Name / Number (Anniversary Fonts) 专用字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial - Dembele #10": {
                matches: ["登贝莱 #10 (印球星号-蛇年字体)", 'O.DEMBELE / 10 (龙年字登贝莱#10)'],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - VINI JR. #7": {
                matches: ["VINI JR. #7 (印客场名-卡通号)"],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - BELLINGHAM #5": {
                matches: ["BELLINGHAM #5 (印客场名-卡通号)"],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - MESSI #10": {
                matches: ["MESSI # 10 (印24/25带签名号 Sign by Messi)"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial - MESSI #10": {
                matches: ["MESSI / 10 (印此处带签名号 Sign by Messi)"],
                type: "customize",
                price: 3
            },
            "Con dorsal Especial - BENZEMA #9": {
                matches: ["BENZEMA / 9 (主图字体印此球星号)"],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - MBAPPE #7": {
                matches: ["MBAPPE / 7 (龙年字姆巴佩#7)"],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - TEDDY SMITH": {
                matches: ["Name / Number (号下带广告TEDDY SMITH )"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial - CAMPEONES DEL MUNDO": {
                matches: ["CAMPEONES DEL MUNDO ***(背后印冠军三颗星)"],
                type: "customize",
                price: 0
            },
            "Con dorsal Especial - FC Bayern Munchen": {
                matches: ["Name / Number (FC BAYERN MUNCHEN)(上带广告-名在号下)"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial - LEE KANG IN #19": {
                matches: ["LEE KANG IN / 19 (龙年字李康仁#19)"],
                type: "customize",
                price: 0
            },
            "Con dorsal WWE fonts": {
                matches: ["Name / Number (Fonts WWE)联名字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal DIAVOLI fonts": {
                matches: ["Name / Number (DIAVOLI  Fonts)联赛专用"],
                type: "customize",
                price: 3
            },
            "Con dorsal Off-White fonts": {
                matches: ["Name / Number (Off-White  Fonts)欧冠专用"],
                type: "customize",
                price: 4
            },
            "Con dorsal Cartoon fonts": {
                matches: ["Name / Cartoon Number (客场名-卡通号)"],
                type: "customize",
                price: 4
            },
            "Con dorsal LaLiga fonts v2": {
                matches: ["Name / Number (LaLiga Fonts) 联赛带吼"],
                type: "customize",
                price: 4
            },
            "Con dorsal Especial - #13": {
                matches: ["#13 (印专用号13)"],
                type: "customize",
                price: 3
            },
            "Con dorsal Y-3 fonts": {
                matches: ["Name / Number (Y-3 Fonts) Y3字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal F-L fonts": {
                matches: ["Name / Number (F-L Fonts)联赛球迷字", 'Name / Number (F-L Fontss)联赛球迷字'],
                type: "customize",
                price: 3
            },
            "Con dorsal Japanese fonts": {
                matches: ["Name / Number (Japanese Fonts) 日文字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal MLS fonts": {
                matches: ["Name / Number (MLS Fonts) 联赛字体"],
                type: "customize",
                price: 3
            },
            "Con dorsal B-X fonts": {
                matches: ["Name / Number (B-X Fonts) 专用字体"],
                type: "customize",
                price: 4
            },
            "Con dorsal XXXXXXXX fonts": {
                matches: ["XXXXXXXXXXX"],
                type: "customize",
                price: 0
            },
            
            
        }
    }
};