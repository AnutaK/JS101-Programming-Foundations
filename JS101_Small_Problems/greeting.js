// Understanding the problem:
// - input:
//     - ask for an input - it would be a string
// - output:
//     - A simple greeting - Hello {name} if the user just provides their name
//     - if user types their name with an exclamation mark, then greet the user with ->
// HELLO {name}. WHY ARE WE SCREAMING?

// Data Structure
// - None

// Algorithm:
// Determine if the user provides a "!" along their name.

let readline = require("readline-sync");

let name = readline.question("What is your name? ");
let capitalizedName = name.slice(0, -1).toUpperCase();

console.log(
  name.slice(name.length - 1) === "!"
    ? `HELLO ${capitalizedName}. WHY ARE WE SCREAMING?`
    : `Hello ${name}`
);

// const rlsync = require('readline-sync');

// let name = rlsync.question("What is your name? ");

// if (name.endsWith("!")) {
//   console.log(`HELLO, ${name.toUpperCase().split("!")[0]}. WHY ARE WE SCREAMING?!`);
// } else {
//   console.log(`Hello, ${name}.`);
// }
