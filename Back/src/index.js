const express = require('express'); 
const app = express();  
require('./database/dbConfig'); 
const routes =  exzpress.Router();  

app.use(express.json());  



app.listen(8080);