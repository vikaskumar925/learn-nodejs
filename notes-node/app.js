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
    var note = notes.addNote(argv.title,argv.body);
    if (note){
        console.log("note saved");
        notes.logNote(note);
    } else {

        console.log("Note Title Taken");
    }
} else if (command === "list"){
    notes.getAll();
} else if (command==="read"){
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');
        notes.logNote(note);
    } else {

        console.log("Note not found");
    }
}else if (command==="remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log("Command not recognized");
}
