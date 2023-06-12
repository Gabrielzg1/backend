const Company = require("../../models/permissions/company");

class CompanyController {
  async index(req, res) {
    try {
      const companies = await Company.find();
      return res.json(companies).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const company = await Company.findById(id);
      if (!company) return res.status(404).json({ msg: "Company not found" });
      return res.json(company);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { username, email, password } = req.body;
      const newCompany = await Company.create({
        username,
        email,
        password,
      });

      return res.status(201).json(newCompany);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const company = await Company.findOne({ email });
      if (!company)
        return res.json({ msg: "Email ou senha incorreto" }).status(404);

      if (company.password !== password)
        return res.json({ msg: "Email ou senha incorreto" }).status(404);

      return res.json({ msg: true, id: company.id }).status(200);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new CompanyController();
