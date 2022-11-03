const mongoose = require('mongoose');
const { Schema } = mongoose;

const washroomFeedbackSchema = new Schema({
    rating : {type : Number, required : true,},
    cleanliness : {type : Number, required : true,},
    availabilityOfToiletries : {type : Boolean, required : true,},
    feedbackMessage : {type : String, required : false},
});

module.exports = new mongoose.model("washroomfeedback",washroomFeedbackSchema);