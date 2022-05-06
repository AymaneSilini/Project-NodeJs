const Comment = require('../models/comment.model');
const User = require('../models/user.model');
const Game = require('../models/game.model');

function getComments(req, res) {
    Comment.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getComment (req, res) {
    Comment.findOne({commentId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Comment id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postComment (req, res) {
    if (!req.body.content) {
        return res.status(400).send('Missing Comment\'s content');
    }
    const comment = new Comment({
        content: req.body.content,
        date: req.body.date,
        user: req.body.user,
        game: req.body.game,
    });
    comment.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putComment (req, res) {
    if (!req.body.content) {
        return res.status(400).send('Missing Comment\'s content');
    }
    Comment.findOneAndUpdate({commentId: req.params.id}, {
        content: req.body.content,
        date: req.body.date,
        user: req.body.user,
        game: req.body.game,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteComment (req, res) {
    Comment.findOneAndDelete({commentId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

function getCommentByUser(req,res){
    Comment.find({user:req.params.id}).then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

function getCommentByAlias(req,res){
    User.find({alias:req.params.alias})
    .then((result)=> {
        if (result){
            var user = result[0].userId;
            Comment.find({ userId:user})
            .then((result) => {
                if (result) {
                    res.send(result)
                } else {res.status(400).send(`User ${req.params.user} does not exist`)}
            }).catch((err) => {res.status(500).send(err)});
        }
        else {res.status(400).send(`${req.params.user} does no have comment`)}
    }).catch((err) => {res.status(500).send(err)});
    
}

module.exports = {
    getComments, getComment, postComment,
    putComment, deleteComment, getCommentByUser, getCommentByAlias
}
