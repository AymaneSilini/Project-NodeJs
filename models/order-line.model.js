const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Order = mongoose.model('Order');
const Game = mongoose.model('Game');

const orderLineSchema = mongoose.Schema({
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