const requirementsController = require('../controllers/requirements.controller');
const express = require('express');
const requirementsRouter = express.Router();
const app = express();


requirementsRouter.get('/', requirementsController.getRequirements);
requirementsRouter.get('/:id', requirementsController.getRequirements);
requirementsRouter.post('/', requirementsController.postRequirements);
requirementsRouter.put('/:id', requirementsController.putRequirements);
requirementsRouter.delete('/:id', requirementsController.deleteRequirements);

module.exports = requirementsRouter;
