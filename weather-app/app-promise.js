const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias: 'address',
            describe:'Address to fetch weather for',
            string:true,
        }
    })
    .help()
    .alias('help' ,'h')
    .argv;

var addressString = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBoXbVZTU8ipGC3GNJPXs2TyOYBwZcKDI0&address=${addressString}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status ==="ZERO_RESULTS" ){
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl= `https://api.darksky.net/forecast/0965a85b6f058c844c30669e1ec43210/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, feels like ${apparentTemperature}`);
}).catch((e) => {
    if(e.code ==="ENOTFOUND"){
        console.log("Unable to connect API servers ");
    } else {
        console.log(e.message);
    }
});
