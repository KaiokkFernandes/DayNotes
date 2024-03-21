const Annotations = require('../models/AnnotationData'); 

module.exports = {

    create(req, res) {
       const { title, notas, priority } = req.body;  //nessa linha estou extraindo os dados do corpo da requisição 
       
       console.log(title);
       console.log(notas);
       console.log(priority);   
       
        
    }
    
}