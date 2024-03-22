const mongoose = require('mongoose');  // Importe o mongoose apenas uma vez
const Annotations = require('./../models/AnnotationData'); 

module.exports = {
    async read(req, res) {  
      const annotationList = await Annotations.find(); // Nesa linha estou buscando todos os registros do banco de dados

      return responde.json(annotationList); // Nessa linha estou retornando a lista de anotações    
    },
    create(req, res) {
       const { title, notas, priority } = req.body;  // Nessa linha estou extraindo os dados do corpo da requisição 
       
       console.log(title);
       console.log(notas);
       console.log(priority);   
    }  
}