var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var discountSchema = new Schema({
  price: Float,
  date: Date,
});

module.exports = mongoose.model("Discount", discountSchema);