var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Order = mongoose.model('Order');
var Game = mongoose.model('Game');

var orderLineSchema = mongoose.Schema({
  price: {
    type: Float,
    required: true
  },
  order: { 
    type: Schema.ObjectId, ref: "Order" ,
    required: true
  },
  game: { 
    type: Schema.ObjectId, ref: "Game" ,
    required: true
  },
}, {timestamps: true});

orderLineSchema.plugin(AutoIncrement, {inc_field: 'orderLineId'});


const OrderLine = mongoose.model('OrderLine', orderLineSchema);
module.exports = OrderLine;