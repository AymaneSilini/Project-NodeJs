const gameController = require('../controllers/game.controller');
const express = require('express');
const gameRouter = express.Router();
const app = express();


gameRouter.get('/', gameController.getGame);
gameRouter.get('/:id', gameController.getGame);
gameRouter.post('/', gameController.postGame);
gameRouter.put('/:id', gameController.putGame);
gameRouter.delete('/:id', gameController.deleteGame);

module.exports = gameRouter;
