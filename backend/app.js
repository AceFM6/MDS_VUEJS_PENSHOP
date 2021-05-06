const express = require("express");
// const database = require ("./db");
const cors = require ("cors");

const CategoriesRoutes = require('./route/categories.route');
const SousCategoriesRoutes = require('./route/sousCategories.route');
const ProductsRoutes = require('./route/products.route');

const app = express();

var corsOption = {
    origin: "http://localhost:8080"
};

app.use('/categories', CategoriesRoutes);
app.use('/sous-categories', SousCategoriesRoutes);
app.use('/products', ProductsRoutes);

module.exports = app;