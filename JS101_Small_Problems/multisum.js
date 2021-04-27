//understand the problem:
//input: a single digit
//ouput: a single number

//Data structure: none

//Algo:

//1. Create a variable to store the sum
//2. Start a loop from 1 to number (inclusive)
//2. if a number is equally divisible by 3 || 5, add it to the sum
//4. return sum

const multisum = (number) => {
  return Array(number)
    .fill()
    .map((_, idx) => idx + 1)
    .filter((el) => el % 3 === 0 || el % 5 === 0)
    .reduce((acc, curr) => acc + curr);
};

// function range(min, max) {
//     return Array.from({length: max - min + 1}, (_, i) => i + min);
//}

//I think this is the best solution
// let multisum = function(num) {
//   let nums = Array(num).fill();
//   console.log(nums)
//   let filtered = nums.filter((val) => val % 3 === 0 || val % 5 === 0);
//   return filtered.reduce((sum, cur) => sum + cur);
// };

//   function multisum(num) {
//     return range(1, num).filter((d) => d % 3 === 0 || d % 5 === 0)
//                         .reduce((acc, n) => acc + n, 0);
//   }
// let multisum = function(num) {
//   let numbers = [...Array(num + 1).keys()];
//   let filteredNums = numbers.filter ((val) => val % 3 === 0 || val % 5 === 0);
//   return filteredNums.reduce ((sum, cur) => sum + cur);
// };

// console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
// console.log(multisum(10)); // 33
// console.log(multisum(1000)); // 234168
