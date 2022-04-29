var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = mongoose.model('User');

var orderSchema = new Schema({
  address: String,
  date: Date,
  user: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Comments", orderSchema);