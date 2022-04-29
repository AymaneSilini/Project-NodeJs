var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Category = mongoose.model('Category');
var Platform = mongoose.model('Platform');
var Discount = mongoose.model('Discount');
var Requirements = mongoose.model('Requirements');

var gameSchema = new Schema({
  name: String,
  date: Date,
  photo: String,
  video: String,
  synopsis: String,
  developer: String,
  price: Float,
  category: { type: Schema.ObjectId, ref: "Category" },
  platform: { type: Schema.ObjectId, ref: "Platform" },
  requiremens: { type: Schema.ObjectId, ref: "Requirements" },
  discount: { type: Schema.ObjectId, ref: "Discount" },

});

module.exports = mongoose.model("Game", gameSchema);