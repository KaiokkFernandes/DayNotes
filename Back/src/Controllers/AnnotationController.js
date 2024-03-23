const mongoose = require('mongoose');  // Importe o mongoose apenas uma vez
const Annotations = require('./../models/AnnotationData'); 

module.exports = {
    async read(req, res) {  
      console.log("read function called"); // Log when the function is called
      const annotationList = await Annotations.find(); // Nesa linha estou buscando todos os registros do banco de dados
      console.log("Annotations.find() returned", annotationList); // Log the result of Annotations.find()

      return res.json(annotationList); // Nessa linha estou retornando a lista de anotações    
    },
    async create(req, res) {
       const { title, notas, priority } = req.body;  // Nessa linha estou extraindo os dados do corpo da requisição 

       if(!notas || !title){
        return res.status(400).json({error: "Necessario um titulo e uma anotação!"});
       }
       
        const annotationCreated = await Annotations.create({
            title,
            notas,
            priority
        }); // Nessa linha estou criando um novo registro no banco de dados
      
        return res.json(annotationCreated); // Nessa linha estou retornando a anotação criada 
    } , 

    async delete(resq, res) {
        const{id} = resq.params; // aqui estou pegando o id da anotação para pode deletar na rota 
        
        const annotationsDelete = await Annotations.findByIdAndDelete({_id : id});


        if(Annotations){
            return res.json(annotationsDelete); 
    }
    return res.status(400).json({error: "Anotação não encontrada!"});    
  }
}