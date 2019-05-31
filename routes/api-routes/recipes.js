require("dotenv").config();
const router = require('express').Router();
const recipesController = require('../..controllers/recipesController');


// Recipes routes
router.route('/recipes/:query')
    .get(recipesController.findAll);
router.routes('/recipes')
    .post(recipesController.getRecipes);
// router.post('/recipes', function (req, res) {
//     console.log(req.body);
// })
module.exports = router;