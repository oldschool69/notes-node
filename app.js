console.log('starting app');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//Pegando parametros da linha de comando
var command = process.argv[2];
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
    notes.getAll();    
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