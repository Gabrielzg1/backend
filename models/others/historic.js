//import mongoose from "mongoose";
const mongoose = require("mongoose");

const historicSchema = new mongoose.Schema(
  {
    // Identificação do usuário
    userId: {
      type: String,
      required: true,
    },
    // Treinamentos que ele se candidatou.
    applied: {
      type: Array,
    },
    // Treinamentos que ele não passou (com indicação do motivo).
    disapprove: [
      {
        id: { type: Array },
        reason: { type: String },
      },
    ],
    // Treinamentos que ele concluiu.
    finished: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Historic", historicSchema);
