const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var addressString = encodeURIComponent(address);
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBoXbVZTU8ipGC3GNJPXs2TyOYBwZcKDI0&address=${addressString}`,
            json:true,
        }, (error, response, body) => {
            if (error){
                reject('Unable to connect to Google Servers.');
            } else if (body.status==="ZERO_RESULTS") {
                reject('Unable to find that address');
            } else if (body.status==="OK"){
                resolve({
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng,
                });
            }
        });
    });
};

geocodeAddress('15247').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
