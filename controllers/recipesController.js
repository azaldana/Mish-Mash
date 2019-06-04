const db = require("../models");
require("dotenv").config();
const unirest = require('unirest');

const key = process.env.SPOONKEY2;

module.exports = {
    findAll: function (req, res) {
        console.log(req.body);
        const { ingredient } = req.body;
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information")
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                console.log(result.body.map(r => r.id))
                await Promise.all(result.body.map(r => db.Recipes.create({
                    id: r.id,
                    image: r.image,
                    title: r.title,
                    ingredients: r.extendedIngredients.originalString,
                    instructions: r.instructions,
                    preparationMinutes: r.preparationMinutes,
                    servings: r.servings
                })))
                res.json(result.body)
            });
    },
};
