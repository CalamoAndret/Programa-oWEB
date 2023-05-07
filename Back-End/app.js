// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Cálamo Andret da Silva Martins
// DATA: 02/05/2023


const express = require('express');
const app = express();
const path = require('path');

const FrutaController = require('./controllers/frutaController');

// Define o diretório de imagens estáticas
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

// Define que as requisições serão em json
app.use(express.json());

// Endpoint inicial
app.get('/', function(req, res) {
  res.send('Bem-vindo a Frutopia');
});

// Endpoint de saída: lista de frutas
app.get('/frutas', FrutaController.listarFrutas);

// Endpoint de entrada: recebe os dados de uma nova fruta
app.post('/frutas', FrutaController.adicionarFruta);

// Endpoint para atualização de fruta
app.put('/frutas/:id', FrutaController.atualizarFruta);

// Endpoint para remoção de fruta
app.delete('/frutas/:id', FrutaController.removerFruta);

// Inicia o servidor
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});
