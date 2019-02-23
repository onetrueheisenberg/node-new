var fs = require("fs");
var os = require("os");
var notes = require("./notes");

console.log("Taking notes begin");
var username = os.userInfo().username;
console.log(username);
fs.appendFile("greet.txt", "appending yoyo" + username, function(err) {
    if(err) throw err;
    console.log("yoyo appended for ", username);
});

notes.x();
notes.addNote();
notes.add(4,"s");

// console.log(module);

fs.appendFile("greet.txt", `yoyo yoyo1 yoyo2 ${username}`, function(err) {
    if(err) throw err;
    console.log("yoyo appended es6", username);
});