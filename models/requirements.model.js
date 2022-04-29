const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;

const requirementsSchema = Schema({

    OS: {
        type: String, 
        required: true
    },
    processor: {
        type: String, 
        required: true
    }, 
    memory: {
        type: String, 
        required: true
    },
    graphics: {
        type: String, 
        required: true
    },
    storage: {
        type: String, 
        required: true
    },
}, {timestamps: true});

requirementsSchema.plugin(AutoIncrement, {inc_field: 'requirementsId'});


const Requirements = mongoose.model('Requirements', requirementsSchema);
module.exports = Requirements;