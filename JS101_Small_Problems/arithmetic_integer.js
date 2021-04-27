// const response = (num1, num2) => {};
// let readline = require("readline-sync");

// const prompt = (string) => {
//   console.log(`==> ${string}`);
// };

// let firstNumber = parseInt(
//   readline.question(prompt("Enter the first number: "))
// );
// let secondNumber = parseInt(
//   readline.question(prompt("Enter the second number: "))
// );

// console.log(`
// ==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
// ==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
// ==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
// ==> ${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}
// ==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}
// ==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}
// `);
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
let readline = require("readline-Sync");

const OPERATIONS = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "%": (num1, num2) => num1 % num2,
  "**": (num1, num2) => num1 ** num2,
};

let firstNum = Number(readline.question("Enter the first number: "));
let secondNum = Number(readline.question("Enter the second number: "));

Object.keys(OPERATIONS).forEach((operator) => {
  let result = OPERATIONS[operator](firstNum, secondNum);
  console.log(`${firstNum} ${operator} ${secondNum} = ${Math.round(result)}`);
});
