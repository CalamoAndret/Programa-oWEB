const express = require('express');
const app = express();
const pacienteRouter = require('./routes/paciente');
const agendaRouter = require('./routes/agenda');

// Configurações do servidor
app.use(express.json());
app.use('/api/pacientes', pacienteRouter);
app.use('/api/agendas', agendaRouter);

// Porta do servidor
const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
