const orderlineController = require('../controllers/order-line.controller');
const express = require('express');
const orderlineRouter = express.Router();
const app = express();


orderlineRouter.get('/', orderlineController.getOrderLines);
orderlineRouter.get('/:id', orderlineController.getOrderLine);
orderlineRouter.post('/', orderlineController.postOrderLine);
orderlineRouter.put('/:id', orderlineController.putOrderLine);
orderlineRouter.delete('/:id', orderlineController.deleteOrderLine);

module.exports = orderlineRouter;
