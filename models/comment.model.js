const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const commentSchema = Schema({

  date: {
    type: Date, 
    required: true
  },
  content:{
    type: String,
    required: true
  },
  user: { 
    type: Number, ref: "User",
    required: true
   },
  game: { 
    type: Number, ref: "Game",
  required: true
 },
}, {timestamps: false});

commentSchema.plugin(AutoIncrement, {inc_field: 'commentId'});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;