/*
Mentores visualizam:
Ultimas atividades concluídas pelos alunos.
*/
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    mentorName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mentor", mentorSchema);
