var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

var dicountSchema = mongoose.Schema({
  price:{
    type: Float,
    required: true
  }
}, {timestamps: true});

dicountSchema.plugin(AutoIncrement, {inc_field: 'discountId'});


const Discount = mongoose.model('Discount', dicountSchema);
module.exports = Discount;