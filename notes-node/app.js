console.log('Starting App.js');

const fs = require('fs');
const os = require('os');

const notes= require('./notes.js')
var user = os.userInfo();
var res = notes.add(3, 4);
console.log("Result: ",res);
fs.appendFileSync("greetin.txt",`Hello ${user.username} ! You are ${notes.age}.` );
