const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const platformSchema = Schema({
  name:{
    type: String,
    required: true
  }
}, {timestamps: false});


platformSchema.plugin(AutoIncrement, {inc_field: 'platformId'});
const Platform = mongoose.model('Platform', platformSchema);
module.exports = Platform;