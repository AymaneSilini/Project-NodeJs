const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const dicountSchema = mongoose.Schema({
  price:{
    type: Number,
    required: true
  },
  start:{
    type: Date,
    required: true
  },
  end:{
    type: Date,
    required: true
  },
}, {timestamps: false});

dicountSchema.plugin(AutoIncrement, {inc_field: 'discountId'});


const Discount = mongoose.model('Discount', dicountSchema);
module.exports = Discount;