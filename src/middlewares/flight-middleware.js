const validateRequestFlight = (req,res,next)=>{
    if(!req.body.flightNumber||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price){
            return res.status(400).json({
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