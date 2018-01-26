const https = require('https');

const http  = require('http');

const username = "chalkers";
function printMessage(username,badgeCount, point) {
    const message = `${username} has ${badgeCount} total badges and ${point} points in the Javascript`;
    console.log(message);

}
//print error message
function printError(error){
    console.error(error.message);
}
//connect to api url (https://teamtreehouse.com/chalkers.json)
//Read the data
//parse the  data
//print the data
function get(username) {
    try{
        const request = https.get(`https://teamtreehouse.com/${username}.json`,response => {
            if ( response.statusCode ===200 ) {

            let body = "";

            //print the data
            response.on('data',data => {

                //Read the data
                body += data.toString();
            } );
            response.on('end',() => {
                //parse the  data
                    try{
                        const profile = JSON.parse(body);
                        printMessage(username,profile.badges.length, profile.points.JavaScript);
                    } catch(error) {
                        printError(error);
                    }

                });
            } else{
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }

        });
        request.on("error",printError);
    }
    catch (error) {
        printError(error);

    }

}
module.exports.get = get;
