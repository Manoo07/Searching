const {ClientErrors} = require('../utils/error-code');
const validateRequestFlight = (req,res,next)=>{
    if(!req.body.flightNumber||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price){
            return res.status(ClientErrors.BAD_REQUEST).json({
                data:{},
                success:false,
                message:"Missing  some flight details ",
                error: "Enter the all details about Flight "
            })
        }
        next();
}

module.exports = {
    validateRequestFlight
};