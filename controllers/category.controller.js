const Category = require('../models/category.model');

function getCategory(req, res) {
    Category.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getCategory (req, res) {
    Category.findOne({CategoryId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Category id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postCategory (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Category\'s name');
    }
    const category = new Category({
        name: req.body.name,
    });
    category.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putCategory (req, res) {
    if (!req.body.name) {
        return res.status(400).send('Missing Category\'s name');
    }
    Category.findOneAndUpdate({CategoryId: req.params.id}, {
        name: req.body.name,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteCategory (req, res) {
    Category.findOneAndDelete({CategoryId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getCategory, getCategory, postCategory,
    putCategory, deleteCategory
}
