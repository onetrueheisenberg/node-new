var fs = require("fs");

var notes = [];

var fetchNotes = function() {
    try {
        var notesString = fs.readFileSync('notes.json');
        notes = JSON.parse(notesString);
      } catch (e) {
        console.error("passing through" + e);
        return [];
    };
    return notes;
};

var saveNotes = function(notes) {
    fs.writeFile("notes.json", JSON.stringify(notes), function(err) {
        if(err) throw err;
        console.log("added note", notes.length);
    });
};

var printNote =function(note) {
    debugger;
    if(note) console.log("Note is", note);
    else console.log("Note Operation failed");
}

var addNote = function(user, body) {
    var notes = fetchNotes();
    var note = {
        user,
        body
    };


    var duplicateNotes = notes.filter(function(note) {
        return note.user === user;
    });

    if(duplicateNotes.length === 0){
        notes.push(note);
        console.log(note);
        saveNotes(notes);
        return note;
    }

};

var getByName = function(user) {
    var notes = fetchNotes();
    var noteByUser = notes.filter(function(note) {
        return note.user === user;
    });
    return noteByUser;
};

var listAll = function() {
    return fetchNotes();
};

var deleteByUser = function(user) {
    var notes = fetchNotes();
    var modArray = notes.filter(function(note) {
        return note.user !== user;
    });
    saveNotes(modArray);
    return notes.length !== modArray.length;
};

module.exports = {
    addNote : addNote,
    getByName : getByName,
    listAll : listAll,
    deleteByUser : deleteByUser,
    printNote : printNote
};