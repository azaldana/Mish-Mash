const router = require("express").Router();
const userRoutes = require("./user");
const formRoutes = require("./form");
const categoriesRoutes = require("./categories");
const recipesRoutes = require("./recipes");

router.use("/users", userRoutes);
router.use("/form", formRoutes);
router.use("/categories", categoriesRoutes);
router.use("/recipes",recipesRoutes);
module.exports = router;
