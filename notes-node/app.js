console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes= require('./notes.js')
var user = os.userInfo();
var res = notes.add(3, 4);



// console.log(_.isString(true));
// console.log(_.isString('test'));

var filteredArray = _.uniq(['Vikas', 1, 'Vikas', 1, 2]);
console.log(filteredArray);
fs.appendFileSync("greetin.txt",`Hello ${user.username} ! You are ${notes.age}.` );
