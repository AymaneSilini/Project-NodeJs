var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = mongoose.model('User');
var Game = mongoose.model('Game');

var commentSchema = new Schema({
  content: String,
  date: Date,
  user: { type: Schema.ObjectId, ref: "User" },
  game: { type: Schema.ObjectId, ref: "Game" },
});

module.exports = mongoose.model("Comments", commentSchema);