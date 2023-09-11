const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';
const { Recipe } = require('../db');

const getRecipeById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const recipesDB = await Recipe.findAll();
        const resultDB = recipesDB.filter((recipe) => {
            return recipe.id === id
        });
        if (resultDB.length) return res.status(200).json(resultDB);

        const response = await axios(`${URL_BASE}${id}/information?apiKey=${API_KEY}`);
        const { title, image, summary, healthScore, analyzedInstructions } = response.data;
        const steps = analyzedInstructions[0].steps;
        const recipeApi = { id, title, image, summary, healthScore, steps };
        
        return res.status(200).json(recipeApi)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipeById;
