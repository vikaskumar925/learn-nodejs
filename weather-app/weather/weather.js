const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    request({
        url:`https://api.darksky.net/forecast/0965a85b6f058c844c30669e1ec43210/${latitude},${longitude}`,
        json:true,
    },(error, response, body) => {
        if(error){
            callback('Unable to connect to forecast.io server');
        } else if (response.statusCode ===400){
            callback('Unable to fetch weather');
        } else if (response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                actualTemp:body.currently.apparentTemperature
            });
        }

    });
};

module.exports.getWeather = getWeather;
