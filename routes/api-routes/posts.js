const router = require('express').Router();
const recipesController = require('../../controllers/recipesController');

// Matches with "/api/books"
router
  .route('/')
  .get(recipesController.findAll)
  // .post(recipesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;
