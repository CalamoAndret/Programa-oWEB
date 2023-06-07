const Agenda = require('../models/Agenda');

// Array para armazenar as agendas
let agendas = [];

// Obtém todas as agendas
const getAllAgendas = (req, res) => {
  res.json(agendas);
};

// Cria uma nova agenda
const createAgenda = (req, res) => {
  const { dataHora, idPaciente, idProfissional } = req.body;
  const id = agendas.length + 1;
  const agenda = new Agenda(id, dataHora, idPaciente, idProfissional);
  agendas.push(agenda);
  res.status(201).json(agenda);
};

// Exporta os métodos do controlador
module.exports = {
  getAllAgendas,
  createAgenda,
};
