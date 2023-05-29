/*
Relacionado com o treinamento, primeira parte 
que se deve realizar antes de ser aprovado para o treinamento
*/
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  trainingId: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: { type: String },
      options: { type: Array },
    },
  ],
  answers: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
