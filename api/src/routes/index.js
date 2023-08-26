const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByTitle = require('../controllers/getRecipeByTitle');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/title/:title', getRecipeByTitle);

module.exports = router;
