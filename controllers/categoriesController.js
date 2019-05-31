const axios = require("axios");
const db = require("../models");
require("dotenv").config();

const key = process.env.SPOONKEY;

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" , {
        params
      }, key)
      .then(results =>
        results.data.items.filter(
          result =>
            result.recipes.title &&
            result.recipes.bigImg &&
            result.recipes.instructions &&
            result.recipes.prepTime 
        )
      )
  },
  // getRecipes: function(req, res) {
  //   console.log(req.body);
  // }
};

// var db = require('../models');

// // Routes
// // =============================================================
// module.exports = {
//   findAll: function(req, res) {
//     db.Post.findAll({}).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   },
//   create: function(req, res) {
//     db.Post.create({
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category,
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   },
// };
