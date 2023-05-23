//import mongoose from "mongoose";
const mongoose = require("mongoose");
const { DATE } = require("sequelize");

/*
São criados pelos administradores e possuem:
- Nome comercial;
- Código único do curso gerado pelo sistema;
- Descrição;
- Carga horária;
- Data de início e fim das inscrições;
- Data de início e fim do treinamento;
- Quantidade mínima e máxima de inscritos para que o treinamento seja ofertado;
- Tarefa seletora:

Aqui deve-se propor um Quiz tradicional:

- O proponente pode cadastrar quantas perguntas quiser;
- A pergunta deve ter pelo menos 3 possíveis respostas, sendo apenas uma verdadeira.
- Seu sistema deve corrigir sozinho e informar ao final quantas perguntas foram acertadas, 
isso deve ficar registrado no histórico do aluno.
- Aos alunos, os treinamentos que estão atualmente no período de inscrição
ficam disponíveis com a possibilidade de se inscrever e desinscrever.

*/

const TrainingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    usersId: {
      type: Array,
    },
    initialInscriptionDate: {
      type: Date,
      required: true,
    },
    finalInscriptionDate: {
      type: Date,
      required: true,
    },
    initialTraningDate: {
      type: Date,
      required: true,
    },
    finalTraningDate: {
      type: Date,
      required: true,
    },
    minimumAmount: {
      type: Number,
      required: true,
    },
    maximumAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Training", TrainingSchema);
