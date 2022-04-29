var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var requirementsSchema = new Schema({
    OS: String, 
    processor: String, 
    memory: STring, 
    graphics: String, 
    storage: String,
});

module.exports = mongoose.model("Requirements", requirementsSchema);