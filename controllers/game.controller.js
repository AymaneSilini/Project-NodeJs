const Category = require('../models/category.model');
const Game = require('../models/game.model');
const Platform = require('../models/platform.model');

function getGames(req, res) {
    Game.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getGame (req, res) {
    Game.findOne({gameId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
            console.log(result)
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
    Game.findOneAndUpdate({gameId: req.params.id}, {
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
    Game.findOneAndDelete({gameId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

function getGameByName(req,res){
    Game.find({ name:req.params.name})
    .then((result) => {
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Game name ${req.params.name} does not exist`)}
    }).catch((err) => {res.status(500).send(err)});
}

function getGameByPlatform(req,res){
    Platform.find({name:req.params.platform})
    .then((result)=> {
        if (result){
            var plat = result[0]._id;
            Game.find({ platform:plat})
            .then((result) => {
                if (result) {
                    res.send(result)
                } else {res.status(400).send(`Game platform ${req.params.platform} does not exist`)}
            }).catch((err) => {res.status(500).send(err)});
        }
        else {res.status(400).send(`No game correspond to ${req.params.platform} platform`)}
    }).catch((err) => {res.status(500).send(err)});
}

function getGameByCategory(req,res){
    Category.find({name:req.params.category})
    .then((result)=> {
        if (result){
            var cate = result[0]._id;
            Game.find({ category:cate})
            .then((result) => {
                if (result) {
                    res.send(result)
                } else {res.status(400).send(`Game category ${req.params.category} does not exist`)}
            }).catch((err) => {res.status(500).send(err)});
        }
        else {res.status(400).send(`No game correspond to ${req.params.category} category`)}
    }).catch((err) => {res.status(500).send(err)});
    
    
}



module.exports = {
    getGames, getGame, postGame,
    putGame, deleteGame, getGameByName, getGameByPlatform, getGameByCategory
}
