const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const platformSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  }
}, {timestamps: true});

platformSchema.plugin(AutoIncrement, {inc_field: 'platformId'});


const Platform = mongoose.model('Platform', platformSchema);
module.exports = Platform;