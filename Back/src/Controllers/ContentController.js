const Annotations = require('./../models/AnnotationData');

module.exports = {

    async update(req, res)
     {
            const{id}  = req.params; // pega o id da anotação para atualizar
            const {notas} = req.body; // pega a nota da anotação para atualizar

            const annotation = await Annotations.findOne({_id : id}); // procura a anotação pelo id	 

            if(notasn)
            {
                annotation.notas = notas; // atualiza a anotação

                await annotation.save();
            }   
            return res.json(annotation); // retorna a anotação atualizada  
     }

}
