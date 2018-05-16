const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleCommand = {
    describe: 'Title of note', 
    demand: true,
    alias: 't'
};

const bodyCommand = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleCommand,
        body: bodyCommand
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleCommand
    })
    .command('remove', 'Remove a note', {
        title: titleCommand
    })
    .help()
    .argv;

//Pegando parametros da linha de comando
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note added with sucess: ", note.title);
        notes.logNote(note);
    }else{
        console.log("Note already exists on database");
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();    
    console.log(`Printing ${allNotes.length} notes(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note Found!");
        notes.logNote(note);
    }else{
        console.log("Note does not exist!");
    }
} else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not found');
}