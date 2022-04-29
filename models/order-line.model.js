var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Order = mongoose.model('Order');
var Game = mongoose.model('Game');

var orderLineSchema = new Schema({
  price: Float,
  date: Date,
  order: { type: Schema.ObjectId, ref: "Order" },
  game: { type: Schema.ObjectId, ref: "Game" },
});

module.exports = mongoose.model("Comments", orderLineSchema);