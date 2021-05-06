const Product = require('../model/products.model');

exports.getBySousCategorieId = (req, res, next) => {
    id_1 = req.params.sousCategorie_id;
    Product.getBySousCategorieId((err, data) => {
        console.log("controller out");
  
        if (err) {
          res.status(500).json({
            message: err.message || "error",
          });
        } else {
            res.status(200).json({
              data: data,
            });
        }
    });
}

exports.getById = (req, res, next) => {
    id = req.params.product_id;
    Product.getById((err, data) => {
        console.log("controller out");
  
        if (err) {
          res.status(500).json({
            message: err.message || "error",
          });
        } else {
            res.status(200).json({
              data: data[0],
            });
        }
      });
}