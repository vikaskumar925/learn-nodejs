console.log('Starting Notes.js');

var addNote = (title, body) => {
    console.log("Adding note ", title, body);
};
var getAll = () => {
    console.log("Getting all notes");
};
var getNote = (title) => {
    console.log("reading Note of title ", title);
};
var removeNote = (title) => {
    console.log("remove the note of title ", title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};
