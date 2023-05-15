const Sequilize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequilize.STRING,
  email: Sequilize.STRING,
  password: Sequilize.STRING,
  //Usuários tem nivel de permissão 0
  permission_level: Sequilize.INTEGER,
});
module.exports = User;
