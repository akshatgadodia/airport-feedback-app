const mongoose = require('mongoose');
const { Schema } = mongoose;

const helpDeskFeedbackSchema = new Schema({
    rating : {type : Number, required : true,},
    staffEfficiency : {type : Number, required : true,},
    staff : {type : Number, required : true,},
    feedbackMessage : {type : String, required : false},
});

module.exports = new mongoose.model("helpdeskfeedback",helpDeskFeedbackSchema);