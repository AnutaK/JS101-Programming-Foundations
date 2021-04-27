let readline = require("readline-sync");
const VALID_CHOICES = ["m", "s"];

console.log("Enter the length of the room in meters: ");
let length = readline.question();

console.log("Enter the width of the room in meters: ");
let width = readline.question();

console.log(
  "How would you like the area to be calculated: in meters or square feet?"
);

console.log("Please respond with m or s");

let response = readline.question();
console.log(response);

while (!VALID_CHOICES.includes(response)) {
  console.log("Please respond with m or s");
  response = readline.question();
}

console.log(`You asked the area to be calculated in ${response}`);
let areaInMeters = (length * width).toFixed(2);
console.log(areaInMeters);
let areaSquareFeet = (areaInMeters * 10.7639).toFixed(2);
console.log(areaSquareFeet);

console.log(
  `The area of the room is ${areaInMeters} square meters (${areaSquareFeet} square feet).`
);

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).
