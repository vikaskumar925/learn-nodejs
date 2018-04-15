const express = require('express');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    res.render('home.hbs', {
        pageTitle:'Home',
        currentYear:new Date().getFullYear(),
        welcomeMessage:'Hey Welcome to The home page'
    });
});
app.get('/about',(req, res) => {
    res.render('about.hbs', {
        pageTitle:'About Page',
        currentYear:new Date().getFullYear(),
    });
} );

app.get('/bad', (req, res) => {
    res.send({
        errorMessage:"Unable to fulfill request",
    });
});
app.listen(3000, () =>{
    console.log("Server is up and running on 3000");
});
