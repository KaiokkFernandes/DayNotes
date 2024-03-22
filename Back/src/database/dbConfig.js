const mongoose = require('mongoose');   

// Conexão com o banco de dados usando o script do MongoDB
const dbConfig = 'mongodb+srv://kaiovittorg:aiXrJwZhkkO2qmPJ@cluster0.yyzhlvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
