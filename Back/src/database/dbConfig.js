const mongoose = require('mongoose');   


const dbConfig = 'mongodb+srv://kaiovittorg:aiXrJwZhkkO2qmPJ@cluster0.yyzhlvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true    
});

module.exports = connection;        
