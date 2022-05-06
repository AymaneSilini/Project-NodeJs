const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const orderSchema = Schema({
  address: {
    type: String,
    required: true
  },
  user: { 
    type: Schema.ObjectId, ref: "User" ,
    required: true
  },
}, {timestamps: false});

orderSchema.plugin(AutoIncrement, {inc_field: 'orderId'});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;