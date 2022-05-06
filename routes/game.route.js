const gameController = require('../controllers/game.controller');
const express = require('express');
const gameRouter = express.Router();
const app = express();


gameRouter.get('/', gameController.getGames);
gameRouter.get('/:id', gameController.getGame);
gameRouter.get('/name/:name', gameController.getGameByName);
gameRouter.get('/platform/:platform', gameController.getGameByPlatform);
gameRouter.get('/category/:category', gameController.getGameByCategory);
gameRouter.post('/', gameController.postGame);
gameRouter.put('/:id', gameController.putGame);
gameRouter.delete('/:id', gameController.deleteGame);

module.exports = gameRouter;
