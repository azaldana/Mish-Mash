const db = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: function (req, res) {
    const { username, password } = req.body;
    db.User
      .find({ username })
      .then(userFromDb => {
        bcrypt.compare(password, userFromDb.password, function (err, same) {
          if (same) {
            const token = "aaaa";
            jwt.sign({
              username: userFromDb.username,
              id: userFromDb._id
            }, "super-secret");
            return res.json({ token })
          } else {
            return res.staus(404).json({
              error: "This Password does not match our records."
            })
          }
        });
      })
  },
  signup: function (req, res) {
    const { username, password } = req.body;
    const hash = bcrypt.hash(password, 10, function (err, hash) {
      const user = {
        username,
        password: hash
      }
    })
  }
}

const db = require('../models');

module.exports = {
  findAll: function (req, res) {
      db.User
      .find(req.query)
      .sort({ date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}