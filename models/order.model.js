var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var User = mongoose.model('User');

var orderSchema = mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  user: { 
    type: Schema.ObjectId, ref: "User" ,
    required: true
  },
}, {timestamps: true});

orderSchema.plugin(AutoIncrement, {inc_field: 'orderId'});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;