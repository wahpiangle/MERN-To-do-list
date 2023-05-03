const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema to define the structure of document to be sent
const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
}, {timestamps: true});
//timestamps adds createdAt and updatedAt fields to the document

module.exports = mongoose.model('Workout', workoutSchema);