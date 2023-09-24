const exp = require('constants');
const { randomBytes } = require('crypto');
const express = require('express');
const CityController = require('../../controllers/city-controllers');
const router = express.Router();

// Create
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
module.exports = router;