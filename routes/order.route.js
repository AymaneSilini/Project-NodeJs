const orderController = require('../controllers/order.controller');
const express = require('express');
const orderRouter = express.Router();
const app = express();


orderRouter.get('/', orderController.getOrder);
orderRouter.get('/:id', orderController.getOrder);
orderRouter.post('/', orderController.postOrder);
orderRouter.put('/:id', orderController.putOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

module.exports = orderRouter;
