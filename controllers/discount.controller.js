const Discount = require('../models/discount.model');

function getDiscount(req, res) {
    Discount.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getDiscount (req, res) {
    Discount.findOne({DiscountId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Discount id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postDiscount (req, res) {
    if (!req.body.price) {
        return res.status(400).send('Missing Discount\'s price');
    }
    const Discount = new Discount({
        price: req.body.price,
        date: req.body.date,
    });
    Discount.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putDiscount (req, res) {
    if (!req.body.price) {
        return res.status(400).send('Missing Discount\'s price');
    }
    Discount.findOneAndUpdate({DiscountId: req.params.id}, {
        price: req.body.price,
        date: req.body.date,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteDiscount (req, res) {
    Discount.findOneAndDelete({DiscountId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
module.exports = {
    getDiscount, getDiscount, postDiscount,
    putDiscount, deleteDiscount
}
