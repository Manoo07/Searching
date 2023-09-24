const { CityService }= require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Succesfully added a city',
            err:{}
        });
         
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Not able to create city',
            err: error
        });
    }
}
// In REST convention , DELETE method we get id by ->/city/:id from req.params.id
const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfully deleted a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Not able to delete city',
            err: error
        });
    }
}
//  GET -> /city/:id
const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfully fetched a city',
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Not able to create city',
            err: error
        });
    }
}
// PATCH -> /city/:id -> data to be updated in body
const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfully deleted a city',
            err:{}
        });
    } catch (error) {
        console.log("Error occured in contollers layer : ");
        throw {error};
    }
}

module.exports ={
    create,
    destroy,
    get,
    update
}