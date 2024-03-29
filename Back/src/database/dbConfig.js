const mongoose = require('mongoose');

// String de conexão MongoDB
const mongoURI = 'mongodb+srv://kaiovittorg:aiXrJwZhkkO2qmPJ@cluster0.yyzhlvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Opções de conexão
const options = {
  useNewUrlParser: true, // O uso de um novo parser de URL é recomendado, mas atualmente é o padrão
  useUnifiedTopology: true, // Utiliza o novo sistema de gerenciamento de conexão do driver MongoDB
};

// Conexão com o banco de dados
mongoose.connect(mongoURI, options).catch(error => console.error('Erro de conexão com o MongoDB:', error));

// Eventos de conexão
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso.');
});

// Exporta a conexão com o banco de dados
module.exports = mongoose;
