const SQL = require('../db');

const SousCategoryModel = function (sousCategory) {
    this.id = sousCategory.id;
    this.nom = sousCategory.nom;
    this.id_1 = sousCategory.id_1;
}

SousCategoryModel.getByCategorieId = result => {
    console.log('model');
    SQL.query('SELECT * FROM sous_categories WHERE id_1 = ' + id_1, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        };
        result(null, res);
    });
}

module.exports = SousCategoryModel;