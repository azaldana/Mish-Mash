const router = require('express').Router();
const postRoutes = require('./posts');
const userRoutes = require('./user');
const formRoutes = require('./form');

// Book routes
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/form', formRoutes);

module.exports = router;
