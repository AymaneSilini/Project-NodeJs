const Discount = require('../models/discount.model');

function getDiscounts(req, res) {
    Discount.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getDiscount (req, res) {
    Discount.findOne({discountId: req.params.id})
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
    const discount = new Discount({
        price: req.body.price,
        start: req.body.start,
        end: req.body.end,

    });
    discount.save()
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
    Discount.findOneAndUpdate({discountId: req.params.id}, {
        price: req.body.price,
        start: req.body.start,
        end: req.body.end,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteDiscount (req, res) {
    Discount.findOneAndDelete({discountId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
module.exports = {
    getDiscounts, getDiscount, postDiscount,
    putDiscount, deleteDiscount
}
