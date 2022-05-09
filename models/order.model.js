const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const orderSchema = Schema({
  total: {
    type: Number,
    required: true
  },
  user: { 
    type: Number, ref: "User" ,
    required: true
  },
  games: { 
    type: [String], ref: "Games" ,
    required: false
  },
}, {timestamps: true});

orderSchema.plugin(AutoIncrement, {inc_field: 'orderId'});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;