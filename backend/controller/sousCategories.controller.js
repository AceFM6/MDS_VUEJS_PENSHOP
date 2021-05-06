const SousCategory = require("../model/sousCategories.model");

exports.getByCategorieId = (req, res, next) => {
    console.log("controller in");

    id_1 = req.params.categorie_id;
    SousCategory.getByCategorieId((err, data) => {
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
};