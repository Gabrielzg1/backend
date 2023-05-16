const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// URL da conexáo
const mongoDBUrl = "mongodb://mongodb:27017/mydatabase";
//Conectando o banco de dados
mongoose
	.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Conexão bem-sucedida com o banco de dados MongoDB.");
	})
	.catch((error) => {
		console.error("Erro ao conectar ao banco de dados MongoDB:", error);
	});

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

app.get("/", (req, res) => {
	res.send("Hello World - teste de atulizacao");
});

//Rotas para os CRUDs
app.use("/admins", require("./routes/admins"));
app.use("/users", require("./routes/users"));

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	res.status(status).json({ message: message });
});

(async () => {
	try {
		await sequelize.sync({ force: false });
		app.listen(3000);
	} catch (error) {
		console.error(error);
	}
})();

module.exports = app;
