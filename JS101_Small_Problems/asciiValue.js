// Understanding the problem:
// - input:
//     - String
// - output:
//     - sum of all ascii representation of string characters

// Data Structure
// - None

// Algorithm:
// - Iterate over each character in a string
// - Apply charCodeAt() to find an Ascii representation of a string

const asciiValue = (str) => {
  let arr = str.split("");
  return arr.reduce((acc, curr) => {
    return acc + curr.charCodeAt();
  }, 0);
};

console.log(asciiValue("Four score"));
