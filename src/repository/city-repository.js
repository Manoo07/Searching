const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({ name });
            return city;
        }
        catch(err){
            console.log("Error in creating city : ",err);
        }
    }

    async DeleteCity({ cityId }){
        try{
            await City.destroy({
                where:{ 
                    id:cityId
                }
            });
        } 
        catch(err){
            console.log("Error in deleting : ",err); 
        }
    }

}
module.exports=CityRepository;

