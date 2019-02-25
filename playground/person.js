var person = '{"name" : "sundar","age" : 26,"place" : "chennai","travel" : "anything"}';

var parse = JSON.parse(person);
console.log(parse);
console.log(typeof parse);

module.exports = {
    person : person,
    parse : parse
};