const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  login: function(req, res) {
    const { username, password } = req.body;

    db.User.findOne({ username })
      .then(dbModel => {
        bcrypt.compare(password, dbModel.password, function(err, same) {
          if (same) {
            const token = jwt.sign(
              {
                username: dbModel.username,
                id: dbModel._id
              },
              "super secret"
            );
            console.log("DBMOPDEL!!", dbModel);
            return res.json({
              username: dbModel.username,
              id: dbModel._id,
              token
            });
          } else {
            return res.status(404).json({
              error: "Password and Username not matching"
            });
          }
        });
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const { username, password } = req.body;
    console.log(req.body);
    bcrypt.hash(password, 10, function(err, hash) {
      const user = {
        username,
        password: hash
      };
      db.User.create(user).then(dbModel => res.json(dbModel));
    });
  }
};
