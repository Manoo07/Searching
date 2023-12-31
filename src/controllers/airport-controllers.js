const { AirportService } = require('../services/index');

const airportService = new AirportService();
const create = async(req,res)=> {
    try {
        const response = await  airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully created a Airport ',
            err: {},
        });
        
    } catch (error) {
        console.log('Error in airport controller : ',error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}
// const destroy = async (req,res)=>{
//     try {
//         const response = await airportService.destroy(req.params.id);
//         return res.status(201).json({
//             data: response,
//             success: true,
//             message: 'Successfully deleted a Airport ',
//             err: {},
//         });

//     } catch (error) {
//         console.log('Error in airport controller : ',error);
//         return res.status(500).json({
//             data: {},
//             success: false,
//             err: error,
//             message: 'Cannot delete  airport'
//         })
//     }
// }

module.exports = {
    create,
}
