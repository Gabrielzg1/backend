const Mentor = require("../../models/permissions/mentor");

class mentorsController {
  async index(req, res) {
    try {
      const mentors = await Mentor.find();
      return res.json(mentors).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const mentor = await Mentor.findById(id);
      if (!mentor) return res.status(404).json({ error: "Mentor not Found" });
      return res.json(mentor).status(200);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { mentorName, email, password } = req.body;
      const mentor = await Mentor.findOne({ email });

      if (mentor) {
        return res
          .status(422)
          .json({ message: `mentor ${email} alreary exists` });
      }

      //crypt the password
      const newmentor = await Mentor.create({
        mentorName: mentorName,
        email: email,
        password: password,
      });

      return res.status(201).json(newmentor);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const mentor = await Mentor.findById(id);

      if (!mentor) {
        return res.status(404).json();
      }

      await mentor.updateOne({ email, password });

      return res.status(200).json(mentor);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const mentor = await Mentor.findById(id);
      if (!mentor) {
        return res.status(404).json();
      }
      await mentor.deleteOne();
      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new mentorsController();
