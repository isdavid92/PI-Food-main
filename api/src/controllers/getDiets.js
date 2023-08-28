const cheerio = require('cheerio');
const errorHandler = require('../utils/errors');
const { Diet } = require('../db');

const getDiets = async (req, res) => {
    try {
        // const dietsDB = await Diet.findAll();
        // console.log(dietsDB);
        // if(dietsDB.length){
        //     return res.status(200).json(dietsDB)
        // };
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
            const info = [];
            const dietsInfo = [];
            const dietsString = response[3].items;
            dietsString.map((string) => {
                const splitString = string.split(':');
                const subtitle = splitString[0].replace(/ |-/g,'_');
                diets.push(subtitle);
                info.push(splitString[1].trim());
                dietsInfo.push({ [subtitle]: splitString[1].trim()})
            });
            console.log(diets);
            console.log(info);
            console.log(dietsInfo);
            return res.status(200).json(dietsInfo)
        });
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getDiets