const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// URL da conexáo
const uri = "mongodb://localhost:27017/local";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Conexão com o banco de dados estabelecida");
	})
	.catch((error) => {
		console.error("Erro ao conectar-se ao banco de dados:", error);
	});

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1><h2>API DO PROJETO - GRUPO 3- teste</h2>");
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
