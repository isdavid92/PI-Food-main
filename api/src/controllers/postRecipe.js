const cheerio = require('cheerio');
const errorHandler = require('../utils/errors');
const { Recipe, Diet } = require('../db');
const getDiets = require('./getDiets');

const postRecipe = async (req, res) => {

    const idDB = async () => {
        const recipesDB = await Recipe.findAll();
        let idM = 1165540;
        if (!recipesDB.length) return idM;
            
        return idM += recipesDB.length * 2
    };

    try {
        fetch('https://spoonacular.com/food-api/docs/diet-definitions')
        .then(response => response.text())
        .then( async (text) => {

            const dietsDB = await Diet.findAll();

            if (!dietsDB.length) {

                const $ = cheerio.load(text);
                const dietsDB = [];
                const response = $('ul').map((i, elem) => {
                    return {
                        items: $(elem).find('li').map((j, item) => $(item).text()).get()
                    };
                }).get();
                const dietsString = response[3].items;
                dietsString.map((string) => {
                    const splitString = string.split(':');
                    dietsDB.push({
                        name: splitString[0],
                        info: splitString[1].trim()
                    });
                });
                dietsDB.map(async ({ name, info }) => {
                    await Diet.create({ name, info })
                });
                console.log('BASE DE DATOS PRECARGADA CON LAS DIETAS')

            };
            
            console.log('DIETAS EN BASE DE DATOS')
            const { title, image, summary, health_score, steps, diets } = req.body;
            const id = await idDB();
            const newRecipe = await Recipe.create({ id, title, image, summary, health_score, steps });
    
            newRecipe.addDiet(diets);
            
            res.status(201).json(newRecipe)
            
        });
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = postRecipe;
