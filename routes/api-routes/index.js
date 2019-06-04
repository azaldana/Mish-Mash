const router = require("express").Router();
const userRoutes = require("./user");
const formRoutes = require("./form");
const categoriesRoutes = require("./categories");
const recipesRoutes = require("./recipes");
const unirest = require('unirest');

const key = process.env.SPOONKEY2;

router.use("/users", userRoutes);
router.use("/form", formRoutes);
router.use("/categories", categoriesRoutes);

const getRecipes = (req, res) =>{
    console.log("getRecipes",req.body);
    const { ingredient } = req.body;
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information")
        .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", key)
        .end(async function (result) {
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
}





router.route("/recipes").get(getRecipes);
// router.use("/recipes", ()=>{console.log("HEEEEEEELP!!")});



module.exports = router;
