const Anntotations = require('./../models/AnnotationData'); // Import the model     


module.exports = {
    
    read(req, res) { 
       const priority = req.query.priority; // retorna a prioridade da anotação usando a query

       const priorityNotes =  Annotations.find(priority); // retorna a anotação com a prioridade passada na query

       return res.json(priorityNotes); // retorna a anotação com a prioridade passada na query  

    },

    async update(req, res)  {
        const {id} = requ3est.params; // pega o id da anotação para atualizar   
        
        const annotations = await Annotations.findByIdAndUpdate({_id : id});

        if(annotations){
            annotation.priority = false;
        }else{
            annotations.priority = true;                
        }

        await annotations.save(); // salva a anotação atualizada

    }

}