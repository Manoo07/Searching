const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({ 
                name:name
             });
            return city;
        }
        catch(err){
            console.log("Error in creating city : ",err);
        }
    }

    async DeleteCity(cityId){
        try{
            await City.destroy({
                where:{ 
                    id:cityId
                }
            });
            return true;
        } 
        catch(err){
            console.log("Error in deleting : ",err); 
        }
    }
    async getCity(cityId){
        try{
            const city = await City.findPk({cityId});
            return city;
        }
        catch(err){
            console.log("Something went wrong in getCity :",err);
            throw {err};
        }
    }
    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where: {
                    id: cityId
                }
            }) 
            return city; 
        }
        catch(err){
            console.log("Something went wrong in getCity :",err);
            throw {err};
        }
    }

}
module.exports=CityRepository;

