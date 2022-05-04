const platformController = require('../controllers/platform.controller');
const express = require('express');
const platformRouter = express.Router();
const app = express();


platformRouter.get('/', platformController.getPlatforms);
platformRouter.get('/:id', platformController.getPlatform);
platformRouter.post('/', platformController.postPlatform);
platformRouter.put('/:id', platformController.putPlatform);
platformRouter.delete('/:id', platformController.deletePlatform);

module.exports = platformRouter;
