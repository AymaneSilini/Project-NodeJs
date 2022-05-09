const commentController = require('../controllers/comment.controller');
const express = require('express');
const commentRouter = express.Router();
const app = express();


commentRouter.get('/', commentController.getComments);
commentRouter.get('/:id', commentController.getComment);
commentRouter.post('/', commentController.postComment);
commentRouter.put('/:id', commentController.putComment);
commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
