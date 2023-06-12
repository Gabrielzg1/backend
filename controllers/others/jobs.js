const Jobs = require("../../models/others/jobs");
const User = require("../../models/permissions/user");

class JobsController {
  async index(req, res) {
    try {
      const jobs = await Jobs.find();
      return res.json(jobs).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const job = await Jobs.findById(id);
      if (!job) return res.status.User(404).json();
      return res.json(job);
    } catch (err) {
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const {
        title,
        companyId,
        description,
        requirements,
        minimumSalary,
        maximumSalary,
      } = req.body;

      const newJob = await Jobs.create({
        title,
        companyId,
        description,
        requirements,
        minimumSalary,
        maximumSalary,
      });

      return res.status(201).json(newJob);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async updateStudents(req, res) {
    try {
      const { jobId } = req.params;
      const { studentId } = req.body;

      const user = await User.findById(studentId);
      if (!user) return res.status(404).json();

      const job = await Jobs.findById(jobId);
      if (!job) return res.status(404).json();

      if (job.studentsId.indexOf(studentId) !== -1)
        return res.status(422).json();
      let newStudent = [].concat(job.studentsId, studentId);

      await user.updateOne({ studentsId: newStudent });
      return res.json().status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async getJobs(req, res) {
    try {
      const { id } = req.params;
      const jobs = await Jobs.find({ companyId: id });
      if (!jobs) return res.status(404).json();
      return res.json(jobs).status(200);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new JobsController();
