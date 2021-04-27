let rlSync = require("readline-sync");
let questionArray = [];

let num1 = rlSync.question("Enter the 1st number: ");
let num2 = rlSync.question("Enter the 2nd number: ");
let num3 = rlSync.question("Enter the 3rd number: ");
let num4 = rlSync.question("Enter the 4th number: ");
let num5 = rlSync.question("Enter the 5th number: ");
let num6 = rlSync.question("Enter the 6th number: ");

questionArray.push(num1, num2, num3, num4, num5);

if (questionArray.includes(num6)) {
  console.log(`The number ${num6} appears in ${questionArray}`);
} else console.log(`The number ${num6} does not appear in ${questionArray}`);

console.log(`-----`);
