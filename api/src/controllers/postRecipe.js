const errorHandler = require('../utils/errors');
const { Recipe, Diet } = require('../db');
const dietsDefault = ['glutenFree','ketogenic','vegetarian','lactoVegetarian','ovoVegetarian','vegan','pescetarian','paleo','primal', 'LowFODMAP', 'whole30'];

const postRecipe = async (req, res) => {
    try {
        const idDB = async () => {
            const idSerch = async () => {
                const recipesDB = await Recipe.findAll();
                let idM = 1165538;
                if (recipesDB.length) {
                    for (let i = 0; i < recipesDB.length; i++) {
                        idM++
                    };
                };
                return idM
            };
            const idDB = await idSerch();
            return idDB + 2
        };

        const dietsDB = await Diet.findAll();
        if(!dietsDB.length){
            for (let i = 0; i < dietsDefault.length; i++) {
                await Diet.create({ name:dietsDefault[i] })
            };
        };
        
        const { title, image, summary, health_score, steps, diets } = req.body;
        const id = await idDB();
        const newRecipe = await Recipe.create({ id, title, image, summary, health_score, steps });
        newRecipe.addDiet(diets);
        
        res.status(201).json(newRecipe)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = postRecipe;
