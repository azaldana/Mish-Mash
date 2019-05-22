const router = require('express').Router();
const formController = require('../../controllers/formController');


router.route('/')
  .get(formController.index);
  
  router.route('/new')
  .get(formController.new);

  router.route('/create')
  .post(formController.create);


module.exports = router;

    