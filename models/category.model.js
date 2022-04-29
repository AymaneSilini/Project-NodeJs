var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

var categorySchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  }
}, {timestamps: true});

categorySchema.plugin(AutoIncrement, {inc_field: 'categoryId'});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;