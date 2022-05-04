const User = require('../models/user.model');

function getUsers (req, res) {
    User.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getUser (req, res) {
    User.findOne({userId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`User id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postUser (req, res) {
    if (!req.body.alias) {
        return res.status(400).send('Missing User\'s alias');
    }
    const user = new User({
        alias:req.body.alias,
        lastName: req.body.lastName,
        firstname: req.body.firstname,
        alias : req.body.alias,
        password: req.body.password,
        mail: req.body.mail
    });
    user.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putUser (req, res) {
    if (!req.body.alias) {
        return res.status(400).send('Missing User\'s alias');
    }
    User.findOneAndUpdate({userId: req.params.id}, {
        name:req.body.name,
        lastName: req.body.lastName,
        firstname: req.body.firstname,
        alias : req.body.alias,
        password: req.body.password,
        mail: req.body.mail
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteUser (req, res) {
    User.findOneAndDelete({userId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getUsers, getUser, postUser, putUser, deleteUser
}
