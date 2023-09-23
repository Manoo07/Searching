const express=require('express');
require('dotenv').config();
const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
const {PORT}=require('./config/serverConfig');
const CityRepository=require('./repository/city-repository'); 

const app=express();

const setUpAndStartServer = async ()=>{
    //  create the express object
    const app=express();
    app.use(bodyparser.json());
    app.use(urlencoded({extended:true})); 
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT} Port`);
        const repo= new CityRepository();
        repo.createCity({name:"Khammam"})
    })
}
setUpAndStartServer();

