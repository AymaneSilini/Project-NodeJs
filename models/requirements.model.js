const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const requirementsSchema = mongoose.Schema({

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
}, {timestamps: false});

requirementsSchema.plugin(AutoIncrement, {inc_field: 'requirementsId'});


const Requirements = mongoose.model('Requirements', requirementsSchema);
module.exports = Requirements;