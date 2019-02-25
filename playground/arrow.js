var square = x => x*x;

console.log(square(9));

var user = {
    name : "yoyo",
    greet : () => {
        console.log(arguments);
        console.log(`Hello ${this.name}`);
    },
    greetAlt () {
        console.log(arguments);
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
user.greetAlt();
