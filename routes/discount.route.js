const discountController = require('../controllers/discount.controller');
const express = require('express');
const discountRouter = express.Router();
const app = express();


discountRouter.get('/', discountController.getDiscounts);
discountRouter.get('/:id', discountController.getDiscount);
discountRouter.post('/', discountController.postDiscount);
discountRouter.put('/:id', discountController.putDiscount);
discountRouter.delete('/:id', discountController.deleteDiscount);

module.exports = discountRouter;
