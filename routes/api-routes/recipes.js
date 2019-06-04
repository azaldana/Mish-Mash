require("dotenv").config();
const router = require('express').Router();
const recipesController = require('../../controllers/recipesController');


// Recipes routes
router.route('/recipes')
    .get(recipesController.getRecipes);
// router.route('/recipes')
//     .post((req,res)=>{
//         console.log("in the post");
//         res.send("test");
//     });

    // .post(recipesController.getRecipes);
// router.post('/recipes', function (req, res) {
//     console.log(req.body);
// })
module.exports = router;