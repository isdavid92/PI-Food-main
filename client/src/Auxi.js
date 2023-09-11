const aux = [
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 9,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3,
        "healthScore": 23,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 560.51,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "1lb of anchovies cleaned, spine removed",
                "originalName": "anchovies cleaned, spine removed",
                "amount": 1.0,
                "unit": "lb",
                "meta": [
                    "cleaned"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "1lb of anchovies cleaned, spine removed",
                "originalName": "anchovies cleaned, spine removed",
                "amount": 1.0,
                "unit": "lb",
                "meta": [
                    "cleaned"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18369,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "baking powder",
                "nameClean": "baking powder",
                "original": "1 teaspoon of baking powder",
                "originalName": "baking powder",
                "amount": 1.0,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "egg",
                "nameClean": "egg",
                "original": "1 egg",
                "originalName": "egg",
                "amount": 1.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "1 cup of flour",
                "originalName": "flour",
                "amount": 1.0,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 125.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 99226,
                "aisle": "Spices and Seasonings",
                "image": "fresh-sage.png",
                "consistency": "SOLID",
                "name": "sage",
                "nameClean": "sage",
                "original": "sage leaves (optional - if you are not a fan of sage just omit)",
                "originalName": "sage (optional - if you are not a fan of sage just omit)",
                "amount": 1.0,
                "unit": "leaves",
                "meta": [
                    "(optional - if you are not a fan of sage just omit)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "leaf",
                        "unitLong": "leave"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "leaf",
                        "unitLong": "leave"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "1 teaspoon of salt",
                "originalName": "salt",
                "amount": 1.0,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 14121,
                "aisle": "Beverages",
                "image": "sparkling-water.png",
                "consistency": "LIQUID",
                "name": "seltzer water",
                "nameClean": "sparkling water",
                "original": "seltzer water",
                "originalName": "seltzer water",
                "amount": 3.0,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 4669,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "vegetable oil",
                "nameClean": "vegetable oil",
                "original": "vegetable oil for frying",
                "originalName": "vegetable oil for frying",
                "amount": 3.0,
                "unit": "servings",
                "meta": [
                    "for frying"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            }
        ],
        "id": 1,
        "title": "Fried Anchovies with Sage",
        "readyInMinutes": 45,
        "servings": 3,
        "sourceUrl": "http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html",
        "image": "https://spoonacular.com/recipeImages/1-556x370.jpg",
        "imageType": "jpg",
        "summary": "Fried Anchovies with Sage might be a good recipe to expand your main course collection. Watching your figure? This dairy free and pescatarian recipe has <b>396 calories</b>, <b>37g of protein</b>, and <b>12g of fat</b> per serving. This recipe serves 3. For <b>$5.61 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from latavolamarcherecipebox.blogspot.com requires anchovies, baking powder, salt, and vegetable oil. This recipe is liked by 3 foodies and cooks. Taking all factors into account, this recipe <b>earns a spoonacular score of 75%</b>, which is solid. <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1189555\">Fried Anchovies with Sage</a>, <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1355669\">Fried Anchovies with Sage</a>, and <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1201577\">Fried Anchovies with Sage</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Anchovies works really well with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. You could try Blanc de Bleu Cuvee Mousseux. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 16 dollars per bottle.",
            "productMatches": [
                {
                    "id": 436158,
                    "title": "Blanc de Bleu Cuvee Mousseux",
                    "description": "Blanc de Bleu is a premium California Chardonnay wine with an added hint of blueberries and is a delicate sparkling wine reserved for memorable celebrations. It offers seductive flavors and fresh aromatic effervescence - vividly pasteled with blueberries. All of this is contained in an impressively sexy bottle with tasteful flair.The fruit for Blanc de Bleu is grown in the quiet vineyards of Northern California, known for their cool and clear breezes - ideal conditions for the exclusive grapes and soils that accentuate the profoundly flavorful characteristics. This sparkling wine pairs well with appetizers, sushi and very light meals.",
                    "price": "$15.989999771118164",
                    "imageUrl": "https://spoonacular.com/productImages/436158-312x231.jpg",
                    "averageRating": 0.8399999737739563,
                    "ratingCount": 25.0,
                    "score": 0.8268420790371142,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fblanc-de-bleu-cuvee-mousseux%2F140728"
                }
            ]
        },
        "instructions": "<p>If you have not tried anchovies before - you must try them now! Get over any weird apprehensions or that its just bait or a punchline for a joke about pizza (\"extra anchovies\")! These little suckers are delicious &amp; actually good for you! Baked, fried &amp; grilled - they are ohh so good and worth a try. If your not up to it, then pass me your plate because I love'em!Here is my favorite - Fried Anchovies - the recipe below adds a sage leave to each piece of fish as well for an extra burst of flavor &amp; color.Fried Anchovies with SageAcciughe fritte con Salvia1lb of anchovies cleaned, spine removedsage leaves (optional - if you are not a fan of sage just omit)batter1 cup of flour1 egg1 teaspoon of salt1 teaspoon of baking powderseltzer watervegetable oil for fryingIn a bowl combine flour, eggs, salt &amp; baking powder. Slowly add in seltzer water &amp; mix until forms a thin batter. Cover with plastic &amp; set in the fridge for at least an hour.Heat oil in a pot to 350 degree.Remove batter from fridge and mix once or twice (batter will have separated).Take a sage leaf &amp; anchovy put them together &amp; dip into the batter - allowing access batter to drip off.Fry 20 seconds a side until golden brown.Remove from oil &amp; drain on a paper towel.Sprinkle with salt &amp; serve immediately.Pairs great with prosecco or white wine.</p>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "If you have not tried anchovies before - you must try them now! Get over any weird apprehensions or that its just bait or a punchline for a joke about pizza (\"extra anchovies\")! These little suckers are delicious &amp; actually good for you!",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 0,
                                "name": "lollipops",
                                "localizedName": "lollipops",
                                "image": "no.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Baked, fried &amp; grilled - they are ohh so good and worth a try. If your not up to it, then pass me your plate because I love'em!Here is my favorite - Fried Anchovies - the recipe below adds a sage leave to each piece of fish as well for an extra burst of flavor &amp; color.Fried Anchovies with Sage",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 10115261,
                                "name": "fish",
                                "localizedName": "fish",
                                "image": "fish-fillet.jpg"
                            },
                            {
                                "id": 99226,
                                "name": "sage",
                                "localizedName": "sage",
                                "image": "fresh-sage.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Acciughe fritte con Salvia1lb of anchovies cleaned, spine removedsage leaves (optional - if you are not a fan of sage just omit)batter1 cup of flour1 egg1 teaspoon of salt1 teaspoon of baking powderseltzer watervegetable oil for frying",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 99226,
                                "name": "sage",
                                "localizedName": "sage",
                                "image": "fresh-sage.png"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "In a bowl combine flour, eggs, salt &amp; baking powder. Slowly add in seltzer water &amp; mix until forms a thin batter. Cover with plastic &amp; set in the fridge for at least an hour.",
                        "ingredients": [
                            {
                                "id": 18369,
                                "name": "baking powder",
                                "localizedName": "baking powder",
                                "image": "white-powder.jpg"
                            },
                            {
                                "id": 14121,
                                "name": "sparkling water",
                                "localizedName": "sparkling water",
                                "image": "sparkling-water.png"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Heat oil in a pot to 350 degree.",
                        "ingredients": [
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Remove batter from fridge and mix once or twice (batter will have separated).Take a sage leaf &amp; anchovy put them together &amp; dip into the batter - allowing access batter to drip off.Fry 20 seconds a side until golden brown.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 99226,
                                "name": "sage",
                                "localizedName": "sage",
                                "image": "fresh-sage.png"
                            },
                            {
                                "id": 0,
                                "name": "dip",
                                "localizedName": "dip",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Remove from oil &amp; drain on a paper towel.",
                        "ingredients": [
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 405895,
                                "name": "paper towels",
                                "localizedName": "paper towels",
                                "image": "paper-towels.jpg"
                            }
                        ]
                    },
                    {
                        "number": 8,
                        "step": "Sprinkle with salt &amp; serve immediately.Pairs great with prosecco or white wine.",
                        "ingredients": [
                            {
                                "id": 14106,
                                "name": "white wine",
                                "localizedName": "white wine",
                                "image": "white-wine.jpg"
                            },
                            {
                                "id": 0,
                                "name": "prosecco",
                                "localizedName": "prosecco",
                                "image": "champagne.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "report": null,
        "tips": {
            "health": [
                "If you're worried about cholesterol and heart disease, you may have heard you should limit your egg consumption to one egg per day or eat only egg whites. However, new research suggests you might go ahead and eat your whole eggs. It turns out egg yolk contains valuable nutrients (the cartenoids that make it yellow are great for eye health, folic acid is great for brain health, and it has vitamins A, E, D, and K) and <a href=\"https://spoonacular.com/academy/cholesterol\">dietary cholesterol</a> seems to have little influence on blood cholesterol levels.",
                "You can easily swap half of the white flour in most recipes for whole wheat flour to add some fiber and protein. It does result in a heavier dough, so for cookies, cakes, etc., you might try swapping in whole wheat pastry flour.",
                "Although the body needs salt to survive, most of us get too much. The problem with consuming too much salt (what chemists call \"sodium chloride\") is actually the <a href=\"https://spoonacular.com/academy/sodium\">sodium</a> part, which is why people concerned about high blood pressure go on low-sodium diets. If you are trying to reduce salt in your diet, you can try salt substitutes like potassium chloride or try to make do with less salt by using more black pepper, herbs, and spices."
            ],
            "price": [],
            "cooking": [],
            "green": [
                "Choose free range or organic eggs whenever possible! Even though they are more expensive, eggs are generally cheap to begin with, and eggs from cage-free chickens are worth the extra cost."
            ]
        },
        "openLicense": 0,
        "suspiciousDataScore": 0.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 1,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 0,
        "healthScore": 4,
        "creditsText": "bla5@bla.com",
        "sourceName": "The Kitchn",
        "pricePerServing": 82.06,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "marinated anchovies",
                "nameClean": "boquerones",
                "original": "6 oz marinated anchovies",
                "originalName": "marinated anchovies",
                "amount": 6.0,
                "unit": "oz",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 170.097,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "marinated anchovies",
                "nameClean": "boquerones",
                "original": "6 oz marinated anchovies",
                "originalName": "marinated anchovies",
                "amount": 6.0,
                "unit": "oz",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 170.097,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18064,
                "aisle": "Bakery/Bread",
                "image": "white-bread.jpg",
                "consistency": "SOLID",
                "name": "day-old bread",
                "nameClean": "bread",
                "original": "2 oz day-old bread",
                "originalName": "day-old bread",
                "amount": 2.0,
                "unit": "oz",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 56.699,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10211215,
                "aisle": "Produce",
                "image": "garlic.jpg",
                "consistency": "SOLID",
                "name": "garlic clove",
                "nameClean": "whole garlic cloves",
                "original": "1/2 garlic clove",
                "originalName": "garlic clove",
                "amount": 0.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil plus",
                "nameClean": "olive oil",
                "original": "2 tsps olive oil plus 1/4 for drizzling",
                "originalName": "olive oil plus 1/4 for drizzling",
                "amount": 2.0,
                "unit": "tsps",
                "meta": [
                    "for drizzling"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11291,
                "aisle": "Produce",
                "image": "spring-onions.jpg",
                "consistency": "SOLID",
                "name": "scallions",
                "nameClean": "spring onions",
                "original": "2 whole scallions, julienned",
                "originalName": "whole scallions, julienned",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "whole",
                    "julienned"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            }
        ],
        "id": 2,
        "title": "Anchovies Appetizer With Breadcrumbs & Scallions",
        "author": "bla5@bla.com",
        "readyInMinutes": 15,
        "servings": 8,
        "sourceUrl": "http://www.thekitchn.com/other-two-veg-recipes-notes-85779",
        "image": "https://spoonacular.com/recipeImages/2-556x370.jpg",
        "imageType": "jpg",
        "summary": "Anchovies Appetizer With Breadcrumbs & Scallions is a <b>dairy free and pescatarian</b> hor d'oeuvre. This recipe makes 8 servings with <b>57 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b> each. For <b>82 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up scallions, day-old bread, garlic clove, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>15 minutes</b>. It is brought to you by spoonacular user <a href=\"/profile/bla5@bla.com\">bla5@bla.com</a>. Try <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-68\">Spaghetti with Anchovies and Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-1228193\">Spaghetti with Anchovies and Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627\">Broccoli Rabe with Anchovies and Breadcrumbs</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are great choices for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The Berlucchi Franciacorta '61 Extra Brut with a 4.3 out of 5 star rating seems like a good match. It costs about 34 dollars per bottle.",
            "productMatches": [
                {
                    "id": 13029339,
                    "title": "Berlucchi Franciacorta '61 Extra Brut",
                    "description": "Extra Brut '61 is a tribute to the birth of Franciacorta in 1961—the year Berlucchi produced the first of this classic method sparkling wine. This fun and lively sparkler offers citrus fruit and a crisp, clean finish.Blend: 85% Chardonnay, 15% Pinot Nero*The label for Franciacorta '61 Extra Brut is in the process of changing. You may receive either of these two labels featured above. Specific labels cannot be requested.",
                    "price": "$33.9900016784668",
                    "imageUrl": "https://spoonacular.com/productImages/13029339-312x231.jpg",
                    "averageRating": 0.8600000143051147,
                    "ratingCount": 6.0,
                    "score": 0.8073684353577464,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fsoter-vineyards-north-valley-reserve-pinot-noir-2012%2F147401"
                }
            ]
        },
        "instructions": "<ol><li>Preheat oven to 400 F.</li><li>Remove crusts from bread and cut into bite-sized croutons.</li><li>Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil.</li><li> Rub croutons in oil until they absorb it all. </li><li>Bake for 7-10 minutes or until deep golden brown. </li><li>Remove and set aside.</li><li>Slice anchovies in thirds. </li><li>Toss with scallions. </li><li>Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat oven to 400 F.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 400.0,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Remove crusts from bread and cut into bite-sized croutons.Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil. Rub croutons in oil until they absorb it all.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 18242,
                                "name": "croutons",
                                "localizedName": "croutons",
                                "image": "croutons.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            },
                            {
                                "id": 1012034,
                                "name": "dry seasoning rub",
                                "localizedName": "dry seasoning rub",
                                "image": "seasoning.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Bake for 7-10 minutes or until deep golden brown.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Remove and set aside.Slice anchovies in thirds. Toss with scallions. Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 11291,
                                "name": "green onions",
                                "localizedName": "green onions",
                                "image": "spring-onions.jpg"
                            },
                            {
                                "id": 18242,
                                "name": "croutons",
                                "localizedName": "croutons",
                                "image": "croutons.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404781,
                                "name": "ramekin",
                                "localizedName": "ramekin",
                                "image": "ramekin.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "report": "hi",
        "tips": {
            "health": [
                "If you're following a gluten-free diet, make sure your bread (and all other ingredients) is truly gluten free."
            ],
            "price": [],
            "cooking": [
                "If you're using olive oil to cook at high temperatures, make sure that the olive oil you're using has a high smoke point because heating an oil past its smoke point can ruin the flavor and even release harmful compounds into your dish. Many people recommend saving extra-virgin olive oil for cold dishes or for adding the finishing touch to a warm dish. You could also use canola oil, coconut oil, or another good <a href=\"https://spoonacular.com/academy/vegetable-oil\">high-temperature oil</a> to be on the safe side."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 0.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 28,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 0,
        "healthScore": 43,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 279.64,
        "extendedIngredients": [
            {
                "id": 93647,
                "aisle": "Pasta and Rice",
                "image": "pastina.jpg",
                "consistency": "SOLID",
                "name": "sale e pepe",
                "nameClean": "pastina",
                "original": "Sale e pepe",
                "originalName": "Sale e pepe",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consistency": "SOLID",
                "name": "almonds",
                "nameClean": "almonds",
                "original": "A handful of almonds",
                "originalName": "almonds",
                "amount": 1.0,
                "unit": "handful",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "4/5 Anchovies (or Sardines)",
                "originalName": "Anchovies (or Sardines)",
                "amount": 0.8,
                "unit": "",
                "meta": [
                    "(or Sardines)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "4/5 Anchovies (or Sardines)",
                "originalName": "Anchovies (or Sardines)",
                "amount": 0.8,
                "unit": "",
                "meta": [
                    "(or Sardines)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "pealed carrots",
                "nameClean": "carrot",
                "original": "2 raw pealed carrots",
                "originalName": "raw pealed carrots",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consistency": "SOLID",
                "name": "quarter of a cauliflower",
                "nameClean": "cauliflower",
                "original": "A quarter of a raw cauliflower",
                "originalName": "A quarter of a raw cauliflower",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "Extra virgin olive oil",
                "originalName": "Extra virgin olive oil",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "dressing: extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "Dressing: Extra virgin olive oil, Salt and pepper, 3 Tbs Lemon juice",
                "originalName": "Dressing: Extra virgin olive oil, Salt and pepper, Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "lemon juice",
                "nameClean": "lemon juice",
                "original": "3 Tbs Lemon juice",
                "originalName": "Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 11959,
                "aisle": "Produce",
                "image": "arugula-or-rocket-salad.jpg",
                "consistency": "SOLID",
                "name": "rocket",
                "nameClean": "arugula",
                "original": "Rocket (arugula) 50gr",
                "originalName": "Rocket (arugula)",
                "amount": 50.0,
                "unit": "gr",
                "meta": [
                    "(arugula)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.764,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 50.0,
                        "unitShort": "gr",
                        "unitLong": "grs"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 3,
        "title": "Carrots, Cauliflower And Anchovies",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html",
        "image": "https://spoonacular.com/recipeImages/3-556x370.jpg",
        "imageType": "jpg",
        "summary": "Carrots, Cauliflower And Anchovies might be just the main course you are searching for. For <b>$2.8 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. Watching your figure? This dairy free and pescatarian recipe has <b>943 calories</b>, <b>17g of protein</b>, and <b>73g of fat</b> per serving. A mixture of sale e pepe, quarter of a cauliflower, extra virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by saladpride.blogspot.com. With a spoonacular <b>score of 83%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrots-cauliflower-and-anchovies-1228191\">Carrots, Cauliflower And Anchovies</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-anchovies-and-tomatoes-23\">Cauliflower, Anchovies and Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/orecchiette-with-cauliflower-anchovies-and-pistachios-1228731\">Orecchiette with Cauliflower, Anchovies and Pistachios</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are great choices for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. One wine you could try is Famille Vincent Cremant de Bourgogne. It has 4 out of 5 stars and a bottle costs about 24 dollars.",
            "productMatches": [
                {
                    "id": 13029551,
                    "title": "Famille Vincent Cremant de Bourgogne",
                    "description": "From the Chardonnay grapes this sparkler allies freshness, body, and smoothness. The Cremant Brut is dry and offers fine bubbles (1.5 Million/30 minutes - we counted them but you do not have to believe me for this!), hints of flowers at the nose, crisp and fruity on the palate. It is a great Classic for all festive occasions.",
                    "price": "$23.989999771118164",
                    "imageUrl": "https://spoonacular.com/productImages/13029551-312x231.jpg",
                    "averageRating": 0.800000011920929,
                    "ratingCount": 88.0,
                    "score": 0.7962264270152686,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffamille-vincent-cremant-de-bourgogne%2F166470"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "You can easily replace regular noodles with whole wheat noodles to add a little extra fiber, protein, vitamins, and minerals to this dish. Just don't make the mistake of assuming that because the pasta is whole wheat, you can eat as much as you want. The calories and the <a href=\"http://www.quickanddirtytips.com/health-fitness/healthy-eating/truth-about-whole-grains?page=all\">effect on your blood sugar</a> is not so drastically different! "
            ],
            "price": [],
            "cooking": [
                "The best method for cooking pasta is pretty controversial, but most sources seem to reach a consensus. Check out our lesson on <a href=\"https://spoonacular.com/academy/how-to-cook-pasta\">how to cook pasta</a> in the academy.",
                "The average fresh lemon contains between 2 to 3 tablespoons of lemon juice (just in case you are substituting bottled lemon juice).",
                "Carrots can be stored in the fridge for 2 to 3 weeks. The starch in the carrots will turn to sugar over time, but this is not a problem, they'll just taste sweeter. The academy lesson about <a href=\"https://spoonacular.com/academy/carrots\">carrots</a> contains more useful information.",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking.",
                "Fresh cauliflower should be white without any discoloration. If its leaves are attached, they should be green and not wilty. Store cauliflower in the crisper in your fridge and use within 5-7 days."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 13,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 11,
        "healthScore": 22,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 415.91,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "tiny anchovies",
                "nameClean": "boquerones",
                "original": "150g tiny dried anchovies",
                "originalName": "tiny dried anchovies",
                "amount": 150.0,
                "unit": "g",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 5.291,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 150.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "tiny anchovies",
                "nameClean": "boquerones",
                "original": "150g tiny dried anchovies",
                "originalName": "tiny dried anchovies",
                "amount": 150.0,
                "unit": "g",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 5.291,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 150.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18369,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "turn the heat back on and stir",
                "nameClean": "baking powder",
                "original": "4. Turn the heat back on and stir for another 3-4 minutes.",
                "originalName": "Turn the heat back on and stir for another 3-4 minutes",
                "amount": 4.0,
                "unit": "",
                "meta": [
                    "for another 3-4 minutes."
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 4582,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "cooking oil",
                "nameClean": "cooking oil",
                "original": "2 T cooking oil",
                "originalName": "cooking oil",
                "amount": 2.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 4669,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "heat a frying pan",
                "nameClean": "vegetable oil",
                "original": "1. Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes.",
                "originalName": "Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes",
                "amount": 1.0,
                "unit": "",
                "meta": [
                    "with the oil on medium heat. add the anchovies and mix around for a couple minutes."
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "add garlic",
                "nameClean": "garlic",
                "original": "2. Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant.",
                "originalName": "Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "toasted",
                    "for another minute until the garlic and ginger is fragrant."
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "2 T sliced garlic",
                "originalName": "sliced garlic",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2021,
                "aisle": "Spices and Seasonings",
                "image": "ginger.png",
                "consistency": "SOLID",
                "name": "ground ginger",
                "nameClean": "ginger powder",
                "original": "1/2 ground ginger",
                "originalName": "ground ginger",
                "amount": 0.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10112155,
                "aisle": "Baking",
                "image": "walnuts.jpg",
                "consistency": "SOLID",
                "name": "pine nuts",
                "nameClean": "walnut pieces",
                "original": "2 T toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                "originalName": "toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "with chopped walnuts and pumpkin seed and it was yummy)",
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 9279,
                "aisle": "Produce",
                "image": "plum.jpg",
                "consistency": "SOLID",
                "name": "plum extract",
                "nameClean": "purple plum",
                "original": "1.5 t plum extract",
                "originalName": "plum extract",
                "amount": 1.5,
                "unit": "t",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 93784,
                "aisle": "Baking",
                "image": "corn-syrup.png",
                "consistency": "SOLID",
                "name": "korean cooking syrup",
                "nameClean": "brown rice syrup",
                "original": "1 T Korean cooking syrup",
                "originalName": "Korean cooking syrup",
                "amount": 1.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 93784,
                "aisle": "Baking",
                "image": "corn-syrup.png",
                "consistency": "SOLID",
                "name": "turn off the heat. add the cooking syrup",
                "nameClean": "brown rice syrup",
                "original": "3. Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around.",
                "originalName": "Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around",
                "amount": 3.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 12023,
                "aisle": "Ethnic Foods",
                "image": "sesame-seeds.png",
                "consistency": "SOLID",
                "name": "sesame seeds",
                "nameClean": "sesame seeds",
                "original": "2 T toasted sesame seeds",
                "originalName": "toasted sesame seeds",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 2.25,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.25,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1 T sugar",
                "originalName": "sugar",
                "amount": 1.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 12023,
                "aisle": "Ethnic Foods",
                "image": "sesame-seeds.png",
                "consistency": "SOLID",
                "name": "sprinkle",
                "nameClean": "sesame seeds",
                "original": "5. Sprinkle with sesame seeds.",
                "originalName": "Sprinkle with sesame seeds",
                "amount": 5.0,
                "unit": "",
                "meta": [
                    "with sesame seeds."
                ],
                "measures": {
                    "us": {
                        "amount": 5.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 5.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            }
        ],
        "id": 4,
        "title": "Bap Story: Stir Fried Anchovies (Myulchi Bokkeum)",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html",
        "image": "https://spoonacular.com/recipeImages/4-556x370.jpg",
        "imageType": "jpg",
        "summary": "If you have around <b>45 minutes</b> to spend in the kitchen, Bap Story: Stir Fried Anchovies (Myulchi Bokkeum) might be a spectacular <b>gluten free, dairy free, and pescatarian</b> recipe to try. One portion of this dish contains roughly <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>441 calories</b>. For <b>$4.16 per serving</b>, you get a main course that serves 2. A mixture of heat a frying pan, pine nuts, sesame seeds, and a handful of other ingredients are all it takes to make this recipe so yummy. A couple people made this recipe, and 11 would say it hit the spot. It is brought to you by bapstory.blogspot.com. With a spoonacular <b>score of 94%</b>, this dish is amazing. Try <a href=\"https://spoonacular.com/recipes/bap-story-spicy-octopus-over-rice-nakji-dup-bap-36524\">Bap Story: Spicy Octopus Over Rice (Nakji Dup Bap)</a>, <a href=\"https://spoonacular.com/recipes/dinner-tonight-stir-fried-squid-ojinguh-bokkeum-199338\">Dinner Tonight: Stir-Fried Squid (Ojinguh Bokkeum)</a>, and <a href=\"https://spoonacular.com/recipes/jeyuk-bokkeum-korean-spicy-pork-stir-fry-567345\">Jeyuk-Bokkeum (Korean Spicy Pork Stir-Fry)</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Anchovies works really well with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. One wine you could try is Perrier-Jouet Grand Brut. It has 4.3 out of 5 stars and a bottle costs about 57 dollars.",
            "productMatches": [
                {
                    "id": 430436,
                    "title": "Perrier-Jouet Grand Brut",
                    "description": "The striking freshness and vivacity of the floral and fruity fragrances (yellow fruits and fresh fruits) take root, before giving way to subtle notes of vanilla and butter, lending the wine a fruity and consistent character. The notes of cherry plum, lemon and bergamot orange emerge first, then make way for the flowers of fruit trees, such as lime and honeysuckle. These are followed by notes of butter, madeleine cakes and vanilla sugar. Lingering notes of grapefruit, white peaches, green pears, apple trees and green hazelnuts round off the taste.",
                    "price": "$57.0",
                    "imageUrl": "https://spoonacular.com/productImages/430436-312x231.jpg",
                    "averageRating": 0.8600000143051147,
                    "ratingCount": 36.0,
                    "score": 0.8508257023785093,
                    "link": "https://www.amazon.com/Perrier-Jou%C3%ABt-Champagne-France-Grand-750ml/dp/B072W5LQKS?tag=spoonacular-20"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "Before you pass up garlic because you don't want the bad breath that comes with it, keep in mind that the compounds that cause garlic breath also offer a lot of health benefits. Garlic has anti-inflammatory, antioxidant, antibacterial, and antiviral properties. If you really want to get the most health benefits out of your garlic, choose Spanish garlic, which contains the most allicin (one of garlic's most beneficial compounds).",
                "Be conscious of your choice of <a href=\"https://spoonacular.com/academy/vegetable-oil\">cooking oils</a>. Some studies have shown that vegetable oils like safflower oil, sunflower oil, and canola oil might actually <a href=\"http://www.ctvnews.ca/health/some-vegetable-oils-may-increase-risk-of-heart-disease-1.1537586\">contribute to heart disease</a>. Olive oil is a good alternative for low temperature cooking, while coconut oil is a recent favorite for high temperature cooking. Do your research!",
                "If you're trying to <a href=\"https://spoonacular.com/academy/sugar-nutrient\">cut back on sugar</a>, consider replacing some of the sugar in this recipe with a sweetener like Stevia or Splenda. If you're against these kinds of sweeteners, start reducing the amount of real sugar you use until your tastebuds adjust. "
            ],
            "price": [],
            "cooking": [
                "Here's a trick for peeling garlic quickly. Put the garlic clove on your cutting board. Take a knife with a thick blade and place the blade flat across the garlic clove (the clove should be closer to the handle than the middle of the blade). Whack down on the flat side of the blade with your free hand to smoosh the garlic a bit. Done correctly, the skin will peel right off."
            ],
            "green": [
                "According to the Non-GMO Project, about 90% of the canola oil in the United States is made from genetically modified rapeseed, so if this issue is important to you be sure to buy certified organic or certified GMO-free canola oil!"
            ]
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [
            {
                "name": "sprinkle",
                "longName": "sprinkle",
                "amount": 5.0,
                "unit": "",
                "originalString": "5. Sprinkle with sesame seeds.",
                "originalStringClean": "sprinkle",
                "originalName": "Sprinkle with sesame seeds",
                "metaInformation": [
                    "with sesame seeds."
                ],
                "sourceLanguage": "ENGLISH",
                "id": -1,
                "aisle": null,
                "image": null,
                "consistency": "SOLID",
                "ontologyName": null,
                "amountAndUnitMetric": null,
                "amountAndUnitUs": null,
                "ingredientId": null,
                "comparableName": "sprinkle",
                "nutritionId": null,
                "pricePerAmount": 0.0,
                "amountForPrice": null,
                "price": 0.0,
                "sustainable": false,
                "vegetarian": false,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "nutrients": {},
                "foodProperties": {},
                "flavonoids": {},
                "possibleUnits": [],
                "ontologyConcept": null,
                "relevance": 10.0,
                "refuse": 0.0,
                "multiplier": 1.0,
                "immutable": false,
                "amountWithUnit": "5",
                "unitLong": "",
                "unitShort": "",
                "metaInformationForDb": "with sesame seeds."
            }
        ],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 4,
        "gaps": "no",
        "preparationMinutes": 5,
        "cookingMinutes": 0,
        "aggregateLikes": 0,
        "healthScore": 0,
        "creditsText": "Jul's Kitchen",
        "sourceName": "Jul's Kitchen",
        "pricePerServing": 25.57,
        "extendedIngredients": [
            {
                "id": 18064,
                "aisle": "Bakery/Bread",
                "image": "white-bread.jpg",
                "consistency": "SOLID",
                "name": "tuscan bread",
                "nameClean": "bread",
                "original": "sliced Tuscan bread",
                "originalName": "sliced Tuscan bread",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 2054,
                "aisle": "Canned and Jarred",
                "image": "capers.jpg",
                "consistency": "SOLID",
                "name": "pickles baby capers",
                "nameClean": "capers",
                "original": "pickles baby capers",
                "originalName": "pickles baby capers",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 93796,
                "aisle": "Canned and Jarred",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "salt packed anchovies",
                "original": "anchovies, in oil or salted",
                "originalName": "anchovies, in oil or salted",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "salted",
                    "in oil"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "unsalted butter",
                "original": "unsalted butter",
                "originalName": "unsalted butter",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "unsalted"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 5,
        "title": "Bread, Butter And Anchovies",
        "readyInMinutes": 3,
        "servings": 1,
        "sourceUrl": "http://en.julskitchen.com/tuscany/grandma-mennas-kitchen-bread-butter-and-anchovies",
        "image": "https://spoonacular.com/recipeImages/5-556x370.jpg",
        "imageType": "jpg",
        "summary": "Bread, Butter And Anchovies might be a good recipe to expand your hor d'oeuvre repertoire. For <b>26 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. One serving contains <b>114 calories</b>, <b>3g of protein</b>, and <b>5g of fat</b>. This recipe serves 1. 1 person were glad they tried this recipe. Head to the store and pick up tuscan bread, pickles baby capers, butter, and a few other things to make it today. It is a good option if you're following a <b>pescatarian</b> diet. From preparation to the plate, this recipe takes approximately <b>3 minutes</b>. It is brought to you by en.julskitchen.com. All things considered, we decided this recipe <b>deserves a spoonacular score of 18%</b>. This score is rather bad. <a href=\"https://spoonacular.com/recipes/marinated-anchovies-with-bread-and-butter-926418\">Marinated Anchovies with Bread and Butter</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-bread-crumbs-and-anchovies-567604\">Spaghetti with Bread Crumbs and Anchovies</a>, and <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-olives-and-toasted-bread-crumbs-153152\">Spaghetti with Anchovies, Olives, and Toasted Bread Crumbs</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Anchovies can be paired with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The Bollinger Brut Special Cuvee with a 4.2 out of 5 star rating seems like a good match. It costs about 60 dollars per bottle.",
            "productMatches": [
                {
                    "id": 433020,
                    "title": "Bollinger Brut Special Cuvee",
                    "description": "A golden color, distinctive of black grape varieties. Very fine bubbles. On the nose, it has a beautiful aromatic complexity, ripe fruit and spicy aromas, with hints of roasted apples, apple compote and peaches. On the palate, there is a subtle combination of structure, length and vivacity. The bubbles are like velvet. Flavors of pear, brioche and spicy aromas, notes of fresh walnut.Pair with all fish, especially sushi and sashimi, shellfish such as shrimp, prawns, crayfish and grilled lobster, poultry and white meat, cashews, parmesan or prosciutto.",
                    "price": "$59.9900016784668",
                    "imageUrl": "https://spoonacular.com/productImages/433020-312x231.jpg",
                    "averageRating": 0.8399999737739563,
                    "ratingCount": 63.0,
                    "score": 0.8347368158792194,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fbollinger-brut-special-cuvee%2F513"
                }
            ]
        },
        "instructions": "Slice bread into 1cm thick slices: you can toast them or use them as they are. I prefer a soft bread to exalt butter softness. Spread butter with generosity over the bread.If you want to use salted anchovies, rinse them under running water to remove extra salt and divide them into fillets, removing all the bones. If you use anchovies in oil, just make two fillets out of them and lay them over buttered bread.And now, the final touch: a pickled baby caper in the centre, and - in less than 3 minutes - you have an unusual afternoon break or a fun anti-crisis and anti-panic appetizer for Christmas.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Slice bread into 1cm thick slices: you can toast them or use them as they are. I prefer a soft bread to exalt butter softness.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            },
                            {
                                "id": 0,
                                "name": "sandwich bread",
                                "localizedName": "sandwich bread",
                                "image": "white-bread.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Spread butter with generosity over the bread.If you want to use salted anchovies, rinse them under running water to remove extra salt and divide them into fillets, removing all the bones. If you use anchovies in oil, just make two fillets out of them and lay them over buttered bread.And now, the final touch: a pickled baby caper in the centre, and - in less than 3 minutes - you have an unusual afternoon break or a fun anti-crisis and anti-panic appetizer for Christmas.",
                        "ingredients": [
                            {
                                "id": 93796,
                                "name": "salt packed anchovies",
                                "localizedName": "salt packed anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 3,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "report": null,
        "tips": {
            "health": [
                "If you can, choose grassfed butter for a <a href=\"http://www.marksdailyapple.com/grass-fed-butter/#axzz3B6O62GgG\">better nutritional profile</a>&mdash;more vitamins, a favorable omega 3/6 ratio, etc.",
                "To make baked goods lighter and sneak in some extra nutrition, you can swap half the butter or oil (sometimes even all of it!) with an equal amount of unsweetened applesauce.",
                "Believe it or not, some sources say you can substitute avocado puree for butter when making brownies. Try it and let us know how it turns out!",
                "If you're following a gluten-free diet, make sure your bread (and all other ingredients) is truly gluten free.",
                "The true <a href=\"https://spoonacular.com/academy/sodium\">sodium content</a> in this recipe is unclear as the values below do not reflect the sodium removed by rinsing the anchovies."
            ],
            "price": [
                "Most dairy products stay good well past their sell-by date. Instead of throwing out perfectly safe food that is just a few days or maybe even a week or two old, make sure the product smells fine, has a normal texture, and doesn't taste funny. Sniff testing isn't exactly rocket science and it can keep you from wasting food (and money)."
            ],
            "cooking": [
                "Whether packed in salt or brine, it's a good idea to rinse capers to remove some excess salt. In case you're wondering what the difference between capers and caper berries is, capers are flower buds, while caper berries are the product of the same flower buds being allowed to mature and produce fruits (i.e. the caper berries!) Most sources say the two are not interchangeable, as they differ in both size and flavor.",
                "Butter's incredible flavor has made it an extremely popular cooking fat, but it is important to know that butter has the lowest smoke point of almost any cooking fat. This means butter literally starts to smoke at a lower temperature than most other fats between 250-350 degrees Fahrenheit. So while butter is great for cooking at lower temperatures, you should probably use canola oil, coconut oil, or  <a href=\"https://spoonacular.com/academy/vegetable-oil\">another oil with a higher smoke point</a> for frying and other high temperature cooking."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 300.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 11,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 0,
        "healthScore": 5,
        "creditsText": "SippitySup",
        "sourceName": "SippitySup",
        "pricePerServing": 149.77,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "marinated anchovies",
                "nameClean": "boquerones",
                "original": "1 lb whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
                "originalName": "whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
                "amount": 1.0,
                "unit": "lb",
                "meta": [
                    "fresh",
                    "salted",
                    "whole",
                    "tinned",
                    "cleaned",
                    "(not the or variety)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "marinated anchovies",
                "nameClean": "boquerones",
                "original": "1 lb whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
                "originalName": "whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
                "amount": 1.0,
                "unit": "lb",
                "meta": [
                    "fresh",
                    "salted",
                    "whole",
                    "tinned",
                    "cleaned",
                    "(not the or variety)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "lb",
                        "unitLong": "pound"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2031,
                "aisle": "Spices and Seasonings",
                "image": "chili-powder.jpg",
                "consistency": "SOLID",
                "name": "cayenne pepper",
                "nameClean": "ground cayenne pepper",
                "original": "0.25 t cayenne pepper",
                "originalName": "cayenne pepper",
                "amount": 0.25,
                "unit": "t",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.09,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.09,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 10311529,
                "aisle": "Produce",
                "image": "cherry-tomatoes.png",
                "consistency": "SOLID",
                "name": "cherry tomatoes",
                "nameClean": "cherry tomato",
                "original": "0 cherry tomatoes, as needed",
                "originalName": "cherry tomatoes, as needed",
                "amount": 0.0,
                "unit": "",
                "meta": [
                    "as needed"
                ],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10018029,
                "aisle": "Bakery/Bread",
                "image": "crusty-bread.jpg",
                "consistency": "SOLID",
                "name": "crusty bread",
                "nameClean": "crusty bread",
                "original": "0 crusty bread",
                "originalName": "crusty bread",
                "amount": 0.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "eggs",
                "nameClean": "egg",
                "original": "3 large eggs",
                "originalName": "eggs",
                "amount": 3.0,
                "unit": "large",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "large",
                        "unitLong": "larges"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "large",
                        "unitLong": "larges"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "0 extra virgin olive oil, for dipping bread, optional",
                "originalName": "extra virgin olive oil, for dipping bread, optional",
                "amount": 0.0,
                "unit": "",
                "meta": [
                    "for dipping bread, optional"
                ],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "1.5 c flour",
                "originalName": "flour",
                "amount": 1.5,
                "unit": "c",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 187.5,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "2 c olive oil",
                "originalName": "olive oil",
                "amount": 2.0,
                "unit": "c",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 432.0,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "0 salt and black pepper to taste",
                "originalName": "salt and black pepper to taste",
                "amount": 0.0,
                "unit": "",
                "meta": [
                    "black",
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            }
        ],
        "id": 6,
        "title": "Fried Anchovies",
        "readyInMinutes": 15,
        "servings": 15,
        "sourceUrl": "http://www.sippitysup.com/fried-anchovies",
        "image": "https://spoonacular.com/recipeImages/6-556x370.jpg",
        "imageType": "jpg",
        "summary": "Fried Anchovies is a <b>dairy free and pescatarian</b> recipe with 15 servings. This hor d'oeuvre has <b>354 calories</b>, <b>9g of protein</b>, and <b>31g of fat</b> per serving. For <b>$1.5 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. A mixture of salt and pepper, cayenne pepper, flour, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes around <b>15 minutes</b>. It is brought to you by SippitySup. Overall, this recipe earns a <b>not so great spoonacular score of 39%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/fried-anchovies-253335\">Fried Anchovies</a>, <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1189555\">Fried Anchovies with Sage</a>, and <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1201577\">Fried Anchovies with Sage</a>.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Anchovies on the menu? Try pairing with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. One wine you could try is Weinert Cavas de Weinert. It has 4.7 out of 5 stars and a bottle costs about 26 dollars.",
            "productMatches": [
                {
                    "id": 436255,
                    "title": "Weinert Cavas de Weinert",
                    "description": "Deep ruby tone with purple sparkles springs up its stable and vigorous structure. Its tannic richness guarantees its longevity, but discreet ripe fruit prevails. A balanced full-bodied wine that has reminiscente fragrantes of oak on the long finish. A blend of Cabernet Sauvignon, Malbec and Merlot.",
                    "price": "$25.989999771118164",
                    "imageUrl": "https://spoonacular.com/productImages/436255-312x231.jpg",
                    "averageRating": 0.9399999976158142,
                    "ratingCount": 5.0,
                    "score": 0.8774999976158142,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fweinert-cavas-de-weinert-2004%2F113527"
                }
            ]
        },
        "instructions": "If you are using whole, fresh anchovies you must clean them first. Pull off the heads and pull out the insides. Then rinse with clean water.Pour the olive oil into a small deep saucepan set over heat. Use a deep fry thermometer to monitor the heat.Meanwhile, add the eggs to a small bowl and beat until well mixed. Add the flour, cayenne, salt and black pepper to a shallow bowl, use a fork to mix the ingredients together. Dip the fish one at a time into the beaten eggs and then roll it in flour.When the oil reaches 365 degrees F. fry the fish a few at a time, rolling them around in the oil to assure even cooking until they are golden brown (about 5-8 minutes). Serve with crusty bread, extra-virgin olive oil for dipping the bread (optional) and tomatoes.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "If you are using whole, fresh anchovies you must clean them first. Pull off the heads and pull out the insides. Then rinse with clean water.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "fresh anchovies",
                                "localizedName": "fresh anchovies",
                                "image": "fresh-anchovies.jpg"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Pour the olive oil into a small deep saucepan set over heat. Use a deep fry thermometer to monitor the heat.Meanwhile, add the eggs to a small bowl and beat until well mixed.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404789,
                                "name": "kitchen thermometer",
                                "localizedName": "kitchen thermometer",
                                "image": "food-thermometer.jpg"
                            },
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add the flour, cayenne, salt and black pepper to a shallow bowl, use a fork to mix the ingredients together. Dip the fish one at a time into the beaten eggs and then roll it in flour.When the oil reaches 365 degrees F. fry the fish a few at a time, rolling them around in the oil to assure even cooking until they are golden brown (about 5-8 minutes).",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 2031,
                                "name": "ground cayenne pepper",
                                "localizedName": "ground cayenne pepper",
                                "image": "chili-powder.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            },
                            {
                                "id": 10115261,
                                "name": "fish",
                                "localizedName": "fish",
                                "image": "fish-fillet.jpg"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            },
                            {
                                "id": 0,
                                "name": "dip",
                                "localizedName": "dip",
                                "image": ""
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 8,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Serve with crusty bread, extra-virgin olive oil for dipping the bread (optional) and tomatoes.",
                        "ingredients": [
                            {
                                "id": 1034053,
                                "name": "extra virgin olive oil",
                                "localizedName": "extra virgin olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 10018029,
                                "name": "crusty bread",
                                "localizedName": "crusty bread",
                                "image": "crusty-bread.jpg"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "localizedName": "bread",
                                "image": "white-bread.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "report": null,
        "tips": {
            "health": [
                "You have probably heard by now that whole wheat bread is better for you than white bread. While this is true and definitely worth considering, you should be aware that all bread (especially your typical supermarket loaves) will raise your <a href=\"http://www.health.harvard.edu/newsweek/Glycemic_index_and_glycemic_load_for_100_foods.htm\">blood sugar</a> and should be eaten in moderation.",
                "If you're worried about cholesterol and heart disease, you may have heard you should limit your egg consumption to one egg per day or eat only egg whites. However, new research suggests you might go ahead and eat your whole eggs. It turns out egg yolk contains valuable nutrients (the cartenoids that make it yellow are great for eye health, folic acid is great for brain health, and it has vitamins A, E, D, and K) and <a href=\"https://spoonacular.com/academy/cholesterol\">dietary cholesterol</a> seems to have little influence on blood cholesterol levels.",
                "You can easily swap half of the white flour in most recipes for whole wheat flour to add some fiber and protein. It does result in a heavier dough, so for cookies, cakes, etc., you might try swapping in whole wheat pastry flour.",
                "Lycopene, the chemical in tomatoes that makes them red (and healthy), is fat soluble. This means eating tomatoes with a <a href=\"https://spoonacular.com/academy/fat\">fat</a> &mdash; say, avocado or olive oil?improves the body's ability to absorb the lycopene. Don't hesitate to include some healthy fats in this dish to get the most health benefits from the tomatoes!"
            ],
            "price": [],
            "cooking": [
                "If you're using olive oil to cook at high temperatures, make sure that the olive oil you're using has a high smoke point because heating an oil past its smoke point can ruin the flavor and even release harmful compounds into your dish. Many people recommend saving extra-virgin olive oil for cold dishes or for adding the finishing touch to a warm dish. You could also use canola oil, coconut oil, or another good <a href=\"https://spoonacular.com/academy/vegetable-oil\">high-temperature oil</a> to be on the safe side.",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking.",
                "Just a head's up: tomatoes shouldn't be refrigerated! They will lose their flavor and probably get mushy too. For more on selecting and storing tomatoes and other vegetables, check out the <a href=\"https://spoonacular.com/academy#Ingredients\">academy</a>."
            ],
            "green": [
                "Tomatoes, especially cherry tomatoes, should be bought <a href=\"http://www.ewg.org/foodnews/list.php\">organic</a> when possible. Moreover, buying tomatoes from your <a href=\"http://www.localharvest.org/farmers-markets/\">local farmers' market</a> when they are in season is going to make your dish much, much tastier, not to mention more eco-friendly. In fact, we recommend using canned &mdash; or better yet, jarred?tomato products when tomatoes aren't in season instead of buying imported or greenhouse-grown tomatoes.",
                "Choose free range or organic eggs whenever possible! Even though they are more expensive, eggs are generally cheap to begin with, and eggs from cage-free chickens are worth the extra cost."
            ]
        },
        "openLicense": 0,
        "suspiciousDataScore": 0.0,
        "approved": 1,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 4,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 31,
        "healthScore": 14,
        "creditsText": "The Kitchn",
        "sourceName": "The Kitchn",
        "pricePerServing": 86.03,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovy",
                "nameClean": "boquerones",
                "original": "3-5 whole Boquerones or anchovy fillets",
                "originalName": "whole Boquerones or anchovy fillets",
                "amount": 3.0,
                "unit": "fillet",
                "meta": [
                    "whole"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovy",
                "nameClean": "boquerones",
                "original": "3-5 whole Boquerones or anchovy fillets",
                "originalName": "whole Boquerones or anchovy fillets",
                "amount": 3.0,
                "unit": "fillet",
                "meta": [
                    "whole"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    }
                }
            },
            {
                "id": 2044,
                "aisle": "Produce",
                "image": "fresh-basil.jpg",
                "consistency": "SOLID",
                "name": "basil leaves",
                "nameClean": "fresh basil",
                "original": "2-3 basil leaves, sliced",
                "originalName": "basil leaves, sliced",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 2044,
                "aisle": "Produce",
                "image": "basil.jpg",
                "consistency": "SOLID",
                "name": "basil leaves",
                "nameClean": "fresh basil",
                "original": "2-3 basil leaves, sliced",
                "originalName": "basil leaves, sliced",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 18079,
                "aisle": "Pasta and Rice",
                "image": "breadcrumbs.jpg",
                "consistency": "SOLID",
                "name": "bread crumbs",
                "nameClean": "breadcrumbs",
                "original": "1 Tbsp bread crumbs, toasted if desired",
                "originalName": "bread crumbs, toasted if desired",
                "amount": 1.0,
                "unit": "Tbsp",
                "meta": [
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "2 tsps extra virgin olive oil",
                "originalName": "extra virgin olive oil",
                "amount": 2.0,
                "unit": "tsps",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "freshly cracked pepper",
                "nameClean": "black pepper",
                "original": "Freshly cracked black pepper, to taste",
                "originalName": "Freshly cracked black pepper, to taste",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "black",
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 10011282,
                "aisle": "Produce",
                "image": "red-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "red onion",
                "original": "1/8 red onion, thinly sliced",
                "originalName": "red onion, thinly sliced",
                "amount": 0.125,
                "unit": "",
                "meta": [
                    "red",
                    "thinly sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 0.125,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.125,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1012068,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "dark-sauce.jpg",
                "consistency": "LIQUID",
                "name": "sherry vinegar",
                "nameClean": "sherry vinegar",
                "original": "1/2 tsp sherry vinegar",
                "originalName": "sherry vinegar",
                "amount": 0.5,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "from a tomato",
                "nameClean": "tomato",
                "original": "2-3 thick slices from a large tomato",
                "originalName": "2-3 thick slices from a large tomato",
                "amount": 2.0,
                "unit": "slices",
                "meta": [
                    "thick"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "slice",
                        "unitLong": "slices"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "slice",
                        "unitLong": "slices"
                    }
                }
            }
        ],
        "id": 7,
        "title": "Tomato & Anchovies With Bread Crumbs, Basil & Red Onion   Recip",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "http://www.thekitchn.com/tomato-and-anchovies-with-breadcrumbs-63500",
        "image": "https://spoonacular.com/recipeImages/7-556x370.jpg",
        "imageType": "jpg",
        "summary": "Tomato & Anchovies With Bread Crumbs, Basil & Red Onion Recip requires around <b>45 minutes</b> from start to finish. This recipe serves 1. This hor d'oeuvre has <b>142 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b> per serving. For <b>86 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 31 person were glad they tried this recipe. This recipe from The Kitchn requires anchovy, basil leaves, sherry vinegar, and freshly cracked pepper. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 69%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/spaghetti-with-bread-crumbs-and-anchovies-567604\">Spaghetti with Bread Crumbs and Anchovies</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-olives-and-toasted-bread-crumbs-153152\">Spaghetti with Anchovies, Olives, and Toasted Bread Crumbs</a>, and <a href=\"https://spoonacular.com/recipes/tomato-red-onion-and-basil-bruschetta-27033\">Tomato, Red Onion, and Basil Bruschetta</a>.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are my top picks for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The NV Ruinart , Wine with a 5 out of 5 star rating seems like a good match. It costs about 89 dollars per bottle.",
            "productMatches": [
                {
                    "id": 430390,
                    "title": "NV Ruinart , Wine",
                    "description": null,
                    "price": "$88.98999786376953",
                    "imageUrl": "https://spoonacular.com/productImages/430390-312x231.jpg",
                    "averageRating": 1.0,
                    "ratingCount": 1.0,
                    "score": 0.75,
                    "link": "https://www.amazon.com/Ruinart-Ros%C3%A9-Champagne-750-Wine/dp/B00UNV9TAI?tag=spoonacular-20"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "If you're following a gluten-free diet, be sure to find a brand of gluten-free breadcrumbs.",
                "Depending on the recipe, you might be able to substitute almond meal or flaxseed for the breadcrumbs to reduce the carbohydrate content and up the nutrition. For example, almond meal works well for breading, while ground flaxseed can help with binding.",
                "Lycopene, the chemical in tomatoes that makes them red (and healthy), is fat soluble. This means eating tomatoes with a <a href=\"https://spoonacular.com/academy/fat\">fat</a> &mdash; say, avocado or olive oil?improves the body's ability to absorb the lycopene. Don't hesitate to include some healthy fats in this dish to get the most health benefits from the tomatoes!"
            ],
            "price": [
                "Fresh herbs can be expensive, so don't let them go to waste. If you have any leftovers, you might be able to freeze them. The Kitchn recommends <a href=\"http://www.thekitchn.com/freeze-herbs-in-olive-oil-173648\">freezing hardy herbs</a> like rosemary and thyme in olive oil, while Better Homes and Gardens suggests using <a href=\"http://www.bhg.com/recipes/how-to/food-storage-safety/freezing-herbs/\">freezer bags</a> to freeze basil, chives, mint, and more."
            ],
            "cooking": [
                "Don't have fresh herbs? Substitute dried herbs, but use about 1/3 less because dried herbs are more potent than fresh.  ",
                "To keep your eyes from stinging and watering while cutting onions, trying popping the onion in the freezer for 15 minutes before you plan to start cooking. Chilling the onion slows the release of the enzyme responsible for teary eyes.",
                "You should not store your onions with your potatoes because the gases they emit will make each other spoil faster. For more information about selecting and storing onions, check out <a href=\"https://spoonacular.com/academy/onions\">this lesson about onions</a> in the academy.",
                "Just a head's up: tomatoes shouldn't be refrigerated! They will lose their flavor and probably get mushy too. For more on selecting and storing tomatoes and other vegetables, check out the <a href=\"https://spoonacular.com/academy#Ingredients\">academy</a>.",
                "Fresh herbs should be added toward the end of the cooking process &mdash; even at the very last minute?especially delicate herbs like cilantro, basil, and dill. Hardier herbs like bay leaves, rosemary, and thyme can be added earlier.",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking."
            ],
            "green": [
                "Tomatoes, especially cherry tomatoes, should be bought <a href=\"http://www.ewg.org/foodnews/list.php\">organic</a> when possible. Moreover, buying tomatoes from your <a href=\"http://www.localharvest.org/farmers-markets/\">local farmers' market</a> when they are in season is going to make your dish much, much tastier, not to mention more eco-friendly. In fact, we recommend using canned &mdash; or better yet, jarred?tomato products when tomatoes aren't in season instead of buying imported or greenhouse-grown tomatoes."
            ]
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 6,
        "gaps": "no",
        "preparationMinutes": 30,
        "cookingMinutes": 390,
        "aggregateLikes": 7,
        "healthScore": 32,
        "creditsText": "Foodnetwork",
        "sourceName": "Foodnetwork",
        "pricePerServing": 550.05,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "2 pounds fresh anchovies",
                "originalName": "fresh anchovies",
                "amount": 2.0,
                "unit": "pounds",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 907.185,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "2 pounds fresh anchovies",
                "originalName": "fresh anchovies",
                "amount": 2.0,
                "unit": "pounds",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 907.185,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "4 cloves garlic, sliced paper thin",
                "originalName": "garlic, sliced paper thin",
                "amount": 4.0,
                "unit": "cloves",
                "meta": [
                    "paper thin",
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "2 cups extra-virgin olive oil",
                "originalName": "extra-virgin olive oil",
                "amount": 2.0,
                "unit": "cups",
                "meta": [
                    "extra-virgin"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 432.0,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2027,
                "aisle": "Produce",
                "image": "oregano.jpg",
                "consistency": "SOLID",
                "name": "oregano",
                "nameClean": "oregano",
                "original": "2 tablespoons dried oregano",
                "originalName": "dried oregano",
                "amount": 2.0,
                "unit": "tablespoons",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 10311297,
                "aisle": "Produce",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "parsley",
                "nameClean": "flat leaf parsley",
                "original": "1 bunch Italian parsley, finely chopped to yield 1/4 cup",
                "originalName": "Italian parsley, finely chopped to yield 1/4 cup",
                "amount": 1.0,
                "unit": "bunch",
                "meta": [
                    "italian",
                    "finely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "bunch",
                        "unitLong": "bunch"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "bunch",
                        "unitLong": "bunch"
                    }
                }
            },
            {
                "id": 1032009,
                "aisle": "Spices and Seasonings",
                "image": "red-pepper-flakes.jpg",
                "consistency": "SOLID",
                "name": "chile flakes",
                "nameClean": "red pepper flakes",
                "original": "2 tablespoons red chile flakes",
                "originalName": "red chile flakes",
                "amount": 2.0,
                "unit": "tablespoons",
                "meta": [
                    "red"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 1012047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "sea salt",
                "nameClean": "coarse sea salt",
                "original": "2 tablespoons sea salt",
                "originalName": "sea salt",
                "amount": 2.0,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 1002068,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vinegar-(white).jpg",
                "consistency": "LIQUID",
                "name": "white wine vinegar",
                "nameClean": "white wine vinegar",
                "original": "2 cups white wine vinegar",
                "originalName": "white wine vinegar",
                "amount": 2.0,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 478.0,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            }
        ],
        "id": 9,
        "title": "Marinated Fresh Anchovies: Alici Marinate",
        "readyInMinutes": 420,
        "servings": 8,
        "sourceUrl": "http://www.foodnetwork.com/recipes/mario-batali/marinated-fresh-anchovies-alici-marinate-recipe/index.html",
        "image": "https://spoonacular.com/recipeImages/9-556x370.jpeg",
        "imageType": "jpeg",
        "summary": "Marinated Fresh Anchovies: Alici Marinate requires approximately <b>7 hours</b> from start to finish. This recipe makes 8 servings with <b>269 calories</b>, <b>24g of protein</b>, and <b>17g of fat</b> each. For <b>$5.5 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. 7 people have tried and liked this recipe. If you have anchovies, garlic, oregano, and a few other ingredients on hand, you can make it. It is brought to you by Foodnetwork. It works well as a pricey main course. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 82%</b>, which is excellent. <a href=\"https://spoonacular.com/recipes/fresh-anchovies-marinated-in-salsa-verde-647\">Fresh Anchovies Marinated In Salsa Verde</a>, <a href=\"https://spoonacular.com/recipes/carote-marinate-marinated-carrots-481292\">Carote marinate (Marinated Carrots)</a>, and <a href=\"https://spoonacular.com/recipes/marinated-anchovies-253536\">Marinated Anchovies</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal",
            "whole 30",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are my top picks for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The Blanc de Bleu Cuvee Mousseux with a 4.2 out of 5 star rating seems like a good match. It costs about 16 dollars per bottle.",
            "productMatches": [
                {
                    "id": 436158,
                    "title": "Blanc de Bleu Cuvee Mousseux",
                    "description": "Blanc de Bleu is a premium California Chardonnay wine with an added hint of blueberries and is a delicate sparkling wine reserved for memorable celebrations. It offers seductive flavors and fresh aromatic effervescence - vividly pasteled with blueberries. All of this is contained in an impressively sexy bottle with tasteful flair.The fruit for Blanc de Bleu is grown in the quiet vineyards of Northern California, known for their cool and clear breezes - ideal conditions for the exclusive grapes and soils that accentuate the profoundly flavorful characteristics. This sparkling wine pairs well with appetizers, sushi and very light meals.",
                    "price": "$15.989999771118164",
                    "imageUrl": "https://spoonacular.com/productImages/436158-312x231.jpg",
                    "averageRating": 0.8399999737739563,
                    "ratingCount": 25.0,
                    "score": 0.8268420790371142,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fblanc-de-bleu-cuvee-mousseux%2F140728"
                }
            ]
        },
        "instructions": "Using scissors, trim the fins off of all the anchovies. Using a sharp paring knife, gut the fish, and rinse well. Cut off the heads and carefully remove the spine and pin bones by pulling from the top with the index finger and thumbnail. Separate the 2 fillets and rinse again. Lay 1 layer of the fillets in a deep oval quiche plate and sprinkle over with vinegar. Continue until all the fish fillets are in the plate and pour over the rest of the vinegar. Let sit to marinate for at least 4 hours in the refrigerator.                          Drain each anchovy from the vinegar, rinse, and pat dry with a kitchen towel. Wash out the oval quiche plate and dry well. Lay the cured anchovies into the quiche plate, one layer at a time, with 2 or 3 tablespoons olive oil, a pinch of oregano, a sprinkle of chile flakes, a sprinkle of parsley, a couple of garlic slices, and a sprinkle of salt. Layer until all of the anchovies are finished and allow to marinate at least 2 hours, refrigerated.                          To serve, bring anchovies to cellar temp, just about 58 degrees F, and place 8 or 9 on each plate drained of oil. The cured anchovies will last like this for 1 week in the refrigerator.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Using scissors, trim the fins off of all the anchovies. Using a sharp paring knife, gut the fish, and rinse well.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 10115261,
                                "name": "fish",
                                "localizedName": "fish",
                                "image": "fish-fillet.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404673,
                                "name": "kitchen scissors",
                                "localizedName": "kitchen scissors",
                                "image": "kitchen-scissors.jpg"
                            },
                            {
                                "id": 404745,
                                "name": "knife",
                                "localizedName": "knife",
                                "image": "chefs-knife.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Cut off the heads and carefully remove the spine and pin bones by pulling from the top with the index finger and thumbnail. Separate the 2 fillets and rinse again.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Lay 1 layer of the fillets in a deep oval quiche plate and sprinkle over with vinegar. Continue until all the fish fillets are in the plate and pour over the rest of the vinegar.",
                        "ingredients": [
                            {
                                "id": 10115261,
                                "name": "fish fillets",
                                "localizedName": "fish fillets",
                                "image": "fish-fillet.jpg"
                            },
                            {
                                "id": 2053,
                                "name": "vinegar",
                                "localizedName": "vinegar",
                                "image": "vinegar-(white).jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Let sit to marinate for at least 4 hours in the refrigerator.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 240,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Drain each anchovy from the vinegar, rinse, and pat dry with a kitchen towel. Wash out the oval quiche plate and dry well.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 2053,
                                "name": "vinegar",
                                "localizedName": "vinegar",
                                "image": "vinegar-(white).jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 221439,
                                "name": "kitchen towels",
                                "localizedName": "kitchen towels",
                                "image": "dish-towel.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Lay the cured anchovies into the quiche plate, one layer at a time, with 2 or 3 tablespoons olive oil, a pinch of oregano, a sprinkle of chile flakes, a sprinkle of parsley, a couple of garlic slices, and a sprinkle of salt.",
                        "ingredients": [
                            {
                                "id": 1032009,
                                "name": "red pepper flakes",
                                "localizedName": "red pepper flakes",
                                "image": "red-pepper-flakes.jpg"
                            },
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 2027,
                                "name": "oregano",
                                "localizedName": "oregano",
                                "image": "oregano.jpg"
                            },
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Layer until all of the anchovies are finished and allow to marinate at least 2 hours, refrigerated.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 120,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "To serve, bring anchovies to cellar temp, just about 58 degrees F, and place 8 or 9 on each plate drained of oil. The cured anchovies will last like this for 1 week in the refrigerator.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "localizedName": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "report": null,
        "tips": {
            "health": [
                "Before you pass up garlic because you don't want the bad breath that comes with it, keep in mind that the compounds that cause garlic breath also offer a lot of health benefits. Garlic has anti-inflammatory, antioxidant, antibacterial, and antiviral properties. If you really want to get the most health benefits out of your garlic, choose Spanish garlic, which contains the most allicin (one of garlic's most beneficial compounds).",
                "Sea salt is not healthier than table salt, contrary to what you may have heard. Sea salt is usually 97.5% sodium chloride (same as regular old table salt) and the minerals accounting for the rest are too insignificant to make a difference?unless you plan on consuming sea salt by the pound, in which case the health benefits from the minerals will definitely be outweighed by the negative effects of all the sodium you are consuming!",
                "Although the body needs salt to survive, most of us get too much. The problem with consuming too much salt (what chemists call \"sodium chloride\") is actually the <a href=\"https://spoonacular.com/academy/sodium\">sodium</a> part, which is why people concerned about high blood pressure go on low-sodium diets. If you are trying to reduce salt in your diet, you can try salt substitutes like potassium chloride or try to make do with less salt by using more black pepper, herbs, and spices."
            ],
            "price": [
                "Sea salt can add a unique texture or provide bursts of salty goodness, but ONLY when it isn't being dissolved. So if you have expensive sea salt, save it for sprinkling on salads or dark chocolate cookies, don't try to use it in your pasta sauce or soup. Once sea salt dissolves, the flavor is indistinguishable from table salt from the shaker (after all, they are chemically the same thing, sodium chloride). "
            ],
            "cooking": [
                "Here's a trick for peeling garlic quickly. Put the garlic clove on your cutting board. Take a knife with a thick blade and place the blade flat across the garlic clove (the clove should be closer to the handle than the middle of the blade). Whack down on the flat side of the blade with your free hand to smoosh the garlic a bit. Done correctly, the skin will peel right off.",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 0.0,
        "approved": 1,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 6,
        "gaps": "no",
        "preparationMinutes": 1485,
        "cookingMinutes": 0,
        "aggregateLikes": 6,
        "healthScore": 42,
        "creditsText": "Delicious Days",
        "sourceName": "Delicious Days",
        "pricePerServing": 376.2,
        "extendedIngredients": [
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "Freshly ground black pepper",
                "originalName": "Freshly ground black pepper",
                "amount": 6.0,
                "unit": "servings",
                "meta": [
                    "black",
                    "freshly ground"
                ],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11819,
                "aisle": "Produce",
                "image": "red-chili.jpg",
                "consistency": "SOLID",
                "name": "chillies",
                "nameClean": "chili pepper",
                "original": "1-2 x Red Chillies",
                "originalName": "x Red Chillies",
                "amount": 1.0,
                "unit": "",
                "meta": [
                    "red"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1012047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "coarse sea salt",
                "nameClean": "coarse sea salt",
                "original": "Coarse Sea Salt",
                "originalName": "Coarse Sea Salt",
                "amount": 6.0,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil extra vergine",
                "nameClean": "extra virgin olive oil",
                "original": "Olive Oil extra vergine",
                "originalName": "Olive Oil extra vergine",
                "amount": 6.0,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "500 g fresh anchovies",
                "originalName": "fresh anchovies",
                "amount": 500.0,
                "unit": "g",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 1.102,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 500.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "500 g fresh anchovies",
                "originalName": "fresh anchovies",
                "amount": 500.0,
                "unit": "g",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 1.102,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 500.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10511297,
                "aisle": "Produce",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "parsley",
                "nameClean": "fresh parsley",
                "original": "fresh parsley, chopped",
                "originalName": "fresh parsley, chopped",
                "amount": 6.0,
                "unit": "servings",
                "meta": [
                    "fresh",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1012049,
                "aisle": "Produce",
                "image": "thyme.jpg",
                "consistency": "SOLID",
                "name": "thyme",
                "nameClean": "fresh thyme",
                "original": "fresh thyme",
                "originalName": "fresh thyme",
                "amount": 6.0,
                "unit": "servings",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 10211215,
                "aisle": "Produce",
                "image": "garlic.jpg",
                "consistency": "SOLID",
                "name": "garlic cloves",
                "nameClean": "whole garlic cloves",
                "original": "1-2 x garlic cloves, chopped",
                "originalName": "x garlic cloves, chopped",
                "amount": 1.0,
                "unit": "",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "juice of lemon",
                "nameClean": "lemon juice",
                "original": "Juice of 1 lemon",
                "originalName": "Juice of lemon",
                "amount": 1.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1012068,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "dark-sauce.jpg",
                "consistency": "LIQUID",
                "name": "sherry vinegar",
                "nameClean": "sherry vinegar",
                "original": "5 tbsp Sherry Vinegar",
                "originalName": "Sherry Vinegar",
                "amount": 5.0,
                "unit": "tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 5.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 5.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            }
        ],
        "id": 10,
        "title": "Marinated Boquerones",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.deliciousdays.com/archives/2006/07/23/boqueroneshave-no-fear/",
        "image": "https://spoonacular.com/recipeImages/10-556x370.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many main course recipes, so give Marinated Boquerones a try. This recipe makes 6 servings with <b>243 calories</b>, <b>17g of protein</b>, and <b>18g of fat</b> each. For <b>$3.76 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 6 foodies and cooks. Head to the store and pick up anchovies, parsley, coarse sea salt, and a few other things to make it today. It is brought to you by Delicious Days. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. <a href=\"https://spoonacular.com/recipes/roasted-peppers-with-boquerones-12\">Roasted Peppers with Boquerones</a>, <a href=\"https://spoonacular.com/recipes/boquerones-with-green-olives-and-orange-1765635\">Boquerones With Green Olives and Orange</a>, and <a href=\"https://spoonacular.com/recipes/tomato-and-boquerones-salad-with-garlicky-breadcrumbs-49\">Tomato And Boquerones Salad With Garlicky Breadcrumbs</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal",
            "whole 30",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are great choices for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. One wine you could try is Berlucchi Franciacorta '61 Extra Brut. It has 4.3 out of 5 stars and a bottle costs about 34 dollars.",
            "productMatches": [
                {
                    "id": 13029339,
                    "title": "Berlucchi Franciacorta '61 Extra Brut",
                    "description": "Extra Brut '61 is a tribute to the birth of Franciacorta in 1961—the year Berlucchi produced the first of this classic method sparkling wine. This fun and lively sparkler offers citrus fruit and a crisp, clean finish.Blend: 85% Chardonnay, 15% Pinot Nero*The label for Franciacorta '61 Extra Brut is in the process of changing. You may receive either of these two labels featured above. Specific labels cannot be requested.",
                    "price": "$33.9900016784668",
                    "imageUrl": "https://spoonacular.com/productImages/13029339-312x231.jpg",
                    "averageRating": 0.8600000143051147,
                    "ratingCount": 6.0,
                    "score": 0.8073684353577464,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fsoter-vineyards-north-valley-reserve-pinot-noir-2012%2F147401"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "Sea salt is not healthier than table salt, contrary to what you may have heard. Sea salt is usually 97.5% sodium chloride (same as regular old table salt) and the minerals accounting for the rest are too insignificant to make a difference?unless you plan on consuming sea salt by the pound, in which case the health benefits from the minerals will definitely be outweighed by the negative effects of all the sodium you are consuming!",
                "Although the body needs salt to survive, most of us get too much. The problem with consuming too much salt (what chemists call \"sodium chloride\") is actually the <a href=\"https://spoonacular.com/academy/sodium\">sodium</a> part, which is why people concerned about high blood pressure go on low-sodium diets. If you are trying to reduce salt in your diet, you can try salt substitutes like potassium chloride or try to make do with less salt by using more black pepper, herbs, and spices."
            ],
            "price": [
                "Sea salt can add a unique texture or provide bursts of salty goodness, but ONLY when it isn't being dissolved. So if you have expensive sea salt, save it for sprinkling on salads or dark chocolate cookies, don't try to use it in your pasta sauce or soup. Once sea salt dissolves, the flavor is indistinguishable from table salt from the shaker (after all, they are chemically the same thing, sodium chloride). "
            ],
            "cooking": [
                "The average fresh lemon contains between 2 to 3 tablespoons of lemon juice (just in case you are substituting bottled lemon juice).",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null
    }
];

export default aux