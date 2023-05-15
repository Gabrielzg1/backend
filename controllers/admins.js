//import Admin from "../models/Admin";
//import bcrypt from "bcryptjs";

const Admin = require("../models/admin");

class AdminController {
	async index(req, res) {
		try {
			const admins = await Admin.find();
			return res.json(admins).status(200);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error." });
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params;
			const admin = await Admin.findById(id);
			if (!admin) return res.status(404).json({ msg: "Admin not found" });
			return res.json(admin);
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: "Internal server error." });
		}
	}
	async create(req, res) {
		try {
			//const { username } = req.body;
			const newAdmin = await Admin.create({
				username: "teste",
			});

			return res.status(201).json(newAdmin);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error." });
		}
	}
}
module.exports = new AdminController();
