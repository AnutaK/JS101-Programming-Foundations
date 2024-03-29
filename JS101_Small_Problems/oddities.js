// Understand the problem
// input: an array
// output: an array containing only the 1st, 3rd, 5th and etc. elements

let oddities = (arr) => {
  return arr.filter((_, index) => index % 2 === 1);
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
