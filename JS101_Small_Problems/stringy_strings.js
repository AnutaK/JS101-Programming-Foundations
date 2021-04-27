//Understanding the problem
// input:
//  - positive n
// output:
// - string that contains n number of characters
// - it always starts with 1, then 0, etc.

//Algorithm:
//start a loop and iterate n number of times
//create a new variable to hold a resulting string
//Start concaterating 1 with the resulting string and then alternating digits.
//the first character in a string is always 1

// const stringy = (input) => {
//   // let result = "";
//   // let number = 1;
//   // while (number <= input) {
//   //   number % 2 === 1 ? (result += 1) : (result += 0);
//   //   number++;
//   // }
//   // return result;

// };

const stringy = (length) => {
  return "".padStart(length, "10");
};

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
