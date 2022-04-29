const Platform = require('../models/platform.model');

function getPlatform(req, res) {
    Platform.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getPlatform (req, res) {
    Platform.findOne({PlatformId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Platform id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postPlatform (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Platform\'s name');
    }
    const Platform = new Platform({
        name: req.body.name,
    });
    Platform.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putPlatform (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Platform\'s name');
    }
    Platform.findOneAndUpdate({PlatformId: req.params.id}, {
        name: req.body.name,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deletePlatform (req, res) {
    Platform.findOneAndDelete({PlatformId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getPlatform, getPlatform, postPlatform,
    putPlatform, deletePlatform
}
