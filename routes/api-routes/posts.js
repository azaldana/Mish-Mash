const router = require('express').Router();
const categoriesController = require('../../controllers/categoriesController');

// Matches with "/api/books"
router
  .route('/')
  .get(categoriesController.findAll)
  // .post(categoriesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;
