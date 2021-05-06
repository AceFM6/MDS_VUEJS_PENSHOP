const express = require("express");
// const database = require ("./db");
const cors = require ("cors");

const CategoriesRoutes = require('./route/categories.route');
const SousCategoriesRoutes = require('./route/sousCategories.route');
const ProductsRoutes = require('./route/products.route');
const UserRoutes = require('./route/user.route');

const app = express();
app.use(express.json());

var corsOption = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOption));

app.use('/categories', CategoriesRoutes);
app.use('/sous-categories', SousCategoriesRoutes);
app.use('/products', ProductsRoutes);
app.use('/user', UserRoutes);

module.exports = app;