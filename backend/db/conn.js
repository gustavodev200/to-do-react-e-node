const mongoose = require("mongoose");

//na maquina local url: mongodb://localhost:27017/chores

async function main() {
  await mongoose.connect("mongodb+srv://gustavodev:06052001gl@cluster0.1jeed.mongodb.net/chores");
  console.log("Conectou ao Mongoose");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
