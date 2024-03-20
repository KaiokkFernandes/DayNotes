const express = require('express'); 
const app = express();  
require('./database/dbConfig'); 


app.use(express.json());  

app.get('/', (req, res) => {

   return res.send('Hello World!'); 
}); 


app.listen(8080);