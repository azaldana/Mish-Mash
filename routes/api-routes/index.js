const router = require("express").Router();
const userRoutes = require("./user");
const formRoutes = require("./form");
const categoriesRoutes = require("./categories");

router.use("/users", userRoutes);
router.use("/form", formRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
