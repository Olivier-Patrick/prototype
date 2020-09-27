// ------------------------------------
// Settings for text content language
// ------------------------------------

export const lang = [
    {
        title: "Monitoring du Centre d'Education à l'Environnement - FM6E",

        AppBar: {
            Menu: [
                { label: "Accueil" },
                { label: "Indicateurs" },
                { label: "Ressources" },
            ]
        },

        SideBar: {
            title: "Performances environnementales",
            desc: "Aperçu général sur les performances environnementales des derniers sept jours",
            indic_1: {
                title: "Eau :",
                unit: " m3"
            },
            indic_2: {
                title: "Eau recyclée :",
                unit: " m3"
            },
            indic_3: {
                title: "Energie :",
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
            desc: "Les indicateurs des énergies renseignent sur la quantité d'énergie consommée par les équipements du CEE à savoir : les équipements de confort Climatisation-Chauffage-Ventilation, les prises éléctriques et l'éclairage. Ils indiquent aussi la quantité d'énergie renouvelable produite par la ferme solaire du CEE.",
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
                desc: "Energie consomée Conventionnelle VS. Renouvelable",
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
            desc: "Cet indicateur affiche la quantité d'eau potable consommée dans le CEE ainsi que la quantité d'eau recyclée par la station de traitement des eaux usées et récupérées.",
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
                comment: "Non potable mais bonne pour l’arrosage"

            },

            indic_5: {
                title: "Qualité d’eau en provenance du réseau national",
                comment: "Potable, très bonne pour la consommation quotidienne"

            },
        },

        Waste: {
            name: "Déchets",
            title: "Indicateurs des déchets",
            desc: "La poubelle du CEE permet le tri des déchets selon leurs catégories. Ce tri aide à la collecte des différentes informations ci-dessous.",
            indic_1: {
                title: "Recyclage",
                desc: "Poids des déchets recyclables (Kg)",
                list: [Verre, Metal, Plastique],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Poids des déchets compostables (Kg)",
                list: [Organique, Papier],
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
                desc: "Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage.",
            },
        },


        recyclable: {
            name: "Recyclage",
            title: "Indicateur de recyclage",
            desc: "Les déchets organiques sont transformés en composites tandis que le reste des déchets sont confiés aux filiales de recyclage.",
            indic_1: {
                title: "Recyclage",
                desc: "Déchets recyclés (Kg)",
                list: [Verre, Metal, Plastique],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: [Organique, Papier],
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
            desc: "Cet indicateur a pour objectif de définir le degré de la contribution des moyens de transport dans la pollution de l'air.",
            indic_1: {
                title: "Bilan carbone du transport",
                desc: "Bilan carbone du transport (Kg équi. CO2)",
                list: [Voiture, Train, tramway, 'Bus urbain', 'Deux roues'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: [Organique, Papier],
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

        Air: {
            name: "Air",
            title: "Indicateur de la Qualité d'air",
            desc: "L'indicateur de la qualité d'air affiche les différentes valeurs mesurées et instantanées de la température, de l'humidité et de la quantité des particules CO2 dans l'air, ainsi que les variations de ces paramétres dans les diverses périodes souhaitées.",
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
            indic_1: {
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
            indic_1: {
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
            desc: "Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement.",
            indic_1: {
                title: "Radar des performances",
                Element_1: {
                    label: "Déchets",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "Eau",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "Energie",
                    unit: " KgCO2"
                },
                Element_4: {
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
                desc: "Le centre du graphe du Radar renvoi vers la valeur minimale 0. Plus les zones sont de couleur verte, plus les émissions du CO2 sont basses, plus elles sont blanches plus les émissions en CO2 sont élevées."
            },
            indic_4: {
                title: "Le jardin botanique du Centre de l’éducation à l’environnement contient différentes espèces végétales identifiées en collection. Ce jardin a pour mission principale la conservation de la biodiversité, notamment des espèces locales, l'amélioration de la qualité de l'air en absorbant les GES, ainsi qu'une mission d'information et da sensibilisation à la protection de l'environnement du public.",
            },
        },

    },




    {
        title: "تتبع ومراقبة المركز التربوي للبيئة – مؤسسة محمد السادس للبيئة",

        AppBar: {
            Menu: [
                { label: "الرئيسية" },
                { label: "المؤشرات" },
                { label: "الموارد" },
            ]
        },

        SideBar: {
            title: "الأداء البيئي",
            desc: "Aperçu général sur les performances environnementales des derniers sept jours",
            indic_1: {
                title: "Eau :",
                unit: " m3"
            },
            indic_2: {
                title: "Eau recyclée :",
                unit: " m3"
            },
            indic_3: {
                title: "Energie :",
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
            desc: "Les indicateurs des énergies renseignent sur la quantité d'énergie consommée par les équipements du CEE à savoir : les équipements de confort Climatisation-Chauffage-Ventilation, les prises éléctriques et l'éclairage. Ils indiquent aussi la quantité d'énergie renouvelable produite par la ferme solaire du CEE.",
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
                desc: "Energie consomée Conventionnelle VS. Renouvelable",
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
            desc: "Cet indicateur affiche la quantité d'eau potable consommée dans le CEE ainsi que la quantité d'eau recyclée par la station de traitement des eaux usées et récupérées.",
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
                comment: "Non potable mais bonne pour l’arrosage"

            },

            indic_5: {
                title: "Qualité d’eau en provenance du réseau national",
                comment: "Potable, très bonne pour la consommation quotidienne"

            },
        },

        Waste: {
            name: "Déchets",
            title: "Indicateurs des déchets",
            desc: "La poubelle du CEE permet le tri des déchets selon leurs catégories. Ce tri aide à la collecte des différentes informations ci-dessous.",
            indic_1: {
                title: "Recyclage",
                desc: "Poids des déchets recyclables (Kg)",
                list: [Verre, Metal, Plastique],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Poids des déchets compostables (Kg)",
                list: [Organique, Papier],
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
                desc: "Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage.",
            },
        },


        recyclable: {
            name: "Recyclage",
            title: "Indicateur de recyclage",
            desc: "Les déchets organiques sont transformés en composites tandis que le reste des déchets sont confiés aux filiales de recyclage.",
            indic_1: {
                title: "Recyclage",
                desc: "Déchets recyclés (Kg)",
                list: [Verre, Metal, Plastique],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: [Organique, Papier],
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
            desc: "Cet indicateur a pour objectif de définir le degré de la contribution des moyens de transport dans la pollution de l'air.",
            indic_1: {
                title: "Bilan carbone du transport",
                desc: "Bilan carbone du transport (Kg équi. CO2)",
                list: [Voiture, Train, tramway, 'Bus urbain', 'Deux roues'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: [Organique, Papier],
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

        Air: {
            name: "Air",
            title: "Indicateur de la Qualité d'air",
            desc: "L'indicateur de la qualité d'air affiche les différentes valeurs mesurées et instantanées de la température, de l'humidité et de la quantité des particules CO2 dans l'air, ainsi que les variations de ces paramétres dans les diverses périodes souhaitées.",
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
            indic_1: {
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
            indic_1: {
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
            desc: "Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement.",
            indic_1: {
                title: "Radar des performances",
                Element_1: {
                    label: "Déchets",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "Eau",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "Energie",
                    unit: " KgCO2"
                },
                Element_4: {
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
                desc: "Le centre du graphe du Radar renvoi vers la valeur minimale 0. Plus les zones sont de couleur verte, plus les émissions du CO2 sont basses, plus elles sont blanches plus les émissions en CO2 sont élevées."
            },
            indic_4: {
                title: "Le jardin botanique du Centre de l’éducation à l’environnement contient différentes espèces végétales identifiées en collection. Ce jardin a pour mission principale la conservation de la biodiversité, notamment des espèces locales, l'amélioration de la qualité de l'air en absorbant les GES, ainsi qu'une mission d'information et da sensibilisation à la protection de l'environnement du public.",
            },
        },

    },
]