const express = require('express');
const ContentController = require('./Controllers/ContentController');
const PriorityController = require('./Controllers/PriorityController');
const AnnotationController = require('./Controllers/AnnotationController');

const routes = express.Router();

// Rota para criação de anotações
routes.post('/annotations', AnnotationController.create);

// Rota para listagem de anotações
routes.get('/annotations', AnnotationController.read);

// Rota para deletar anotações
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota para listagem de prioridades
routes.get('/priorities', PriorityController.read);

// Rota para atualizar prioridades
routes.post('/priorities', PriorityController.update);

// Rota para atualizar conteúdos
routes.post('/contents/:id', ContentController.update);

module.exports = routes;
