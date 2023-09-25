const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index');
class AirportRepository extends CrudRepository{
    constructor(){
        // super(model);
        super(Airport);
    }
}
module.exports = AirportRepository;