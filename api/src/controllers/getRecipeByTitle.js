const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/autocomplete?query=';
const { Recipe } = require('../db');

const getRecipeByTitle = async (req, res) => {
    const titleRecipe = req.params.title;

    const searchDB = async () => {
        const recipes = await Recipe.findAll();
        const result = recipes.filter((recipe) => {
            return recipe.title.toLowerCase().startsWith(titleRecipe.toLowerCase())
        });
        return result
    };

    const filterResults = (results) => {
        const resultFilter = [];
        for (let i = 0; i < results.length; i++) {
            const { id, title } = results[i];
            resultFilter[i] = { id, title };
        };
        return resultFilter
    };

    try {
        const response = await axios(`${URL_BASE}${titleRecipe}&number=25&apiKey=${API_KEY}`);
        const resultApi = response.data;
        const resultDB = await searchDB();
        
        const results = [...resultDB, ...resultApi];
        const resultFilter = filterResults(results);

        return res.status(200).json(resultFilter)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipeByTitle