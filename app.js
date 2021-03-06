var fs = require("fs");
var _ = require("lodash");
var notes = require("./notes");
var yargs = require("yargs");

var userOptions = {
    describe : "User of note",
    demand : true,
    alias : "n"
};

var bodyOptions = {
    describe : "Contents of note",
    demand : true,
    alias : "b"
};
var argv = yargs.command("add", "Add a new note", {
    user : userOptions,
    body : bodyOptions
})
.command("list", "List all the notes present")
.command("get", "Get a note by user", {
    user : userOptions
})
.command("delete", "Delete a note by user", {
    user : userOptions
})
.help()
.argv;
var command = process.argv[2];

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