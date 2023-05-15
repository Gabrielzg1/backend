const mongoose = require("mongoose");

const connectionString = "mongodb://admin:1234@mongodb:27017/node_app";

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
	console.error("Connection Error", e.message);
});
const db = mongoose.connection;

module.exports = db;
