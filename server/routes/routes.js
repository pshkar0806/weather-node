var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'),
weatherController = require('../controllers/weather');

router.route('/').all().get(weatherController.getWeatherForecast);  //   http://localhost:8000?city=pune

module.exports = router;