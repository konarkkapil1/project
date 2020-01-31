const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    date:{
        type:Date,
        default:Date.now
    },
    coords:{
        type:String
    },
    temprature:{
        type:String
    },
    bpm:{
        type:String
    },
    fall:{
        type:String,
        default: 0
    }
});

module.exports = mongoose.model("myData",dataSchema)