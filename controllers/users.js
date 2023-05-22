const User = require("../models/permissions/user");

class UsersController {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) return res.status(404).json();
      return res.json(user).status(200);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async showSubjects(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) return res.status(404).json();
      const subject = new Array();
      for (let i = 0; i < user.subjects.length; i++) {
        subject.push(await Subjects.findOne({ name: user.subjects[i] }));
      }
      return res.status(200).json(subject);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res
          .status(422)
          .json({ message: `User ${email} alreary exists` });
      }

      //crypt the password
      const newUser = await User.create({
        username: username,
        email: email,
        password: password,
      });

      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json();
      }

      await user.updateOne({ email, password });

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json();
      }
      await user.deleteOne();
      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new UsersController();
