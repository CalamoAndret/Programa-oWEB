const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/AgendaController');

// Rota para obter todas as agendas
router.get('/', agendaController.getAllAgendas);

// Rota para criar uma nova agenda
router.post('/', agendaController.createAgenda);

module.exports = router;
