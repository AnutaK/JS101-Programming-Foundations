// const repeater = (str) => {
//   //Understand the problem :
//   //input: a string of characters
//   //output: a string of characters doubled

//   //data structure:
//   //new string

//   // Algo:
//   // iterate over an existing string and for each character, double it
//   // - str[i] + str[i]
//   // return a resulting string

//   //The first solution initializes a stringArray, then iterates through the string argument, each time appending two of the current character to stringArray. Finally, the solution returns the result of joining together the elements of stringArray.

//   //In the second solution, we split the string into an array of characters and transform that array using map to an array where each character repeats twice. For repeating the character, we simply concatenate each character with itself. Finally, we join the array back into the string

//   return [...str].reduce((acc, curr) => (acc += curr.repeat(2)), "");
// };
const repeater = (str) =>
  [...str].reduce((acc, curr) => (acc += curr.repeat(2)), "");

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
