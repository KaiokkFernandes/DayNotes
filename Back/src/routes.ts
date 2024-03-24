import PriorityController from "./Controllers/PriorityController";

const express = require('express');
const AnnotationController = require('./Controllers/AnnotationController');

const routes = express.Router();

routes.post('/annotations', AnnotationController.create); // Rota para criação de anotações
routes.get('/annotations', AnnotationController.read); // Rota para listagem de anotações  
routes.delete('/annotations/:id', AnnotationController.delete); // Rota para deletar anotações  


//Rota de prioriadade   
routes.get('/priorities', PriorityController.read)  // Rota para listagem de prioridades 
routes.post('/priorities', PriorityController.update) // Rota para atualizar prioridades    


module.exports = routes;
