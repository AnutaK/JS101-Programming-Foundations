let readline = require("readline-sync");
let sum = 0;
let product = 1;

console.log("Please enter an integer greater than 0:");
let integer = parseInt(readline.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let response = readline.prompt().toLowerCase();

while (response[0] !== "s" && response[0] !== "p") {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  response = readline.prompt();
  console.log(response);
}

if (response[0] === "s") {
  for (let start = 1; start <= integer; start++) {
    sum += start;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
}

if (response[0] === "p") {
  for (let start = 1; start <= integer; start++) {
    product *= start;
  }
  console.log(
    `The product of the integers between 1 and ${integer} is ${product}.`
  );
}
