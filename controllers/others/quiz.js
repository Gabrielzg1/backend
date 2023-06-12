const Quiz = require("../../models/others/quiz");

class QuizController {
  async index(req, res) {
    try {
      const quiz = await Quiz.find();
      return res.json(quiz).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const quiz = await Quiz.findOne({ trainingId: id });
      if (!quiz) return res.status(404).json({ msg: "Not found" });
      return res.json(quiz);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { trainingId, questions } = req.body;

      const quiz = await Quiz.findOne({ trainingId });
      if (quiz) return res.json({ msg: "Quiz já criado" }).status(500);

      const newQuiz = await Quiz.create({
        trainingId,
        questions,
      });

      return res.status(201).json(newQuiz);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new QuizController();
