const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("we are in the function for upload");
    console.log(req.body);
    db.Form.create(req.body).then(dbModel => res.json(dbModel));
  }
};
