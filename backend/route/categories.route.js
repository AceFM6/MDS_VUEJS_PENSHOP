const Express = require('express');
const Router = Express.Router();

const CategoriesController = require('../controller/categorie.controller');

Router.get('/', CategoriesController.getAll);

module.exports = Router;