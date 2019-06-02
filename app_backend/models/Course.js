const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({
    name : {
        type: String,
        default: ''
    },
    code : {
        type: String,
        default: ''
    },
    passMark : {
        type: String,
        default: ''
    },
    lectureInCharge: {
        type: String,
        default: ''
    },
    subjects : {
        type: [{type:String}]
    }
});

module.exports = mongoose.model('Course', Course);
