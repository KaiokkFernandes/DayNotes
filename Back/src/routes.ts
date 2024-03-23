const express = require('express');
const AnnotationController = require('./Controllers/AnnotationController');

const routes = express.Router();

routes.post('/annotations', AnnotationController.create); // Rota para criação de anotações
routes.get('/annotations', AnnotationController.read); // Rota para listagem de anotações  
routes.delete('/annotations/:id', AnnotationController.delete); // Rota para deletar anotações  

module.exports = routes;
    