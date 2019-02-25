var x = function() { 
    console.log("inside notes.js");
}
module.exports.x = x;
module.exports.addNote = function() {
    console.log("Notes added");
}
module.exports.add = function(a, b) {
    console.log(a+b);
    return a+b;
}