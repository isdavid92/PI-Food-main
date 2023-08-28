const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByTitle = require('../controllers/getRecipeByTitle');
const postRecipe = require('../controllers/postRecipe');
const getDiets = require('../controllers/getDiets');

const router = express.Router();
router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/title/:title', getRecipeByTitle);
router.get('/diets', getDiets);
router.post('/recipes', postRecipe);


module.exports = router;
