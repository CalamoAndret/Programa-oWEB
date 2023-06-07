const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/pacienteController');

// Rota para listar todos os pacientes
router.get('/', PacienteController.getListaPacientes);

// Rota para obter os detalhes de um paciente específico
router.get('/:id', PacienteController.getPaciente);

// Rota para criar um novo paciente
router.post('/', PacienteController.criarPaciente);

// Rota para atualizar os dados de um paciente
router.put('/:id', PacienteController.atualizarPaciente);

// Rota para excluir um paciente
router.delete('/:id', PacienteController.excluirPaciente);

module.exports = router;
