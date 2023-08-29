const cheerio = require('cheerio');
const errorHandler = require('../utils/errors');
const { Diet } = require('../db');

const getDiets = async (req, res) => {
    try {
        const dietsDB = await Diet.findAll();
        if(dietsDB.length){
            return res.status(200).json(dietsDB)
        };
        fetch('https://spoonacular.com/food-api/docs/diet-definitions')
        .then(response => response.text())
        .then(text => {
            const $ = cheerio.load(text);
            const response = $('ul').map((i, elem) => {
                return {
                    items: $(elem).find('li').map((j, item) => $(item).text()).get()
                };
            }).get();
            const diets = [];
            const dietsString = response[3].items;
            dietsString.map((string) => {
                const splitString = string.split(':');
                diets.push({
                    name: splitString[0],
                    info: splitString[1].trim()
                });
            });
            diets.map( async ({ name, info }) => {
                await Diet.create({ name, info })
            });

            return res.status(200).json(diets)
        });
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getDiets