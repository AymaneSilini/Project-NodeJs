const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const dicountSchema = Schema({
  price:{
    type: Number,
    required: true
  }
}, {timestamps: true});

dicountSchema.plugin(AutoIncrement, {inc_field: 'discountId'});


const Discount = mongoose.model('Discount', dicountSchema);
module.exports = Discount;