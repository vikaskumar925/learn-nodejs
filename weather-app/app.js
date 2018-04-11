// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js')
// const argv = yargs
//     .options({
//         a:{
//             demand:true,
//             alias: 'address',
//             describe:'Address to fetch weather for',
//             string:true,
//         }
//     })
//     .help()
//     .alias('help' ,'h')
//     .argv;
// geocode.geocodeAddress(argv.a,(errorMessage, results) => {
//     if(errorMessage){
//         console.log(errprMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
const request = require('request');

    request({
        url:'https://api.darksky.net/forecast/0965a85b6f058c844c30669e1ec43210/28.6143298,77.42682169999999',
        json:true,
    },(error, response, body) => {
        if(error){
            console.log('Unable to connect to forecast.io server');
        } else if (response.statusCode ===400){
            console.log('Unable to fetch weather');
        } else if (response.statusCode===200){
            console.log(JSON.stringify(body, undefined, 2));
        }

    });
