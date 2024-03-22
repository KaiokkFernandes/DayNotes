
const express = require('express');
const routes = require('./routes.ts'); // Ajuste o caminho para 'routes.js'

const app = express();

require('./database/dbConfig.js'); // Conexão com o banco de dados

app.use(express.json()); // Middleware para JSON
app.use(routes); // Implementação das rotas

app.listen(8080); // Início da aplicação na porta 8080
