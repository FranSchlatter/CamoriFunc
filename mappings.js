// mappings.js
module.exports = {
    // Categorías con sus jerarquías
    categories: {
        // Deportes y sus subcategorías
        "Futbol": {
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
        "Basquet": {
            matches: ['NBA', 'Basketball'],
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
            matches: ['Tracksuit', 'Hoodie', 'Half Pull', 'Training Short', 'Tank top and shorts suit'],
            description: "Indumentaria conjuntos",
            categoryPath: ["Productos", "Conjuntos"]
        },
        "Entrenamiento": {
            matches: ['Training'],
            description: "Indumentaria entrenamiento",
            categoryPath: ["Productos", "Entrenamiento"]
        },
        "Retro": {
            matches: ['Retro'],
            description: "Indumentaria retro",
            categoryPath: ["Productos", "Retro"]
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
                matches: ['Windbreaker', 'Double Sided'],
                description: "Indumentaria de abrigo rompeviento",
                categoryPath: ["Productos", "Abrigos", "Rompevientos"]
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
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Morocco": {
                matches: ['Morocco'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Cameroon": {
                matches: ['Cameroon'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Japan": {
                matches: ['Japan'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Korea": {
                matches: ['Korea'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Palestina": {
                matches: ['Palestina'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Ghana": {
                matches: ['Ghana'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
            },
            "Egypt": {
                matches: ['Egypt'],
                type: "equipo",
                categoryPath: ["Deportes", "Fútbol", "Selecciones", "Otros"]
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
            }
        },

        // Versiones
        versions: {
            "Version Jugador": {
                matches: ['Player Version'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Version Fanatico": {
                matches: ['Fans'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Mujer": {
                matches: ['Women'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Niños": {
                matches: ['Kids'],
                type: "version",
                categoryPath: ["Productos"]
            },
            "Bebes": {
                matches: ['Baby Infant Crawl Suit'],
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
                matches: ['Third', 'Fourth'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Arquero": {
                matches: ['Goalkeeper'],
                type: "edicion",
                categoryPath: ["Productos"]
            },
            "Edicion Especial": {
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
                matches: ['Long Sleeve', '长袖'],
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
            "Estampado": {
                matches: ['Comma'],
                type: "color"
            }
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
            "S": {
                matches: ["S"],
                type: "size",
                price: 0
            }
        },
        badges: {
            "No Badge": {
                matches: ["No Badge"],
                type: "badge",
                price: 2,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/e/8/e80a811156ddf959.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            },
            "Bundesliga": {
                matches: ["Bundesliga (德普章)"],
                type: "badge",
                price: 1,
                images: "https://us03-imgcdn.ymcart.com/97006/2024/12/17/1/c/1c8b2e3d86130fe3.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"
            }
        },
        customize: {
            "Sin dorsal": {
                matches: ["No Name No Number"],
                type: "customize",
                price: 0
            }
        }
    }
};