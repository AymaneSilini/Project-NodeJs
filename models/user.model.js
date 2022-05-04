const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const userSchema = mongoose.Schema({
  alias: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  firstname: {
    type:String,
    required: true
  },
  role: {
    type:String,
    default:'user'
  },
  mail: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  token: {
    type:String
  }
}, {timestamps: true});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});
const User = mongoose.model('User', userSchema);
module.exports = User;