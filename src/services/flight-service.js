const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error:'Arrival time cannot be lessthan Departure time'};
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                    ...data, totalSeats: airplane.capacity
                }
            );
            return flight;
            
        } catch (error) {
            console.log("Error in FlightService file : ",error);
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = this.flightrepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Error in FlightService file : ",error);
            throw {error};
        }
    }
    async getAllFLightData(data){
        try {
            const flights = this.flightrepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Error in FlightService file : ",error);
            throw {error};
        }
    }
}
module.exports = FlightService;

/*
{
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    ,price
    ->totalSeats logic we need to write
}



*/