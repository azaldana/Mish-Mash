require("dotenv").config();
const router = require('express').Router();
const recipesRoutes = require('./recipes');


// Recipes routes
router.use('/recipes', recipesRoutes);

module.exports = router;