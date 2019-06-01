const axios = require("axios");
const db = require("../models");
require("dotenv").config();
const unirest = require('unirest');

const key = process.env.SPOONKEY;

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function (req, res) {
    console.log(req.body);
    const { ingredient } = req.body;
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + ingredient)
      .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", key)
      .end(async function (result) {
        console.log(result.body.map(r => r.id))
        await Promise.all(result.body.map(r => db.Categories.create({
          id: r.id,
          image: r.image,
          title: r.title,
        })))  
        res.json(result.body)
      });

    // const recipes = results.data.items.map(recipe => ({
    //   spoonacularId: recipe.id,
    //   title: recipe.title,
    //   image: recipe.image
    // })
    // )

    // db.Recipes
    //   .create(recipes)
    //   .then(dbModel => res.json(dbModel))

    //   .then(results => {
    //     const recipes = results.data.items.map(recipe => ({
    //       spoonacularId: recipe.id,
    //       title: recipe.title,
    //       image: recipe.image
    //     })
    //     )
    //     // return recipes;
    //   })
    // .then(recipes => {
    //   console.log(recipes);
    //   recipes.foreach(recipe => {
    //     db.Recipes.create(recipe)
    //     // .then(dbModel => res.json(dbModel))
    //   })
    // })

    // result.recipes.title &&
    // result.recipes.bigImg &&
    // result.recipes.instructions &&
    // result.recipes.prepTime 
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
