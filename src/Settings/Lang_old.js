// ------------------------------------
// Settings for text content language
// ------------------------------------

export const lang = [
    // FR -----------
    {
        title: "Monitoring du Centre d'Education à l'Environnement",

        indicatorsNames: [
            "Energies",
            "Eaux",
            "Déchets",
            "Recyclage",
            "Transport",
            "Qualité d'Air",
            "GES",
            "Faune",
            "Flore",
        ],

        Meteo: {
            lebel_1: "Courant",
            lebel_2: "Max",
            lebel_3: "Min",
            lebel_4: "Humid",
            lebel_5: "Vent",
        },

        AppBar: {
            Menu: [
                { label: "Accueil" },
                { label: "Indicateurs" },
                { label: "Ressources" },
                { label: "Rapport" },
            ]
        },

        Control: {
            label: "Période d'activité",
        },

        SideBar: {
            title: "Performances environnementales",
            desc: "Les performances environnementales des sept derniers jours ",
            indic_1: {
                title: "Eau potable:",
                unit: " m3"
            },
            indic_2: {
                title: "Eau recyclée :",
                unit: " m3"
            },
            indic_3: {
                title: "Energie du réseau:",
                unit: " KWh"
            },
            indic_4: {
                title: "Energie PV :",
                unit: " KWh"
            },
            indic_5: {
                title: "Déchets :",
                unit: " Kg"
            },
            indic_6: {
                title: "Déchets recyclés :",
                unit: " Kg"
            },
            indic_7: {
                title: "GES",
                unit: " ppm"
            },
            indic_8: {
                title: "Transport",
                unit: " ppm"
            },
        },

        Energy: {
            name: "Energies",
            title: "Indicateurs des énergies",
            desc: "Les indicateurs des énergies renseignent sur la quantité d'énergie consommée par les équipements du CEE. Ils indiquent aussi la quantité d'énergie renouvelable produite par la ferme solaire du CEE",
            indic_1: {
                title: "Energie globale consommée (kWh)",
                unit: " kWh"
            },
            indic_2: {
                title: "Energie renouvelable consommée (kWh)",
                unit: " kWh"
            },
            indic_3: {
                title: "Consommation d'énergie par équipements",
                Element_1: {
                    label: "Prises électriques",
                    unit: " %"
                },
                Element_2: {
                    label: "Equipements de confort CVC",
                    unit: " %"
                },
                Element_3: {
                    label: "Eclairage",
                    unit: " %"
                },
            },
            indic_4: {
                title: "Performance",
                desc: "Energie consommée Conventionnelle VS. Renouvelable",
                Element_1: {
                    label: "Energie Renouvelable",
                    unit: " %"
                },
                Element_2: {
                    label: "Energie Conventionnelle",
                    unit: " %"
                },
            },
        },

        Water: {
            name: "Eaux",
            title: "Indicateurs des eaux",
            desc: "Cet indicateur affiche la quantité d'eau potable consommée dans le CEE, ainsi que la quantité d'eau recyclée par la station de traitement des eaux usées et récupérées",
            indic_1: {
                title: "Eau potable consommée (m3)",
                unit: " m3"
            },
            indic_2: {
                title: "Performance",
                desc: "Eaux consomées VS. Eaux recyclées",
                Element_1: {
                    label: "Eaux consommées",
                    unit: " %"
                },
                Element_2: {
                    label: "Eaux recyclées",
                    unit: " %"
                },
            },
            indic_3: {
                title: "Eau recyclée (m3)",
                unit: " m3"

            },

            indic_4: {
                title: "Qualité d’eau en provenance de la STEP",
                comment: "Non potable, mais bonne pour l’arrosage"

            },

            indic_5: {
                title: "Qualité d’eau en provenance du réseau national",
                comment: "Potable, très bonne pour la consommation quotidienne"

            },
        },

        Waste: {
            name: "Déchets",
            title: "Indicateurs des déchets",
            desc: "La poubelle du CEE permet le tri des déchets selon leurs catégories. Ce tri aide à la collecte des différentes informations ci-dessous",
            indic_1: {
                title: "Recyclage",
                desc: "Poids des déchets recyclables (Kg)",
                list: ['Verre', 'Metal', 'Plastique'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Poids des déchets compostables (Kg)",
                list: ['Organique', ' Papier'],
                unit: " Kg"
            },
            indic_3: {
                title: "Niveau total",
                unit: " m3"
            },
            indic_4: {
                title: "Niveau total",
                unit: " m3"
            },
            indic_5: {
                title: "Poids total",
                unit: " Kg"
            },
            indic_6: {
                desc: "Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage",
            },
        },

        recyclable: {
            name: "Recyclage",
            title: "Indicateur de recyclage des déchets",
            desc: "Les déchets organiques sont transformés en composte tandis que le reste des déchets sont confiés aux filières de recyclage",
            indic_1: {
                title: "Recyclage",
                desc: "Déchets recyclés (Kg)",
                list: ['Verre', 'Métal', 'Plastique'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: ['Organique', 'Papier'],
                unit: " Kg"
            },
            indic_3: {
                title: "Verre",
                unit: " %"
            },
            indic_4: {
                title: "Métal",
                unit: " %"
            },
            indic_5: {
                title: "Plastique",
                unit: " %"
            },
            indic_6: {
                title: "Organique",
                unit: " %"
            },
            indic_7: {
                title: "Papier",
                unit: " %"
            },
        },

        Transport: {
            name: "Transport",
            title: "Indicateur de transport",
            desc: "Cet indicateur a pour objectif de définir le degré de contribution des moyens de transport dans la pollution de l'air",
            indic_1: {
                title: "Bilan carbone du transport",
                desc: "Bilan carbone du transport (Kg équi. CO2)",
                list: ['Voiture', 'Train', 'tramway', 'Bus urbain', 'Deux roues'],
                unit: " Kg"
            },
        },

        Air: {
            name: "Air",
            title: "Indicateur de la Qualité d'air",
            desc: "L'indicateur de la qualité d'air affiche les différentes valeurs mesurées et instantanées de la température, de l'humidité et de la quantité des particules CO2 dans l'air",
            indic_1: {
                title: "Hall d'accueil",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_2: {
                title: "Espace bureaux",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_3: {
                title: "Classe verte",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_4: {
                title: "Salle plénière",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
        },

        GES: {
            name: "GES",
            title: "Radar des performances",
            desc: "Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement",
            indic_1: {
                title: "Radar des performances",
                Element_4: {
                    label: "Déchets",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "Eau",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "Energie",
                    unit: " KgCO2"
                },
                Element_1: {
                    label: "Transport",
                    unit: " KgCO2"
                },
                Element_5: {
                    label: "Autres",
                    unit: " KgCO2"
                },
            },
            indic_2: {
                title: "Le jardin botanique du CEE",
            },
            indic_3: {
                title: "Comment lire le radar ?",
                desc: "Le centre du graphe du Radar renvoi vers la valeur minimale 0. Plus les zones sont de couleur verte, plus les émissions du CO2 sont basses, plus elles sont blanches plus les émissions en CO2 sont élevées"
            },
            indic_4: {
                title: "Le jardin botanique du Centre de l’éducation à l’environnement contient différentes espèces végétales identifiées en collection. Ce jardin a pour mission principale la conservation de la biodiversité, notamment des espèces locales, l'amélioration de la qualité de l'air en absorbant les GES, ainsi qu'une mission d'information et de sensibilisation à la protection de l'environnement du public",
            },
            indic_5: {
                title: "Total GES",
            },
        },

        Faune: {
            name: "Faune",
            title: "Indicateur de la Faune",
            desc: "L’environnement naturel du CEE abrite plusieurs espèces animales existantes dans la région. Ci-dessous quelques informations et statistiques des espèces animales et leurs statuts de conservation",
            indic_1: "Espèces à préoccupation mineure",
            indic_2: "Espèces en vulnérabilité",
            indic_3: "Espèces menacés d'extinction",
            state_0: 'Préoccupation mineure',
            state_1: 'Vulnérable',
            state_2: 'En danger',
            state_3: 'Non évalué',
        },

        Flore: {
            name: "Flore",
            title: "Indicateur de la Flore",
            desc: "Le CEE a adopté une démarche écologique afin de protéger les espèces végétales locales. Ci-dessous quelques statistiques des espèces végétales au niveau du CEE et leurs statuts de conservation",
            indic_1: "Espèces à préoccupation mineure",
            indic_2: "Espèces en vulnérabilité",
            indic_3: "Espèces menacés d'extinction",
            state_0: 'Préoccupation mineure',
            state_1: 'Vulnérable',
            state_2: 'En danger',
        },

        Ressources: [
            {
                id: 1,
                title: "Aire de stationnement & Transport",
                desc: "L'aire de stationnement du Centre d'éducation à l'environnement est aménagée en espace vert, doté d’équipements modernes: bornes de recharge pour véhicules électriques, application dédiée, calcul et compensation volontaire du bilan carbone … Un parking au sol perméable à l’eau, des matériaux recyclables, de la verdure et des zones de stationnement ombragées pour un accueil agréable de nos visiteurs. Calcul de votre bilan CO2: La compensation volontaire carbone est un moyen de participation à l’effort collectif de lutte contre la pollution atmosphérique et le changement climatique.",
                picture: "/images/ressources/res_03.jpg",
            },
            {
                id: 2,
                title: "Bâtiment - NB : source du contenu : l’application bâtiment des outils pédagogiques",
                desc: "Le CEE est un modèle et exemple concrets de projets innovants favorisant le déploiement d’une nouvelle démarche d’éco-construction sur l’ensemble du territoire national. Le bâtiment du CEE est une structure écologique innovante, qui répond à des exigences environnementales. En plus de son infrastructure et ses équipements ultra-modernes, il est équipé d'un réseau électrique et informatique de commande et de monitoring intelligent des ressources. Le concept architectural du bâtiment propose une grande transparence avec des baies vitrées favorisant l’éclairement naturel, protégées par une végétation extérieure qui participe à la régulation thermique, selon les exigences des études thermodynamiques, des volumes modulables, des hauteurs optimisées pour le confort thermique et la qualité de l’air ainsi qu’une fluidité des circuits d’accès. Tout en assurant modernisme, esthétisme et écologie, des savoir-faire ancestraux ont été mobilisés et des matériaux de construction et d’isolement naturels utilisés, comme la terre crue et le bois privilégiés pour leurs qualités environnementales, techniques et plastiques",
                picture: "/images/ressources/res_01.jpg",
            },
            {
                id: 3,
                title: "Station de traitement des eaux",
                desc: "L’EAU, une ressource naturelle, une denrée vitale et précieuse qui se fait de plus en plus rare à l’état pure. Sa gestion exige un soin particulier, des plus rigoureux, et son économie et son traitement systématique deviennent une urgence absolue. Afin d’intégrer cette exigence, le CEE s’est équipé d’une station d’épuration des eaux usées. Grâce à un procédé naturel, la station permet de fournir une eau propre à l’arrosage pour les espaces verts du CEE. A l’eau traitée vient s’ajouter l'eau de pluie collectée (par infiltration dans les sols et par ruissellement) ce qui permet de fournir la totalité des besoins en eau d’arrosage des espaces verts et permet ainsi de limiter la consommation d’eau potable au strict nécessaire",
                picture: "/images/ressources/res_0.jpg",
            },
            // {
            //     id: 4,
            //     title: "Eolienne Agricole",
            //     desc: "Afin de consolider sa démarche éco-responsable par la réduction des émissions de gaz à effet de serre, le Centre d'Education à l'Environnement promeut la diversification des sources d’énergie renouvelable par le recours au mix énergétique. Dans un but pédagogique et pour la démonstration, le CEE s’est équipé d’une éolienne agricole, adossée à une application ; un outil pédagogique qui permet d’expliquer d’une manière ludique le principe de fonctionnement, ainsi que la contribution de l’énergie éolienne à la réduction des émissions GES",
            //     picture: "/images/ressources/pure.jpg",
            // },
            {
                id: 4,
                title: "Espaces verts et Biodiversité ",
                desc: "Le CEE dispose d’espaces verts conçues sur le relief initial du site, favorisant ainsi l’installation et la préservation d’une biodiversité locale riche, variée et équilibrée. Ces espaces verts se caractérisent par un aménagement durable: Des espaces aménagés de manière à préserver leur aspect naturel et les caractéristiques initiales du site: sol, relief, espèces végétales, … ; Des prairies fleuries, riches, variées et équilibrées ; Des jardins pédagogiques illustrant la diversité biologique, notamment les espèces locales ; Un sol respectueux de l’environnement et fertilisé au composte produit in-situ ; Une faible consommation en eau : économie d’eau et arrosage par eau récupérée et recyclée ;\nLes espaces verts du CEE contribuent positivement à la performance environnementale du CEE",
                picture: "/images/ressources/res_06.jpg",
            },
            {
                id: 5,
                title: "Energie photovoltaïque",
                desc: "Le Centre d'Education à l'Environnement a opté pour un mix énergétique afin de promouvoir les énergies propres, atteindre son objectif en terme de performance environnementale.\nAinsi la ferme solaire (Aire Photovoltaïque) du CEE permet de subvenir à une majeure partie des besoins énergétique du Centre, tout en réduisant d’autant son bilan carbone. L’Aire photovoltaïque est la parfaite illustration de la mission et du propos pédagogique du CEE puisqu’il permet l’accès à de nombreuses informations utiles dans les conditions réelles d’utilisation.\nVoir aussi l’application dédiée au point d’intérêt Aire Photovoltaïque",
                picture: "/images/ressources/res_05.jpg",
            },
            {
                id: 6,
                title: "Gestion des déchets",
                desc: "Afin de minimiser son empreinte écologique, le CEE a intégré des mesures préventives par une gestion rigoureuse de ses déchets, visant à réduire leurs effets nocifs sur la santé humaine et environnementale ainsi que sur le cadre de vie. Le CEE a adopté la démarche éco-responsable 4R-V pour la gestion de ses déchets: Repenser, Réduire, Réutiliser, Recycler, Valoriser.\n    Ainsi une démarche de réduction à la source, de tri sélectif des déchets de réemploi et de recyclage est mise en place.\nLes déchets sont ainsi triés par types: carton/papier, métal, plastique et déchets organiques.\nN.B. Les déchets dangereux comme les ampoules, les accumulateurs ou batteries sont séparés des autres déchets recyclables. Les déchets organiques (DO) quant à eux sont transformés en composte au sein même du CEE pour une utilisation dans le jardin botanique. Voir tout le processus en détail via l’application dédiée",
                picture: "/images/ressources/res_01.jpg",
            },

        ],

        welcome: [
            {
                id: 1,
                title: "Inauguration du Centre d'Education à l'Environnement",
                desc: "L’inauguration du centre d’éducation à l’environnement aura lieu le JJ MM 2019 à partir de (heure) sur les lieux par son altesse royale la princesse Lalla Hasnae",
                picture: "/images/home/home1.png",
            },
            {
                id: 2,
                title: "Centre d'Education à l'Environnement",
                desc: "Le centre d'éducation à l’environnement propose un ensemble d’activités dans le cadre de la protection de l’environnement. Ces activités seront organisées sous  forme des formations, de visites pédagogiques, des événements et conférences ...Le Centre présente aux gens un nouveau modèle de la construction durable d’un bâtiment écologique",
                picture: "/images/home/home2.png",
            },
            {
                id: 3,
                title: "Système de Monitoring",
                desc: "Le système de monitoring intelligent du centre d’éducation à l’environnement permet d’évaluer l’ensemble des indicateurs environnementaux liés aux ressources du centre par des valeurs et des graphiques.  Selon les résultats affichés, une ou plusieurs actions pourront s’effectuer pour réduire les activités inappropriées à l’environnement",
                picture: "/images/home/home3.png",
            },
        ],


        rapport: {
            partie1: {
                title1: "Informations générales",
                desc1: "Le rapport de performance environnementale donne un aperçu général sous forme de bilans sur la gestion des ressources relatives à un ensemble d’indicateurs pertinents. Ce rapport a pour but d’améliorer et/ou de corriger les diverses actions d’utilisation et de consommation des ressources pour atteindre et respecter lesobjectifs de l’établissement du centre d’éducation à l’environnement.",
                title2: "Avant-props",
                desc2: "Sous le haut Patronage de Sa Majesté le Roi Mohammed VI, la fondation Mohammed VI pour la protection de l'environnement sous la présidence de son altesse Lalla Hasnae a bâti le centre d’éducation à l’environnement qui s’inscrit dans le cadre de sa stratégie nationale de la protection environnementale.",
                title3: "Le centre d'éducation à l'environnement",
                desc3: "Le centre de l'éducation à l'environnement offre un ensemble d'activités dans le cadre de la protection de l'environnement. Ces activités sont organisées se forme de formations, de visites pédagogiques, d’événements et conférences ... Le Centre présente aux gens un nouveau modèle de la construction durable d'un bâtiment écologique.",
                title4: "Le système de monitoring intelligent",
                desc4: "Le système de monitoring intelligent du centre de l’éducation à l’environnement permet d’évaluer l’ensemble des indicateurs environnementaux liés aux ressources du centre par des chiffres et des graphiques. Selon les résultats affichés, une ou plusieurs actions pourra s’effectuer pour réduire nos activités inappropriées à l’environnement.",
            },
            partie2: {
                title: "Identité du rapport",
                option1: "Référence",
                option2: "Date de génération",
                option31: "Durée d'activité",
                option32: "Jours",
                option41: "Lieu",
                option42: "Le centre de l'éducation à l'environnement",
            },
            partie3: {
                title: "Diffusion",
                option1: {
                    diff_1: "Confidentiel",
                    diff_2: "Diffusion restreinte",
                    diff_3: "Diffusion publique",
                    diff_4: "Autre",
                },
                option2: "Remarque",
                option3: "Généré par",
                option4: "Autorisé par",
            },
            Element_1: "Indicateurs inclus dans le rapport",
            Element_2: "Imprimer le rapport",
        },
    },


    // AR -----------

    {
        title: "تتبع ومراقبة مركز التربية البيئية – مؤسسة محمد السادس لحماية البيئة",

        indicatorsNames: [
            "الطاقات",
            "المياه",
            "النفايات",
            "التدوير",
            "النقل",
            "جودة الهواء",
            " الغازات",
            "الحياة البرية",
            "النباتات",
        ],

        Meteo: {
            lebel_1: "الحالية",
            lebel_2: "العليا",
            lebel_3: "الدنيا",
            lebel_4: "الرطوبة",
            lebel_5: "الرياح",
        },

        AppBar: {
            Menu: [
                { label: "الرئيسية" },
                { label: "المؤشرات" },
                { label: "الموارد" },
                { label: "التقارير" },
            ]
        },

        Control: {
            label: "فترة النشاط",
        },

        SideBar: {
            title: "الأداء البيئي",
            desc: "نظرة عامة على الأداء البيئي للأيام السبعة الماضية",
            indic_1: {
                title: "الماء",
                unit: " m3"
            },
            indic_2: {
                title: "الماء المعالج",
                unit: " m3"
            },
            indic_3: {
                title: "الطاقة",
                unit: " KWh"
            },
            indic_4: {
                title: "الطاقة الشمسية",
                unit: " KWh"
            },
            indic_5: {
                title: "النفايات",
                unit: " Kg"
            },
            indic_6: {
                title: "النفايات المدورة",
                unit: " Kg"
            },
            indic_7: {
                title: "غازات دفيئة",
                unit: " ppm"
            },
            indic_8: {
                title: "النقل",
                unit: " ppm"
            },
        },

        Energy: {
            name: "الطاقات",
            title: "مؤشرات الطاقات",
            desc: "توفر مؤشرات الطاقات معلومات عن كمية الطاقة المستهلكة من معدات المركز. كما أنها تشير إلى كمية الطاقة المتجددة التي تنتجها المزرعة الشمسية للمركز",
            indic_1: {
                title: "مجموع الطاقة المستهلكة - كيلووات ساعة",
                unit: " kWh"
            },
            indic_2: {
                title: "مجموع الطاقة المتجددة المستهلكة - كيلوواط ساعة",
                unit: " kWh"
            },
            indic_3: {
                title: "استهلاك الطاقة من الأجهزة",
                Element_1: {
                    label: "المقابس الكهربائية",
                    unit: " %"
                },
                Element_2: {
                    label: "معدات ونظام التدفئة، والتهوية، وتكييف الهواء",
                    unit: " %"
                },
                Element_3: {
                    label: "الإضاءة",
                    unit: " %"
                },
            },
            indic_4: {
                title: "الأداء",
                desc: "طاقة شبكة التوزيع المستهلكة مقابل الطاقة المتجددة المستهلكة",
                Element_1: {
                    label: "الطاقة المتجددة",
                    unit: " %"
                },
                Element_2: {
                    label: "طاقة شبكة التوزيع",
                    unit: " %"
                },
            },
        },

        Water: {
            name: "المياه",
            title: "مؤشرات المياه",
            desc: "يبين هذا المؤشر كمية المياه الصالحة للشرب المستهلكة بالمركز، وكذلك كمية المياه التي تم تدويرها في محطة معالجة المياه العادمة والمتجمعة",
            indic_1: {
                title: "كمية الماء الصالح للشرب المستهلكة - متر مكعب",
                unit: " m3"
            },
            indic_2: {
                title: "الأداء",
                desc: "الماء المستهلك مقابل الماء المعالج",
                Element_1: {
                    label: "الماء المستهلك",
                    unit: " %"
                },
                Element_2: {
                    label: "الماء المعالج",
                    unit: " %"
                },
            },
            indic_3: {
                title: "الماء المعالج - متر مكعب",
                unit: " m3"

            },

            indic_4: {
                title: "جودة المياه القادمة من محطة معالجة المياه",
                comment: "غير صالحة للشرب، لكنها جيدة للسقي"
            },

            indic_5: {
                title: "جودة المياه القادمة من شبكة التوزيع الوطنية",
                comment: "صالحة للشرب، جيدة جدا للإستهلاك اليومي"
            },
        },

        Waste: {
            name: "النفايات",
            title: "مؤشرات النفايات",
            desc: "تمكن الحاوية من فرز نفايات المركز حسب فئاتها ونوعها. يساعد هذا الفرز على جمع المعلومات المختلفة أدناه",
            indic_1: {
                title: "القابلة لإعادة للتدوير",
                desc: "وزن النفايات القابلة لإعادة التدوير - بالكيلوغرام",
                list: ['الزجاج', 'الحديد', 'البلاستيك'],
                unit: " Kg"
            },
            indic_2: {
                title: "السماد",
                desc: "وزن النفايات القابلة للتسميد - بالكيلوغرام",
                list: ['العضوية', 'الورق'],
                unit: " Kg"
            },
            indic_3: {
                title: "المستوى الكلي",
                unit: " m3"
            },
            indic_4: {
                title: "المستوى الكلي",
                unit: " m3"
            },
            indic_5: {
                title: "الوزن الإجمالي",
                unit: " Kg"
            },
            indic_6: {
                desc: "يتم تحويل النفايات العضوية إلى سماد طبيعي، بينما يتم إرسال باقي النفايات الى الشركات والمختصين لإعادة تدويرها",
            },
        },

        recyclable: {
            name: "التدوير",
            title: "مؤشر إعادة تدوير النفايات",
            desc: "يتم تحويل النفايات العضوية إلى سماد طبيعي، بينما يتم إرسال باقي النفايات الى الشركات والمختصين لإعادة تدويرها",
            indic_1: {
                title: "تم إعادة التدوير",
                desc: "النفايات المعاد تدويرها - بالكيلوغرام",
                list: ['الزجاج', 'الحديد', 'البلاستيك'],
                unit: " Kg"
            },
            indic_2: {
                title: "السماد",
                desc: "وزن النفايات المحولة للسماد - بالكيلوغرام",
                list: ['العضوية', 'الورق'],
                unit: " Kg"
            },
            indic_3: {
                title: "الزجاج",
                unit: " %"
            },
            indic_4: {
                title: "الحديد",
                unit: " %"
            },
            indic_5: {
                title: "البلاستيك",
                unit: " %"
            },
            indic_6: {
                title: "العضوية",
                unit: " %"
            },
            indic_7: {
                title: "الورق",
                unit: " %"
            },
        },

        Transport: {
            name: "النقل",
            title: "مؤشر النقل ",
            desc: "يهدف هذا المؤشر إلى تحديد نسبة مساهمة وسائل النقل في تلوث الهواء",
            indic_1: {
                title: "حصيلة البصمة الكربونية للنقل",
                desc: "حصيلة البصمة الكربونية للنقل - الكيلوغرام المعادل للكربون",
                list: ['السيارة', 'القطار', 'الترامواي', 'الحافلة الحضرية', 'الدراجة النارية'],
                unit: " Kg"
            },
        },

        Air: {
            name: "الهواء",
            title: "مؤشر جودة الهواء",
            desc: "يمكن مؤشر جودة الهواء من معرفة مختلف القياسات اللحظية لدرجة الحرارة، الرطوبة وكمية جزيئات الكربون في الهواء",
            indic_1: {
                title: "بهو الإستقبال",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "الغازات الدفيئة",
                    unit: " %"
                },
            },
            indic_2: {
                title: "فضاء المكاتب",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
            indic_3: {
                title: "القسم الأخضر",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
            indic_4: {
                title: "قاعة العروض",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
        },

        GES: {
            name: "الانبعاثات",
            title: "مخطط رادار الأداء",
            desc: "يقدم رادار الأداء رؤية عامة لحصيلة البصمة الكربونية لمختلف أنشطة مركز التربية البيئية",
            indic_1: {
                title: "ردار الأداء",
                Element_4: {
                    label: "النفايات",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "الماء",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "الطاقة",
                    unit: " KgCO2"
                },
                Element_1: {
                    label: "النقل",
                    unit: " KgCO2"
                },
                Element_5: {
                    label: "أخرى",
                    unit: " KgCO2"
                },
            },
            indic_2: {
                title: "الحديقة النباتية لمركز التربية البيئية",
            },
            indic_3: {
                title: "كيف نقرأ الرادار ؟",
                desc: "مركز رادار الأداء يعادل القيمة الدنيا 0. كلما قلت انبعاثات الكربون، كلما كانت زواياه بلون أخضر. كلما ازدادت انبعاثات الكربون، كلما كانت بلون أبيض"
            },
            indic_4: {
                title: "تحتوي الحديقة النباتية التابعة لمركز التربية البيئية على أنواع نباتية مختلفة مرتبة في مجموعات. وتتمثل المهمة الرئيسية لهذه الحديقة في الحفاظ على التنوع البيولوجي، بما في ذلك للأنواع المحلية، وتحسين نوعية الهواء عن طريق امتصاص الغازات الدفيئة، وكذلك توفير المعلومات والرفع من الوعي لحماية البيئة",
            },
            indic_5: {
                title: "مجموع الغازات الدفيئة",
            },
        },

        Faune: {
            name: "الحيوانات",
            title: "مؤشر التنوع البيولوجي - الحياة البرية",
            desc: "تعد البيئة الطبيعية لمركز التربية البيئية موطنا لعدة أنواع من الحيوانات الموجودة في المنطقة. فيما يلي بعض المعلومات والإحصائيات عن الأنواع الحيوانية وحالة حفظها",
            indic_1: "أنواع غير مهددة بالإنقراض",
            indic_2: "أنواع مهددة بالإنقراض",
            indic_3: "أنواع معرضة للخطر للغاية",
            state_0: 'غير مهدد بالإنقراض',
            state_1: 'مهدد بالإنقراض',
            state_2: 'معرض للخطر للغاية',
            state_3: 'لم يتم دراسته',
            list: [
                [
                    "Faune",
                    "Abeille",
                    "uploads/abeille.jpg",
                    "Insecte appartenant à la classe des lymphocytes ailés, dont la fonction est la production de miel, de cire d'abeille et la pollinisation, connue pour environ 20 000 espèces et répartie sur tous les continents, à l'exception de l'Antarctique. Les abeilles mellifères sont l’un des types d’abeilles les plus importants. En général, les abeilles sont considérées comme les insectes les plus utiles en raison de leur contribution à la pollinisation des fleurs.",
                    "1",
                    "نحلة",
                    "حشرة تنتمي لرتبة غشائيات الأجنحة، ووظيفتها إنتاج العسل وشمع النحل والتلقيح، يعرف منها ما يقارب 20.000 نوع، وتنتشر في جميع قارات العالم عدا القطب الجنوبي. يعد نحل العسل من أهم وأشهر أنواع النحل. كما يعد النحل بشكل عام من أكثر الحشرات نفعاً، نظراً لمساهمتها في تلقيح الأزهار."
                ],
                [
                    "Faune",
                    "Fourmi",
                    "uploads/Fourmi.jpg",
                    "Insectes eusociaux formant des colonies, appelées fourmilières, parfois extrêmement complexes, contenant de quelques dizaines à plusieurs millions d’individus. Les sociétés des fourmis ont une division du travail, une communication entre individus et une capacité à résoudre des problèmes complexes.",
                    "0",
                    "نملة",
                    "تسمى بالحشرات الإغريقية التي تشكل مستعمرات للنمل ، وأحيانا معقدة للغاية،وتحتوي على عشرات إلى ملايين من هذه الحشرة. تنهج مجتمعات النمل استراتيجية في العمل ، التواصل بينها لقدرتها على حل المشاكل المعقدة."
                ],
                [
                    "Faune",
                    "Ver de terre commun",
                    "uploads/Ver.jpg",
                    "C'est l'espèce de ver de terre la plus longue, atteingnant généralement 20 à 25 cm de longueur lorsqu'il est étendu. C'est un ver anecique. Il forme des terriers profonds temporaires et remonte à la surface pour se nourir, par opposition à l'enfouissement dans le sol pour chercher sa nourriture comme la plupart des vers de terre.",
                    "0",
                    "دودة الأرض",
                    "هو من اطول ديدان الارض، يبلغ طوله وهو ممدد ما بين 20 الى 25 سم. يكون غيران عميقة مؤقتة و يصعد للسطح ليتغذى، بدلا من ان يدفن نفسه في الارض ليبحث عن غذائه كما تفعل معظم ديدان الارض. "
                ],
                [
                    "Faune",
                    "Escargot du jardin",
                    "uploads/escargot.jpg",
                    "Petit escargot dont la coquille est brune dorée portant des bandes brunes interrompues. Il se nourrit de plantes et d'herbes et peut endommager les cultures. Très apprécié dans la cuisine locale. C'est un mollusque hermaphrodite et il peut pondre plus de 100 oeufs. Il vit dans les terrains cultivés, les dunes et les broussailles.",
                    "0",
                    "حلزون الحدائق",
                    "حلزون صغير صدفي الشكل لونه بني ذهبي له عصابات سمراء متقطعة. يتغدى على النباتات والاعشاب ويمكنه ان يلحق الاذى بالمحاصيل الزراعية. شعبي جدا في المطبخ المحلي. رخوية خنثى يمكنها ان تضع اكثر من 100 بيضة. تعيش في الاراضي المزروعة، الكثبان الرملية و الاشجار المتشابكة. "
                ],
                [
                    "Faune",
                    "Moineau domestique",
                    "uploads/Moineau.jpg",
                    "Oiseau très commun. Le mâle niptial arbore d'une bavette noire et d'un plumage brun-roux au niveau du dos. La femelle en diffère par un corps généralement de couleur crème chamois et d'un bec clair alors qu'il est noir chez le mâle.",
                    "0",
                    "دوري شائع",
                    "طائر معروف جدا. الذكور المتزاوجة ترتدي ثياب سوداء وريش بني محمر على مستوى ظهره. تختلف الأنثى بجسم ذو لون كريمي برتقالي ومنقار فاتح بينما منقار الذكور أسود."
                ],
                [
                    "Faune",
                    "Etourneau unicolore",
                    "uploads/Etourneau.jpg",
                    "Oiseau à plumage noir luisant qui s'est nouvellement installé dans la ville de salé. Possède un bec jaune et des pattes rouge-vif. Le mâle nuptial possède des plumes longues et effilées au niveau de la gorge qui deviennent visibles quand l'oiseau chante.",
                    "0",
                    "زرزور أسود",
                    "طائر ذو ريش أسود لامع الذي ظهر مأخرا في مدينة سلا. له منقار أصفر وأرجل حمراء زاهية. الذكر المتزاوج يتخذ ريش طويل ومدبدب من جهة الحلقوم يظهر عندما يغرد."
                ],
                [
                    "Faune",
                    "Merle noir",
                    "uploads/Merle.jpg",
                    "Considérée comme l'espèce la mieux adaptée à nos jardins. Le mâle à un beau plumage noir, avec un bec orangé et des yeaux entourés d'une auréole jaune. Pendant la saison de nidification il se manifeste par un chant fluté très beau.",
                    "0",
                    "شحرور",
                    "يعتبر افضل الأنواع تكيفا مع حدائقنا. للذكر ريش أسود، منقار برتقالي و عيون محاطة بهالة صفراء. خلال موسم التكاثر يتميز بتغريد جميل جدا. "
                ]
            ]
        },

        Flore: {
            name: "النباتات",
            title: "مؤشر التنوع البيولوجي – النباتات",
            desc: "ينهج مركز التربية البيئية استراتيجية بيئية لحماية الأنواع النباتية الموجودة في المنطقة. فيما يلي بعض الإحصاءات عن الأنواع النباتية في المركز وحالة حفظها",
            indic_1: "أنواع غير مهددة بالإنقراض",
            indic_2: "أنواع مهددة بالإنقراض",
            indic_3: "أنواع معرضة للخطر للغاية",
            state_0: 'غير مهدد بالإنقراض',
            state_1: 'مهدد بالإنقراض',
            state_2: 'معرض للخطر للغاية',
            list: [
                [
                    "Flore",
                    "Romarin",
                    "uploads/romarin.jpg",
                    "Très répandue au Maroc et largement exploitée. Arbrisseau pouvant atteindre 2m. Feuilles persistantes sont enroulées sur leurs bords, de couleur vert sombre, luisant sur leur face supérieure et à la teinte blanchâtre sur le dessous. Fleurs, le plus souvent d'une teinte bleue violacée, disposées en grappes. Favorise la digestion, diurétique, combat le stresse et la fatique, antioxydant et soulage les rhumatismes.",
                    "0",
                    "إكليل الجبل",
                    "شائع جدا في المغرب ويزرع على نطاق واسع. شجيرة تصل إلى مترين. أوراقها دائمة الخضرة ملفوفة حول الحواف، لونها أخضر قاتم، لامع على الجانب العلوي وبيضاء تحتها. ثمرة إكليل الجبل زرقاء بنفسجية موضوعة في مجموعات قصيرة، كروي الشكل. يعزز الهضم، مدر للبول، مكافح للإجهاد والتعب، مضاد للأكسدة ويخفف الروماتيزم."
                ],
                [
                    "Flore",
                    "Sauge",
                    "uploads/sauge.jpg",
                    "Arbrisseau à tige quadrangulaire d'une hauteur d'environ 80 cm. Feuilles ovales et laineuses, d'une couleur gris-vert. Possède de multiples vertus médicinales, de la régulation de la transpiration à celle des cycles menstruels en passant par les maux de gorge, la gingivite et la désinfection des plaies.",
                    "0",
                    "سالمية",
                    "شجيرة ساقها رباعي الزوايا يبلغ 80 سم. الأورق بيضاوية وناعمة كالصوف، لونها رمادي وأخضر. لديها العديد من الخصائص الطبية، كتنظيم التعرق والحيض والتهاب الحلق، التهاب اللثة وتعقيم الجروح. "
                ],
                [
                    "Flore",
                    "Lavande",
                    "uploads/lavande.jpg",
                    "Petit arbuste qui mesure de 30 à 60 cm de hauteur; ses branches sont fines et ligneuses et on retrouve des feuilles étroites et pointues à sa base seulement. Fleurs bleu tendre ou violacé et en forme de petites corolles, sont regroupées en épis terminaux et dégagent un parfum très agréable.",
                    "0",
                    "خزامة",
                    "شجيرة صغيرة تقيس 30 إلى 60 سم في الطول. فروعها رقيقة وخشبية والأوراق ضيقة، مدببة عند القاعدة فقط. الزهور زرقاء أو أرجوانية ناعمة مجمعة في سنابل طرفية وتعطي رائحة لطيفة. "
                ],
                [
                    "Flore",
                    "Galant de nuit",
                    "uploads/galant.jpg",
                    "Arbuste ligneux à feuilles persistantes pouvant atteindre environ 4 m de haut. Ses feuilles sont simples, lancéolées de 6 à 20 cm de long. Fleur vert pâle à blanche et se compose d'une corolle fine et allongée de 2 à 2.5 cm de long. Le fruit est une baie blanche toxique.",
                    "0",
                    "مسك الليل",
                    "شجيرة متخشبة، أوراقها دائمة، يبلغ طولها حوالي 4 أمتار. أوراقها بسيطة، سنانية الشكل، طولها يصل 6 إلى 20 سم. الزهرة خضراء شاحبة إلى بيضاء وتتكون من تويج رقيق وممدد، طوله ما بين 2 و 2,5 سم. الثمرة عبارة عن حبة بيضاء سامة. "
                ],
                [
                    "Flore",
                    "Absinthe ",
                    "uploads/absinthe.jpg",
                    "Plante vivace à rhizome, herbacée qui mesure jusqu'à 1 m, recouverte de poils soyeux blancs argentés et de nombreuses glandes oléifères. La tige est de couleur vert argent, droite, cannelée, ramifiée et très feuillée. Les feuilles sont alternes, gris verdâtre sur le dessus et presque blanches sur le dessous.",
                    "0",
                    "شيبة",
                    "نبتة معمرة ذات جذمور، عشبية تبلغ مترا، مغطات بشعر حريري أبيض فضي والعديد من الغدد اازيتية. الساق خضراء فضية، مستقيمة، متشبعة ومتورقة جدا. الاوراق متبادلة، رمادية خضراء من الأسفل وشبه حريرية من الأعلى. "
                ],
                [
                    "Flore",
                    "Palmier nain",
                    "uploads/Palmier.jpg",
                    "Possède une large répartition au Maroc surtout dans les milieux dégradés. Si l'arbuste est respecté il peut facilement atteindre 3 à 4 m de hauteur, ce qui est visible dans les zones protégées comme les cimetières et les marabous. Le coeur du palmier est la partie comestible de cette plante.",
                    "0",
                    "دوم",
                    "تعرف توزيعا شاسعا في المغرب خاصة في المناطق المتدهورة. إذا احترمنا الشجيرة، يمكن أن يصل طولها ما بين 3 إلى 4 أمتار بسهولة وهو الشيء الملحوظ في المناطق المحمية كالمقابر والأولياء. قلب النخلة هو الجزء الصالح للأكل. أحيانا تستعمل الأوراق في صناعة السلل. "
                ],
                [
                    "Flore",
                    "Goyavier du Brésil",
                    "uploads/Feijoa.jpg",
                    "Arbuste décoratif par son beau feuillage vert grisâtre et par ses abondantes fleurs blanc rosé avec un gros bouquet d'étamines rouges au centre. Feuilles persistantes, aux deux faces fortement contrastées. Fruits comestibles de 4 à 6 cm au goût d'ananas et de fraise des bois. Constitue la base d'un excellent confiture.",
                    "3",
                    "فجوا",
                    "شجيرة زخزفية جميلة، أوراقها رمادية خضراء، الزهور بيضاء وردية مع باقة كبيرة من الأسدية الحمراء في الوسط. دائمة الخضرة، ووجوهها متناقضة بقوة. الفاكهة صالحة للأكل (4 إلى 6 سم) بطعم الأنناس والفراولة. يصنع منها مربى لذيذ."
                ],
                [
                    "Flore",
                    "Grenadier commun",
                    "uploads/punica.jpg",
                    "Le grenadier est un arbuste arrondi aux remarquables fleurs rouges vifs, en entonnoir, suivies de gros fruits sphériques comestibles. Ses feuilles sont verts vifs lustrées, cuivrées ou veinées de rouge à l'état jeune. Il peut atteindre 6 m de hauteur qui est autant apprécié pour ses fruits sucrés que pour son côté décoratif.",
                    "3",
                    "رمان",
                    "الرمان هو شجيرة مستديرة مع زهور رائعة حمراء زاهية، تليها ثمار صالحة للأكل كروية كبيرة. أوراقها خضراء زاهية لامعة، نحاسية أو معرقة بالأحمر في شبابها. يمكنها بلوغ 6 أمتار، مفضلة بسبب ثمارها الحلوة وأيضا لجماليتها."
                ],
                [
                    "Flore",
                    "Bougainvillier",
                    "uploads/Bougainvillier.jpg",
                    "Le Bougainvillier est une plante extrêmement voyante, florifère et robuste. Elle embellie nos jardins privés et nos rues par l'abondance de couleurs et de la vivalité quand il est bien entretenu. C'est une des espèces ornementales les plus courantes dans notre pays.",
                    "0",
                    "جهنمية",
                    "نبتة مبهرجة للغاية قوية ومزهرة. تزين الحدائق الخاصة والشوارع بفضل وفرة الألوان والحيوية، عندما يتم الحفاظ عليها. هي نوع من نباتات الزينة الأكثر شيوعا في بلدنا."
                ],
                [
                    "Flore",
                    "Flamboyant bleu",
                    "uploads/Flamboyant.jpg",
                    "Arbre tropical caduc dont le port est étalé et dont la particularité ets sa floraison bleue extrêmement spectaculaire. Des panicules de 20 à 30 cm se forment sur des branches sans feuillages, en avril jusqu'en juin. Les fleurs ressenblent à celles des digitales, tubulaires, en clochettes étroites, à cinq lobes.",
                    "1",
                    "جكراندة ميموزية الأوراق",
                    "شجرة استوائية، أوراقها متساقطة تتميز بأزهارها الزرقاء المذهلة. سنابلها بين 20 و 30 سم تتشكل على فروع بدون أوراق، من أبريل ألى يوليو. زهورها أنبوبية ، في أجراس ضيقة ، مع خمسة فصوص."
                ],
                [
                    "Flore",
                    "Papyrus",
                    "uploads/papyrus.jpg",
                    "Vivace semi-aquatique à feuillage semi-persistant dont la hauteur varie de 1.50 à 3 m.Les feuilles sont disposées en Ombelles larges et souples. Dans l'antiquité égyptienne, on aplatissait et séchait les tiges de cette plante pour obtenir les papyrus sur lesquels on écrivait.",
                    "0",
                    "بردى",
                    "معمرة شبه مائية اوراقها شبه دائمة، يختلف طولها بين متر ونصف الى 3 امتار. اوراقها تشكل خيمة نباتية. في مصر القديمة، تسطح وتجفف سيقان النبتة للحصول على ورق البردي الذي يكتبون عليه."
                ],
                [
                    "Flore",
                    "Erythrine caffre",
                    "uploads/Erythrina.jpg",
                    "Arbre à feuilles caduquesde taille moyenne à grande. Il poussedans kes buissons côtières et les forêts riveraines dans ses pays d'origine (Amérique du Sud). Les feuilles sont composées de trois folioles. Chaque feuillet est largement ovale et/ou elliptique. Les fleurs sont composées d'une pétale principale et de quatres petites.",
                    "1",
                    "إريثرينا",
                    "شجيرة أوراقها متساقطة، حجمها متوسط الى كبير. تنمو في السواحل و الغابات الشاطئية بموطنها الأصلي (أمريكا الجنوبية). أوراقها تتكون من 3 وريقات، كل ورقة بيضاوية الشكل. بالنسبة للزهور فهي تتكون من بتلة رئيسية و4 بتلات صغيرة."
                ],
                [
                    "Flore",
                    "Faux-poivrier odorant",
                    "uploads/Schinus_terebinthifolia.jpg",
                    "Arbre à feuilles persistantes à croissance rapide qui pousse à 15m. Les fruits rose vif sont souvent vendus comme ''Baies de poivre'', bien qu'il n'ait aucun lien avec le vrai poivrier. Feuilles pennées de 8 à 25 cm. L'arbre est dioique, les fleurs mâles et femelles poussent sur des ports séparés.",
                    "3",
                    "فلفل بيروفي",
                    "تنمو سريعا و دائمة الخضرة، تنمو الى 15 متر. فاكهتها الوردية تباع ك توت الفلفل  على الرغم من انه لا يوجد لديه صلة مع الفلفل الحقيقي. اوراق ريشية الشكل بين 8 و 25 سم. الشجرة ثنائية الجنس، اي ان الجنسين منفصلين: الزهور الذكرية والانثوية تنمو منفصلة"
                ],
                [
                    "Flore",
                    "Prunier du natal",
                    "uploads/grandiflora.jpg",
                    "Arbuste ornemental à croissance rapide qui peut se transformer en un patit arbre haut de 4 m. Les jeunes branches sont vertes et toutes les parties de la plante dégagent un latex non-toxique blanc, laiteux. les feuilles sont coriaces, d'un vert foncé brillant au-dessus et plus pâle en dessous. Fleurs blanches dont l'odeur est similaire à celle de l'oranger. Fruit rouge oval comestible.",
                    "0",
                    "كاريس كبير الثمار",
                    "شجيرة للتزيين تنمو بسرعة ويمكن ان تتحول الى شجرة صغيرة يصل طولها الى 4 م. فروعها خضراء وجميع اجزاء النبات تنبعث منها مادة حليبية بيضاء غير سامة. الاوراق خضراء لامعة من الاعلى وشاحبة من الاسفل.  الزهور بيضاء نقية ورائحتها كزهر البرتقال. ثمار بيضاوية حمراء كبيرة صالحة للاكل."
                ],
            ]
        },

        Ressources: [
            {
                id: 1,
                title: "منطقة وقوف السيارات ووسائل",
                desc: "هيئت منطقة وقوف السيارات في مركز التربية البيئية على شكل فضاءات خضراء مجهزة بمعدات حديثة: محطات شحن السيارات الكهربائية، التطبيقات المرافقة، الحساب والتعويض التطوعي للبصمة الكربونية ... جهز موقف السيارات بقاعدة تتيح تسرب المياه، وبمواد قابلة لإعادة التدوير، مساحات خضراء ومناطق وقوف مظللة من أجل استقبال رائع لزوارنا. حساب البصمة الكربونية: التعويض التطوعي للكربون وسيلة للمشاركة في الجهود الجماعية لمكافحة تلوث الهواء وتغير المناخ. يمكنكم تعويض البصمة الكربونية الخاصة بكم عبر الرابط التالي: http://calculateurco2.org/",
                picture: "/images/ressources/res_03.jpg",
            },
            {
                id: 2,
                title: "المبنى -  ملاحظة: مصدر المحتوى: تطبيق 'المبنى' للوسائل البيداغوجية",
                desc: "يعتبر مركز التربية البيئية نموذجًا ومثالا حقيقيين للمشاريع المبتكرة التي تشجع على اعتماد منهجية جديدة في البناء الإيكولوجي على المستوى الوطني. يعتبر مبنى مركز التربية البيئية منشأة إيكولوجية إبداعية، يحترم مجموعة من المعايير البيئية، بالإضافة الى بنيته التحتية ومعداته الحديثة، مجهز بشبكتين كهربائية ومعلوماتية متطورتين للتحكم والمراقبة الذكية لمختلف الموارد. يوفر الشكل الهندسي المعماري لمبنى المركز شفافية كبيرة، وذلك بفضل النوافذ الزجاجية التي تشجع الإضاءة الطبيعية، المحمية بنباتات خضراء خارجية والتي تساهم في تعديل الحرارة، حسب متطلبات دراسات الديناميكا الحرارية، أحجام على شكل وحدات وارتفاعات مثالية لضمان الارتياح الحراري للإنسان وجودة الهواء، ومرونة منافذ الدخول والخروج. مواد البناء والعوازل: ضمانا للحداثة، الجمالية والإيكولوجية، تم تسخير المهارات الحرفية العتيقة للأسلاف، ومواد بناء وعزل طبيعية مستعملة، مثل التربة الخام والخشب الممتاز لميزاتهم البيئية، التقنية والبلاستيكية",
                picture: "/images/ressources/res_01.jpg",
            },
            {
                id: 3,
                title: "محطة معالجة المياه",
                desc: "المياه، مورد طبيعي، مادة حيوية، ثمينة وأكثر ندرة في حالتها النقية. يحتم تدبيرها اليوم رعاية خاصة، وأكثر صرامة، إذ أن توفيرها ومعالجتها بشكل منهجي أمر مستعجل. ومن أجل إدماج هذ ه الضرورة، جهز مركز التربية البيئية بمحطة لمعالجة المياه العادمة، بطريقة طبيعية، تمكن المحطة من توفير مياه ري المساحات الخضراء بمركز التربية البيئية. تضاف المياه المعالجة إلى مياه الأمطار التي يتم تجميعها (عن طريق الترشيح في التربة وعبر الجريان السطحي) مما يسمح بتوفير جميع احتياجات مياه الري للمساحات الخضراء، وبالتالي الحد من استهلاك المياه الصالحة للشرب إلا للضروريات الملحة فقط",
                picture: "/images/ressources/res_04.jpg",
            },
            // {
            //     id: 4,
            //     title: "الطاحونة الهوائية الزراعية",
            //     desc: "لترسيخ المنهجية الايكولوجية المسؤولة عن التقليل من انبعاثات غازات الاحتباس الحراري، يشجع مركز التربية البيئية تنوع المصادر الطاقية المتجددة عن طريق استخدام مزيج الطاقة. ولأغراض بيداغوجية وتوضيحية، جهز مركز التربية البيئية بطاحونة هوائية زراعية معززة بتطبيق؛ إنها أداة بيداغوجية تمكن من الشرح بطريقة ممتعة مبدأ التشغيل، وكذلك مساهمة الطاقة الريحية في الحد من انبعاثات الغازات الدفيئة",
            //     picture: "/images/ressources/pure.jpg",
            // },
            {
                id: 5,
                title: "المساحات الخضراء والتنوع البيولوجي",
                desc: "يحتوي مركز التربية البيئية على مساحات خضراء مصممة على مرتفع الموقع، مما يؤهله لتبيت والحفاظ على التنوع البيولوجي المحلي الغني والمتنوع والمتوازن. تتميز هذه المساحات الخضراء بالتنمية المستدامة: هيئت الفضاءات الخضراء بطريقة طبيعية مع الحفاظ على الخصائص الأولية للموقع: التربة، المرتفعات، والأنواع النباتية...؛ المروج المزهرة، الغنية، المتنوعة والمتوازنة؛ الحدائق البيداغوجية ذات التنوع البيولوجي خاصة الأنواع المحلية؛ التربة المحترمة للبيئة التي يتم تسميدها بالسماد المنتج محليًا؛ البصمة المنخفضة للماء: توفير المياه، والسقي بالمياه التي يتم إعادة تدويرها... تساهم المساحات الخضراء بشكل إيجابي في الأداء البيئي لمركز التربية البيئية",
                picture: "/images/ressources/res_06.jpg",
            },
            {
                id: 6,
                title: "Energie photovoltaïque",
                desc: "اعتمد مركز التربية البيئية المزيج الطاقي لتعزيز الطاقات النظيفة، وتحقيق هدفه من حيث الأداء البيئي. وهكذا تمكن منطقة الطاقة الشمسية (المنطقة الضوئية) التابعة لمركز التربية البيئية من تلبية جزءً كبيرً من احتياجات الطاقة في المركز، مع الحد من انبعاثات الكربون. تعد منطقة الألواح الشمسية تجسيدا مثالياً لمهمة المركز والهدف التربوي لإنشائه، لأنها تتيح الوصول إلى الكثير من المعلومات المفيدة في ظروف الاستخدام الفعلية. يمكنكم زيارة أيضا التطبيق المخصص لمنطقة الألواح الضوئية",
                picture: "/images/ressources/res_05.jpg",
            },
            {
                id: 7,
                title: "تدبير النفايات",
                desc: "من أجل تقليل أثرها البيئي، تبنى مركز التربية البيئية إجراءات وقائية من خلال التدبير الصارم للنفايات، بهدف الحد من آثارها الضارة على الصحة البشرية والبيئة، وكذلك على إطار الحياة العامة. اعتمد مركز التربية البيئية مبدأ 4R-V لتدبير النفايات: إعادة التفكير؛ التقليص من النفايات؛ إعادة الاستخدام؛ إعادة التدوير؛ تثمين النفايات.  وهكذا تم وضع منهجية للحد من مصادر النفايات، للفرز الانتقائي لها، إعادة استخدامها وتدويرها. تفرز النفايات حسب نوعها: الورق المقوى/الورق، المعدن، البلاستيك والنفايات العضوية. ملاحظة: يتم فصل النفايات الخطرة مثل المصابيح والبطاريات عن النفايات الأخرى القابلة لإعادة التدوير. يتم تحويل النفايات العضوية (ن.ع) إلى سماد طبيعي داخل مركز التربية البيئية لاستخدامها في الحديقة النباتية. تعرف على عملية التسميد بالتفصيل عبر التطبيق المخصص لتدبير النفايات",
                picture: "/images/ressources/res_01.jpg",
            },
        ],

        welcome: [
            {
                id: 1,
                title: "افتتاح وتدشين مركز التربية البيئية",
                desc: "يقام حفل تدشين وافتتاح مركز التربية البيئية يوم 00 00 00 2019 على الساعة 00:00 مساءً في المركز من طرف صاحبة السمو الملكي الأميرة للا حسناء",
                picture: "/images/home/home1.png",
            },
            {
                id: 2,
                title: "مركز التربية البيئية",
                desc: "يقدم مركز التربية البيئية مجموعة من الأنشطة في إطار حماية البيئة. وتنظم هذه الأنشطة على شكل دورات تدريبية وزيارات تعليمية بيداغوجية، فعاليات ومؤتمرات ... يقدم المركز لعموم الناس نموذج جديد للبناء المستدام لمبنى إيكولوجي",
                picture: "/images/home/home2.png",
            },
            {
                id: 3,
                title: "آلية التتبع و المراقبة",
                desc: "يسمح نظام المراقبة الذكي لمركز التربية البيئية بتقييم مختلف المؤشرات البيئية المرتبطة بموارد المركز عبر عدة مخططات. كما يمكن هذا التقييم من اتخاذ إجراءات مناسبة للحد من الأنشطة المضرة بالبيئة",
                picture: "/images/home/home3.png",
            },
        ],

        rapport: {
            partie1: {
                title1: "معلومات عامة",
                desc1: "يقدم تقرير الأداء البيئي نظرة عامة على شكل حصيلة تدبير الموارد المتعلقة بمجموعة من المؤشرات الهامة. يهدف هذا التقرير إلى تحسين و/أو تصحيح مختلف إجراءات استخدام واستهلاك الموارد، من أجل تحقيق واحترام أهداف بناء مركز التربية البيئية.",
                title2: "مقدمة",
                desc2: "تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس، شيدت مؤسسة محمد السادس لحماية البيئة برئاسة صاحبة السمو الأميرة للا حسناء مركز التربية البيئية الذي يندرج ضمن استراتيجيتها الوطنية لحماية البيئة.",
                title3: "مركز التربية البيئية",
                desc3: "يقدم مركز التربية البيئية مجموعة من الأنشطة في إطار حماية البيئة. وتنظم هذه الأنشطة على شكل دورات تدريبية وزيارات تعليمية بيداغوجية، فعاليات ومؤتمرات ... يقدم المركز لعموم الناس نموذج جديد للبناء المستدام لمبنى إيكولوجي",
                title4: "آلية التتبع و المراقبة",
                desc4: "يسمح نظام المراقبة الذكي لمركز التربية البيئية بتقييم مختلف المؤشرات البيئية المرتبطة بموارد المركز عبر عدة مخططات. كما يمكن هذا التقييم من اتخاذ إجراءات مناسبة للحد من الأنشطة المضرة بالبيئة",
            },
            partie2: {
                title: "تعريف التقرير",
                option1: "المرجع",
                option2: "تاريخ الإصدار",
                option31: "مدة النشاط",
                option32: "أيـام",
                option41: "المكان",
                title3: "مركز التربية البيئية",
            },
            partie3: {
                title: "التوزيع",
                option1: {
                    diff_1: "سري",
                    diff_2: "توزيع محدود",
                    diff_3: "توزيع عمومي",
                    diff_4: "اخر",
                },
                option2: "ملاحظة",
                option3: "صدر من طرف",
                option4: "مرخص ل",
            },
            Element_1: "مؤشرات ضمن التقرير",
            Element_2: "نسخ التقرير",
        },
    },
]
