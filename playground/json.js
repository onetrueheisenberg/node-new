var fs = require("fs");

var notes = {
    name : "sundar",
    age : 26
}

var writeNote = function(filename) {
    fs.writeFileSync(filename, JSON.stringify(notes));
};

var readNote = function(filename) {
    console.log("printing" + fs.readFileSync(filename));
};

module.exports = {
    writeNote : writeNote,
    readNote : readNote
};