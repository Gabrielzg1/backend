const Training = require("../../models/others/training");
const User = require("../../models/permissions/user");

class TrainingController {
  async index(req, res) {
    try {
      const tranings = await Training.find();
      return res.json(tranings).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.body;
      const traning = await Training.findById(id);
      if (!traning) return res.status(404).json({ msg: "Training not found" });
      return res.json(traning);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const {
        name,
        initialInscriptionDate,
        finalInscriptionDate,
        initialTrainingDate,
        finalTrainingDate,
        description,
        workload,
        minimumAmount,
        maximumAmount,
      } = req.body;

      const newTraning = await Training.create({
        name,
        initialInscriptionDate,
        finalInscriptionDate,
        initialTrainingDate,
        finalTrainingDate,
        description,
        workload,
        minimumAmount,
        maximumAmount,
      });

      return res.status(201).json(newTraning);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async updateStudents(req, res) {
    try {
      const { userId } = req.body;
      const { traningId } = req.params;
      const training = await Training.findById(traningId);
      if (!training) return res.status(422).json();
      const user = await User.findById(userId);
      if (!user) return res.status(422).json({ msg: "Usuário não encontrado" });

      if (training.students.indexOf(userId) !== -1)
        return res.status(422).json({ msg: "Usuário já cadastrado" });

      let newStudents = [].concat(training.students, userId);

      await training.updateOne({ students: newStudents });
      return res.status(201).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new TrainingController();
