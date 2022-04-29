var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var platformSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Platform", platformSchema);