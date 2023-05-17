const Sequilize = require("sequelize");

const sequelize = new Sequilize("node_db", "Gabriel", "12345", {
	host: "0.0.0.0",
	dialect: "postgres",
	logging: false,
});

module.exports = sequelize;

/*
      - PG_DB=node_db
      - PG_USER=Gabriel
      - PG_PASSWORD=12345
      - PG_HOST=node_db
*/
