//Understand the problem:
//input: array of numbers
//output: a new array with elements that are running totals of the previous numbers

//Algo:
//Create 2 new variables, representing a sum and representing a new array
//Start a loop from the element at index[0],and then add that number to the sum variable.
//Push that sum to the resulting array
//Continue with the elements at the remaining indices
//Return a resulting array
const runningTotal = (arr) => {
  let sum = 0;
  let result = arr.map((el) => (el = sum += el));
  return result;
};

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
