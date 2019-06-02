const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subject = new Schema({
    _id : {
        type: String,
        default: ''
    },
    name : {
        type: String,
        default: ''
    },
    description : {
        type: String,
        default: ''
    },
    amount : {
        type : String,
        default: ''
    }

});
module.exports = mongoose.model('Subject',Subject);