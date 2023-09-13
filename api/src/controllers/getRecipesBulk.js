const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';

const getRecipesBulk = async (req, res) => {
    try {
        const ids = req.params.ids
        const response = await axios(`${URL_BASE}informationBulk?ids=${ids}&apiKey=${API_KEY}`);
        const data = [];
        
        for (let i = 0; i < response.data.length; i++) {
            const { id, title, image, summary, healthScore, analyzedInstructions, diets } = response.data[i];

            data.push({ id, title, image, summary, healthScore, analyzedInstructions, diets });
        };
        
        return res.status(200).json(data)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipesBulk;