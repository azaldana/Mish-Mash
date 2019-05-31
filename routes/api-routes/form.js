const router = require('express').Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const formController = require('../../controllers/formController');


// router.route('/')
//   .get(formController.index);
  
  // router.route('/new')
  // .get(formController.new);

  router.route('/create')
  .post(multipartMiddleware, formController.create);


module.exports = router;

    