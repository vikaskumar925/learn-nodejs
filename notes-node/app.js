console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes= require('./notes.js')
var user = os.userInfo();
var res = notes.add(3, 4);



// console.log(_.isString(true));
// console.log(_.isString('test'));

// var filteredArray = _.uniq(['Vikas',1, 2, 'Vikas', 5,2]);
// console.log(filteredArray);
// fs.appendFileSync("greetin.txt",`Hello ${user.username} ! You are ${notes.age}.` );
var command = process.argv[2];
console.log(process.argv);
console.log("Command: ", command);
if(command ==='add'){
    console.log("adding new note");
} else if (command === "list"){
    console.log("listing all notes");
} else if (command==="read"){
    console.log("Fetch the note");
}else if (command==="remove"){
    console.log("Remove the note");
}else {
    console.log("Command not recognized");
}
