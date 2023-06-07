// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web
// Dev: Cálamo Andret da Silva Martins DATA: 02/05/2023

const express = require('express');
const app = express();
const path = require('path');
const Fruta = require('./models/Fruta');
const Venda = require('./models/Venda');
const userController = require('./controllers/UserController');

// Registrar os models
Fruta.sync();
Venda.sync();

const FrutaController = require('./controllers/frutaController');

// Define o diretório de imagens estáticas
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

// Define que as requisições serão em json
app.use(express.json());

// Endpoint inicial
app.get('/', function (req, res) {
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

// Defina a rota de login
app.post('/login', userController.login);
app.post('/login', (req, res) => {

    // Obtenha os dados enviados no corpo da requisição
    const {username, password} = req.body;

    // Realize a autenticação
    if (username === 'adm1' && password === '123456') {

        // Autenticação bem-sucedida
        res
            .status(200)
            .json({message: 'Login bem-sucedido'});
    } else {

        // Autenticação falhou
        res
            .status(401)
            .json({message: 'Credenciais inválidas'});
    }
});

// Inicie o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
