const SQL = require('../db');

const CategoryModel = function (category) {
    this.id = category.id;
    this.nom = category.nom;
}

CategoryModel.getAll = result => {
    console.log('model');
    SQL.query('SELECT * FROM categories', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        };
        result(null, res);
    });
}

module.exports = CategoryModel;