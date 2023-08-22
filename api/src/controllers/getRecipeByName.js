const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';

const getRecipeById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const response = await axios(`${URL_BASE}${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`);
        const { title, image, summary, healthScore, analyzedInstructions } = response.data;
        const recipe = { id, title, image, summary, healthScore, analyzedInstructions };

        return res.status(200).json(recipe)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipeById;