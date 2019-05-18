
const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const isAuthenticated = require('../../controllers/authentication');

// Matches with "/api/books"
router.route('/login').post(isAuthenticated, usersController.login);
router.route('/validate').post(isAuthenticated, usersController.validateToken);
router.route('/signup').post(isAuthenticated, usersController.signup);

module.exports = router;