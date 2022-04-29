const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Category = mongoose.model('Category');
const Platform = mongoose.model('Platform');
const Discount = mongoose.model('Discount');
const Requirements = mongoose.model('Requirements');

const gameSchema = mongoose.Schema({
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
    type: Float,
    required: true
  },
  category: { 
    type: Schema.ObjectId, ref: "Category" ,
    required: true
  },
  platform: { 
    type: Schema.ObjectId, ref: "Platform" ,
    required: true
  },
  requiremens: { 
    type: Schema.ObjectId, ref: "Requirements" ,
    required: true
  },
  discount: { 
    type: Schema.ObjectId, ref: "Discount" ,
    required: true
  },

}, {timestamps: true});

gameSchema.plugin(AutoIncrement, {inc_field: 'gameId'});


const Game = mongoose.model('Game', gameSchema);
module.exports = Game;