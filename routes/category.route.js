const categoryController = require('../controllers/category.controller');
const express = require('express');
const categoryRouter = express.Router();
const app = express();


categoryRouter.get('/', categoryController.getCategory);
categoryRouter.get('/:id', categoryController.getCategory);
categoryRouter.post('/', categoryController.postCategory);
categoryRouter.put('/:id', categoryController.putCategory);
categoryRouter.delete('/:id', categoryController.deleteCategory);

module.exports = categoryRouter;
