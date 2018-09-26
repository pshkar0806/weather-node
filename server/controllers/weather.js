const constant = require('../../helpers/constants');
const secrets = require('../../config/secrets');
const OpenWeatherMapHelper = require('openweathermap-node');

// Export APIs
module.exports = {
  /**
     * API to get the weather forecast
     * @param req
     * @param res
     */
  getWeatherForecast(req, res) {
	  console.log("INSIDE-=----------");
	  // Extract required parameters from the client request object
    const {query: {city}} = req;
	    let weather = [];
	    let day = {};
	    let place;
	  if(city) {
		  const helper = new OpenWeatherMapHelper({
			  APPID: secrets.App_KEY,
			  units: 'Celsius'
		  });

		  helper.getThreeHourForecastByCityName(city, (err, threeHourForecast) => {
			  console.log("err, threeHourForecast-------", err, threeHourForecast);
			  if (err) {
				  res.status(500).send({error: constant.ERROR_OCCURED});
			  } else {
				  place = threeHourForecast.city.name;
				  threeHourForecast.list.forEach((item) => {
					  day = {
						  humidity: item.main.humidity,
						  pressure: item.main.pressure,
						  temperatre: parseInt((item.main.temp - 273.15)).toFixed(2),
						  report: item.weather[0].description,
						  date: item.dt_txt,
					  };
					  weather.push(day);
				  });

				  res.render('weather-report.ejs', { data: weather, place: place });
				  res.end();
			  }
		  });
	  } else {
		  res.status(501).send({error: constant.CITY_NAME_ERROR})
	  }
  },
};
