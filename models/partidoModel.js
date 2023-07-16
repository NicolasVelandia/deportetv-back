const mongoose = require("mongoose"); 

const bcrypt = require("bcrypt");

const salRounds = 10;

const PartidoSchema = new mongoose.Schema({
	fecha: String,
    Resultado: String,
    email: String,
    password: String,
});


module.exports = mongoose.model("partido",UserSchema);