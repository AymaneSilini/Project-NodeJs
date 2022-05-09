const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const gameSchema = Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: { 
    type: Number, ref: "Category" ,
    required: true
  },
  platform: { 
    type: Number, ref: "Platform" ,
    required: true
  },
  requirements: { 
    type: Number, ref: "Requirements" ,
    required: false
  },
  discount: { 
    type: Number, ref: "Discount" ,
    required: false
  },

}, {timestamps: false});

gameSchema.plugin(AutoIncrement, {inc_field: 'gameId'});


const Game = mongoose.model('Game', gameSchema);
module.exports = Game;