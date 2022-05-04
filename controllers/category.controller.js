const Category = require('../models/category.model');

function getCategories(req, res) {
    Category.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getCategory (req, res) {
    Category.findOne({categoryId: req.params.id})
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
    Category.findOneAndUpdate({categoryId: req.params.id}, {
        name: req.body.name,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteCategory (req, res) {
    Category.findOneAndDelete({categoryId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getCategories, getCategory, postCategory,
    putCategory, deleteCategory
}
