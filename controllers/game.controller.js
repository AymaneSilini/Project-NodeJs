const Game = require('../models/game.model');

function getGames(req, res) {
    Game.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getGame (req, res) {
    Game.findOne({GameId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Game id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postGame (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Game\'s name');
    }
    const game = new Game({
        name: req.body.name,
        date: req.body.date,
        photo: req.body.photo,
        video: req.body.video,
        synopsis: req.body.synopsis,
        developer: req.body.developer,
        price: req.body.price,
        category: req.body.category,
        platform: req.body.platform,
        requirements: req.body.requirements,
        discount: req.body.discount,

    });
    game.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putGame (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Game\'s name');
    }
    Game.findOneAndUpdate({GameId: req.params.id}, {
        name: req.body.name,
        date: req.body.date,
        photo: req.body.photo,
        video: req.body.video,
        synopsis: req.body.synopsis,
        developer: req.body.developer,
        price: req.body.price,
        category: req.body.category,
        platform: req.body.platform,
        requirements: req.body.requirements,
        discount: req.body.discount,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteGame (req, res) {
    Game.findOneAndDelete({GameId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getGames, getGame, postGame,
    putGame, deleteGame
}
