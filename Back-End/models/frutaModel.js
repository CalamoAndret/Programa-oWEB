const mongoose = require('mongoose');

const frutaSchema = new mongoose.Schema({
  nome: String,
  imagem: String,
  preco: Number,
});

const Fruta = mongoose.model('Fruta', frutaSchema);

module.exports = Fruta;
