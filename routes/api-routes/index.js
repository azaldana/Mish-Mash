const router = require('express').Router();
const userRoutes = require('./user');
// const formRoutes = require('./form');
const categoriesRoutes = require('./categories');


// Book routes
// router.use('/posts', postRoutes);
router.use('/users', userRoutes);
// router.use('/form', formRoutes);
router.use('/categories', categoriesRoutes);
// router.use('/recipes', recipesRoutes);

module.exports = router;