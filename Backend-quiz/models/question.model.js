const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const questionSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: Number, required: true }
});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
