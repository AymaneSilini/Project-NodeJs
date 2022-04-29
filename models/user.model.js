var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  lastName: String,
  surname: String,
  roleString: Date,
  mail: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);