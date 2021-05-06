const Express = require('express');
const Router = Express.Router();

const ProductsController = require('../controller/products.controller');

Router.get('/:sousCategorie_id', ProductsController.getBySousCategorieId);
Router.get('/:sousCategorie_id/:product_id', ProductsController.getById);

module.exports = Router;