const User = require('../model/user.model');

exports.create = (req, res, next) => {
  console.log(req.body)
  User.create(req.body, (err) => {
    if (err) {
      res.status(500).json({
        message: err.message || "error",
      });
    } else {
      res.status(200).json({
        status: 'success',
      });
    }
  });
};