const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" , {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.recipes.title &&
            result.recipes.bigImg &&
            result.recipes.instructions &&
            result.recipes.prepTime 
        )
      )
      .then(apiRecipes =>
        db.Recipes.find().then(dbRecipes =>
          apiRecipes.filter(apiRecipes =>
            dbRecipes.every(dbRecipes => dbRecipes.spoonacularId.toString() !== apiRecipes.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
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
