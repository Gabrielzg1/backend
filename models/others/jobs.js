const mongoose = require("mongoose");
/*
Os parceiros podem administrar (CRUD) uma vaga que contem:
- Título da vaga;
- Empresa que está ofertando;
- Descrição das atividades a serem desempenhadas;
- Requisitos para candidatura;
- Faixa salarial;
- Lista com os usuários inscritos;

Os alunos podem visualizar a lista de todas as vagas disponíveis 
e podem se candidatar a qualquer uma.
*/
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  minimumSalary: {
    type: Number,
    require: true,
  },
  maximumSalary: {
    type: Number,
    require: true,
  },
  studentsId: {
    type: Array,
  },
});

module.exports = mongoose.model("Job", jobSchema);
