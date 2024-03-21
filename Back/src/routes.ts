// Aplicação para gerenciar as rotas da aplicação
import express from "express";
import AnnotationController from './Controllers/AnnotationController';

const routes = express.Router();

routes.get('/annotations', AnnotationController.index); // Rota para listar todas as anotações

export default routes;