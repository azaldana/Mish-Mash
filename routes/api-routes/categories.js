require("dotenv").config();
const router = require('express').Router();
const categoriesController = require('../../controllers/categoriesController');


// Recipes routes
router.route('/')
    .post(categoriesController.findAll);
router.route('/x')
    .post(categoriesController.findRecipe);
// router.post('/recipes', function (req, res) {
//     console.log(req.body);
// })
module.exports = router;