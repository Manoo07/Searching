const express = require('express');
const CityController = require('../../controllers/city-controllers');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controllers');
const {FlightMiddleware} = require('../../middlewares/index');
const router = express.Router();

// Create
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post(
    '/flights'
    ,FlightMiddleware.validateRequestFlight,
    FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights',FlightController.getAll);

router.post('/airports',AirportController.create);
// router.delete('/airports:id',AirportController.destroy);

module.exports = router;