const SQL = require('../db');

const ProductModel = function (product) {
    this.id = product.id;
    this.nom = product.nom;
    this.id_1 = product.id_1;
}

ProductModel.getBySousCategorieId = result => {
    SQL.query('SELECT * FROM produits WHERE id_1 = ' + id_1, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        };
        result(null, res);
    });
}

ProductModel.getById = result => {
    SQL.query('SELECT * FROM produits WHERE id = ' + id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        };
        result(null, res);
    });
}

module.exports = ProductModel;