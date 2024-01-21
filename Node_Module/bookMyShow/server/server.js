const express = require("express");
const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');


app.use(express.json()); // middleware of data has been passed from client to server in the form of JSON
app.use('/',userRoute); 



app.listen(PORT,()=>{
    console.log(`Server is live at PORT ${PORT}`)
})