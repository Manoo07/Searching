const express=require('express');
require('dotenv').config();
const {PORT}=require('./config/serverConfig');
const app=express();

const setUpAndStartServer = async ()=>{
    //  create the express object
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT} Port`);
    })
}
setUpAndStartServer();
const bodyparser=require('body-parser');