const Paciente = require('../models/paciente');
const PacienteView = require('../views/pacienteView');

let pacientes = [];

class PacienteController {
  static getListaPacientes(req, res) {
    res.send(PacienteView.renderListaPacientes(pacientes));
  }

  static getPaciente(req, res) {
    const pacienteId = req.params.id;
    const paciente = pacientes.find(p => p.id === pacienteId);
    if (paciente) {
      res.send(PacienteView.renderPaciente(paciente));
    } else {
      res.status(404).send('Paciente não encontrado');
    }
  }

  static criarPaciente(req, res) {
    const { nome, idade } = req.body;
    const novoPaciente = new Paciente(Date.now().toString(), nome, idade);
    pacientes.push(novoPaciente);
    res.send('Novo paciente criado');
  }

  static atualizarPaciente(req, res) {
    const pacienteId = req.params.id;
    const { nome, idade } = req.body;
    const paciente = pacientes.find(p => p.id === pacienteId);
    if (paciente) {
      paciente.nome = nome;
      paciente.idade = idade;
      res.send(`Paciente atualizado: ${PacienteView.renderPaciente(paciente)}`);
    } else {
      res.status(404).send('Paciente não encontrado');
    }
  }

  static excluirPaciente(req, res) {
    const pacienteId = req.params.id;
    pacientes = pacientes.filter(p => p.id !== pacienteId);
    res.send('Paciente excluído');
  }
}

module.exports = PacienteController;
