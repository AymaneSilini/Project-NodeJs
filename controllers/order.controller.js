const Order = require('../models/order.model');

function getOrder(req, res) {
    Order.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}
function getOrder (req, res) {
    Order.findOne({OrderId: req.params.id})
    .then((result) =>{
        if (result) {
            res.send(result)
        } else {res.status(400).send(`Order id ${req.params.id} does not exist`)}
    })
    .catch((err) => res.status(500).send(err));
}

function postOrder (req, res) {
    if (!req.body.address) {
        return res.status(400).send('Missing Order\'s address');
    }
    const Order = new Order({
        address: req.body.address,
        date: req.body.date,
        user: req.body.user,
    });
    Order.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function putOrder (req, res) {
    if (!req.body.address) {
        return res.status(400).send('Missing Order\'s address');
    }
    Order.findOneAndUpdate({OrderId: req.params.id}, {
        address: req.body.address,
        date: req.body.date,
        user: req.body.user,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
function deleteOrder (req, res) {
    Order.findOneAndDelete({OrderId: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send(err)});
}

module.exports = {
    getOrder, getOrder, postOrder,
    putOrder, deleteOrder
}
