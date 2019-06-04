const db = require("../models");
require("dotenv").config();
const unirest = require('unirest');

const key = process.env.SPOONKEY;

module.exports = {
  findAll: function (req, res) {
    console.log("Hello", req.body);
    const { ingredient } = req.body;
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=" + ingredient)
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
  },
  findRecipe: function (req, res) {
    console.log("line 25", req.body);
  }
};


