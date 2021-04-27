let readline = require("readline-sync");

console.log("What is the bill?");
let bill = readline.prompt();

console.log("What is the tip percentage?");
let tip = readline.prompt();

let tipAmount = parseInt(bill) * (parseInt(tip) / 100).toFixed(2);
console.log(tipAmount);

let totalAmount = parseInt(bill) + tipAmount;

console.log(`The tip is ${tipAmount.toFixed(2)}`);
console.log(`The total is ${totalAmount.toFixed(2)}`);
