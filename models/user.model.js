var mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

var userSchema = mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  surname: {
    type:String,
    required: true
  },
  role: {
    type:String,
    required: true
  },
  mail: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
}, {timestamps: true});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});


const User = mongoose.model('User', userSchema);
module.exports = User;