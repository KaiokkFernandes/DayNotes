const mongoose = require('mongoose');   


//Criação do esquema de dados usando mongoose
const AnnotationDataSchema = new mongoose.Schema({
    title: String,  
    notas: String,
    priority : Boolean, 

});

//Exportação da classe
module.exports = mongoose.model('AnnotationData', AnnotationDataSchema); 