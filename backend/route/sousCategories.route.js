const Express = require('express');
const Router = Express.Router();

const SousCategoriesController = require('../controller/sousCategories.controller');

Router.get('/:categorie_id', SousCategoriesController.getByCategorieId);

module.exports = Router;