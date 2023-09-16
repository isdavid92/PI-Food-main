const errorHandler = require('../utils/errors');
const { Recipe, Diet } = require('../db');

const getRecipesDB = async (req, res) => {
    try {

        const resultDB = await Recipe.findAll({
            include: Diet
        });
        const origin = 'data base';
        const recipesDB = resultDB.map(recipe => {
            return {...recipe.toJSON(), origin}
        });
        
        console.log(recipesDB);
        return res.status(200).json(recipesDB)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipesDB;
