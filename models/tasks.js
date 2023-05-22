//import mongoose from "mongoose";
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  /*
    Treinamentos que ele se candidatou.
    Treinamentos que ele não passou (com indicação do motivo).
    Treinamentos que ele concluiu.
  */

  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
