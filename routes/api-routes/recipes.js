require("dotenv").config();
const router = require('express').Router();
const categoriesController = require('../..controllers/categoriesController');


// Recipes routes
router.route('/categories/:query')
    .get(categoriesController.findAll);
router.routes('/categories')
    .post(categoriesController.getCategories);
// router.post('/recipes', function (req, res) {
//     console.log(req.body);
// })
module.exports = router;