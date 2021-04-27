//Understanding the problem
// - input: a string
// - output: a string with removed characters

// Algorithm:
// create a newStr variable to hold the resulting string
// Start a loop at the beginning of the string
// compare each character one at a time and remove duplicate characters.
// return a string free of duplicates

//Second alternative solution:
// Use a frequency counting algo:

const crunch = (str) => {
  // let newStr = "";
  // for (let index = 0; index < str.length; index++) {
  //   if (str[index] === str[index + 1]) continue;
  //   else newStr += str[index];
  // }
  // return newStr;

  // return str.split("").reduce((acc, curr) => {
  //     acc === curr ? continue : curr;
  // }, "");

  let cache = {};

  for (let char of str) {
    if (cache[char]) cache[char]++;
    else cache[char] = 1;
  }
  return cache;
};

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
