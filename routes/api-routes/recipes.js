require("dotenv").config();
const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");
const categoriesController = require("../../controllers/categoriesController");

// Recipes routes
router.route("/").post(recipesController.getRecipes);
router.route("/:id").get(recipesController.getRecipes);
router.route("/categories").post(categoriesController.findRecipe);
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
