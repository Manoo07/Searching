const express=require('express');
require('dotenv').config();
const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
const {PORT}=require('./config/serverConfig');
const app=express();

const setUpAndStartServer = async ()=>{
    //  create the express object
    const app=express();
    app.use(bodyparser.json());
    app.use(urlencoded({extended:true})); 
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT} Port`);
    })
}
setUpAndStartServer();

