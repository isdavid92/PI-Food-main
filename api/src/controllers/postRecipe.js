const errorHandler = require('../utils/errors');
const { Recipe, Diet } = require('../db');

const postRecipe = async (req, res) => {
    const idDB = async () => {
        const idSerch = async () => {
            const recipesDB = await Recipe.findAll();
            let idM = 1165540;
            if (recipesDB.length) {
                for (let i = 1; i < recipesDB.length+1; i++) {
                    let pos = i*2;
                    idM += pos
                };
            };
            return idM
        };
        const idDB = await idSerch();
        return idDB
    };

    // const loadDiets = async () => {
    //     const dietsDB = await Diet.findAll();
    //     if(dietsDB.length) return 
    //      fetch('https://spoonacular.com/food-api/docs/diet-definitions')
    //     .then(response => response.text())
    //     .then(text => {
    //             const $ = cheerio.load(text);
    //             const response = $('ul').map((i, elem) => {
    //                 return {
    //                     items: $(elem).find('li').map((j, item) => $(item).text()).get()
    //                 };
    //             }).get();
    //             const diets = [];
    //             const dietsString = response[3].items;
    //             dietsString.map((string) => {
    //                 const splitString = string.split(':');
    //                 diets.push({
    //                     name: splitString[0],
    //                     info: splitString[1].trim()
    //                 });
    //             });
    //             diets.map( async ({ name, info }) => {
    //                 await Diet.create({ name, info })
    //             });
    //             return diets
    //         });
    // };

    try {
        // loadDiets()

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
