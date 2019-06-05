const db = require("../models");
require("dotenv").config();
const unirest = require("unirest");

const key = process.env.SPOONKEY2;

module.exports = {
  getRecipes: function(req, res) {
    console.log("getRecipes", req.params);
    const id = req.params.id;
    unirest
      .get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header("X-RapidAPI-Key", key)
      .end(async function(result) {
        console.log(result.body);
        const r = result.body;
        db.Recipes.create({
          id: r.id,
          image: r.image,
          title: r.title,
          ingredients: r.extendedIngredients.map(i => i.originalString),
          instructions: r.instructions,
          preparationMinutes: r.preparationMinutes,
          servings: r.servings
        });
        res.json(result.body);
      });
  },
  searchRecipes: function(req, res) {
    console.log("line 29", req.params.id);
  }
};
