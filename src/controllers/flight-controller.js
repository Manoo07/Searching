const {FlightService} = require('../services/index');
const flightService = new FlightService();

    const create = async(req,res)=>{
        try {
            const flightRequestData = {
                flightNumber: req.body.flightNumber,
                airplaneId: req.body.airplaneId,
                departureAirportId: req.body.departureAirportId,
                arrivalAirportId: req.body.arrivalAirportId,
                arrivalTime: req.body.arrivalTime,
                departureTime: req.body.departureTime,
                price: req.body.price
            }
                const flight = await flightService.createFlight(flightRequestData);
                return res.status(201).json({
                    data:flight,
                    success:true,
                    message:'Successfully created a flight',
                    error: {}, 
                })
            
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message: 'Not able to create flight',
                err: error
            })
        }
    }
    const get = async (req,res)=>{
        try {
            const response = await flightService.getFlight(req.params.id);
            return res.status(201).json({
                data: response,
                success:true,
                message:'Flight details fetched successfully ',
                err: {}
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message: 'Not able to fetch flight',
                err: error
            });
        }
    }

    const getAll = async (req,res)=>{
        try {
            const flights = await flightService.getAllFLightData(req.query);
            return res.status(200).json({
                data: flights,
                success:true,
                message:'Flight details fetched successfully ',
                err: {}
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message: 'Not able to fetch flight',
                err: error
            });
        }
    }


module.exports = {
    create,
    get,
    getAll
}