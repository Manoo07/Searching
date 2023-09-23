const exp = require('constants');
const { randomBytes } = require('crypto');
const express = require('express');
const CityController = require('../../controllers/city-controllers');
const router = express.Router();

// Create
router.post('/city',CityController.create);

module.exports = router;