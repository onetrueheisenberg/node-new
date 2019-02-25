console.log("Starting notes app");

var fs = require("fs");
var _ = require("lodash");
var notes = require("./notes");
var yargs = require("yargs");
var json = require("./playground/json");
var person = require("./playground/person");

argv = yargs.argv;
var command = process.argv[2];
console.log(argv);
console.log(command);

json.writeNote("notes-data.json");
json.readNote("notes-data.json");
console.log(JSON.stringify(json.name));
console.log(typeof json.name + typeof json.age);
console.log(person.parse.name);

if(command === "add")
{
    var note = notes.addNote(argv.user, argv.body);
    notes.printNote(note);
}
else if (command === "get")
{
    var getByUser = notes.getByName(argv.user)
    notes.printNote(getByUser);
}
else if (command === "list")
{
    var noteList = notes.listAll();
    console.log(`Printing ${noteList.length} notes`);
    noteList.forEach(element => {
        notes.printNote(element);
    });
}
else if (command === "delete")
{
    var result = notes.deleteByUser(argv.user);
    notes.printNote(result);
}
else 
{
    console.error("Wrong command");
}