const OrderLine = require('../models/order-line.model');

function getOrderLines(req, res) {
    OrderLine.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getOrderLine (req, res) {
    OrderLine.findOne({OrderLineId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`OrderLine id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postOrderLine (req, res) {
    if (!req.body.order) {
        return res.status(400).send('Missing OrderLine\'s order');
    }
    const orderLine = new OrderLine({
        price: req.body.price,
        date: req.body.date,
        order: req.body.order,
        game: req.body.game,
    });
    orderLine.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putOrderLine (req, res) {
    if (!req.body.order) {
        return res.status(400).send('Missing OrderLine\'s order');
    }
    OrderLine.findOneAndUpdate({OrderLineId: req.params.id}, {
        price: req.body.price,
        date: req.body.date,
        order: req.body.order,
        game: req.body.game,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteOrderLine (req, res) {
    OrderLine.findOneAndDelete({OrderLineId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getOrderLines, getOrderLine, postOrderLine,
    putOrderLine, deleteOrderLine
}
