const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    res.send({
        name:'Vikas',
        likes:[
            'biking',
            'cities'
        ],
    });
});
app.get('/about',(req, res) => {
    res.send('About');
} );

app.get('/bad', (req, res) => {
    res.send({
        errorMessage:"Unable to fulfill request",
    });
});
app.listen(3000, () =>{
    console.log("Server is up and running on 3000");
});
