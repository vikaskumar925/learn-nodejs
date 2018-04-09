console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes= require('./notes.js')
var user = os.userInfo();

const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];

console.log("Command: ", command);

console.log("yargs: ", argv);
if(command ==='add'){
    notes.addNote(argv.title,argv.body);
} else if (command === "list"){
    notes.getAll();
} else if (command==="read"){
    notes.getNote(argv.title);
}else if (command==="remove"){
    notes.removeNote(argv.title);
}else {
    console.log("Command not recognized");
}
