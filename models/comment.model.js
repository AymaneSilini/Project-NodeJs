var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var User = mongoose.model('User');
var Game = mongoose.model('Game');

var commentSchema = mongoose.Schema({
  date: {
    type: Date, 
    required: true
  },
  content:{
    type: String,
    required: true
  },
  user: { 
    type: Schema.ObjectId, ref: "User",
    required: true
   },
  game: { 
    type: Schema.ObjectId, ref: "Game",
  required: true
 },
}, {timestamps: true});

commentSchema.plugin(AutoIncrement, {inc_field: 'commentId'});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;