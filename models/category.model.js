const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  }
}, {timestamps: false});

categorySchema.plugin(AutoIncrement, {inc_field: 'categoryId'});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;