// URL da conexáo
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = () => {
  const uri = "mongodb://localhost:27017/admin";

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("MONGODB - Conexão com o banco de dados estabelecida");
    })
    .catch((error) => {
      //console.error("Erro ao conectar-se ao banco de dados:", error);
    });
};
