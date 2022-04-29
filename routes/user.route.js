const userController = require('../controllers/user.controller');
const express = require('express');
const userRouter = express.Router();
const app = express();


userRouter.get('/', userController.getUser);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.postUser);
userRouter.put('/:id', userController.putUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
