const Fruta = require('../models/frutaModel');

class FrutaController {
  static async listarFrutas(req, res) {
    try {
      const frutas = await Fruta.find({});
      return res.json(frutas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar frutas.' });
    }
  }

  static async adicionarFruta(req, res) {
    try {
      const novaFruta = new Fruta(req.body);
      const frutaSalva = await novaFruta.save();
      return res.json(frutaSalva);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao adicionar fruta.' });
    }
  }

  static async atualizarFruta(req, res) {
    try {
      const fruta = await Fruta.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.json(fruta);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar fruta.' });
    }
  }

  static async removerFruta(req, res) {
    try {
      const fruta = await Fruta.findByIdAndDelete(req.params.id);
      return res.json(fruta);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover fruta.' });
    }
  }
}

module.exports = FrutaController;

  