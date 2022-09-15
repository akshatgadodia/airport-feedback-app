const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    mobilenumber : {type : Number, required : true, minLength : [10,"Error"]},
    pnr : {type : String, required : true},
});

module.exports = new mongoose.model("user",userSchema);