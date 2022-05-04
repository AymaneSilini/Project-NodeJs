const Requirements = require('../models/requirements.model');

function getRequirements(req, res) {
    Requirements.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getRequirement (req, res) {
    Requirements.findOne({requirementsId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Requirements id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postRequirements (req, res) {
    if (!req.body.OS) {
        return res.status(400).send('Missing Requirements\'s OS');
    }
    const requirements = new Requirements({
        OS: req.body.OS,
        processor: req.body.processor,
        memory: req.body.memory,
        graphics: req.body.graphics,
        storage: req.body.storage,
    });
    requirements.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putRequirements (req, res) {
    if (!req.body.OS) {
        return res.status(400).send('Missing Requirements\'s OS');
    }
    Requirements.findOneAndUpdate({requirementsId: req.params.id}, {
        OS: req.body.OS,
        processor: req.body.processor,
        memory: req.body.memory,
        graphics: req.body.graphics,
        storage: req.body.storage,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteRequirements (req, res) {
    Requirements.findOneAndDelete({requirementsId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getRequirements, getRequirement, postRequirements,
    putRequirements, deleteRequirements
}
