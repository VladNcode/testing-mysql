const express = require('express');
const beerController = require('../controllers/beerController');

const router = express.Router();

router.route('/').get(beerController.getAll).post(beerController.create);
router
  .route('/:id')
  .get(beerController.getOne)
  .patch(beerController.update)
  .delete(beerController.delete);

module.exports = router;
