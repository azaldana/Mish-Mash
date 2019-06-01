const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/create").post(formController.create);

module.exports = router;
