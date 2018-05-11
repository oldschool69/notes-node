console.log('Starting node.js');

const fs = require('fs');


var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicatedNotes = notes.filter((note) => note.title === title);

    if (duplicatedNotes.length == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');

};

var getNote = (title) => {

    console.log('Getting note', title);

};

var removeNote = (title) => {
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);

    return newNotes.length !== notes.length;
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
