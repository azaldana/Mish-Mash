require("dotenv").config();
const router = require('express').Router();
const recipesController = require('../..controllers/recipesController');


// Recipes routes
router.route('/recipes/:query')
    .get(recipesController.findAll);

module.exports = router;