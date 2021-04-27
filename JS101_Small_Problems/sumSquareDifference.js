const sumSquareDifference = (num) => {
  //input: number
  //output: a difference between a square of sums and a sum of squares

  //Algo:
  //Given an integer as an argument
  //convert a number to an array
  //calculate the sum of numbers from 1 to an integer and then take a square of it
  //calculate the sum of each number squared from 1 to an integer
  //take a difference between a sum of numbers squared and a sum of squared numbers.

  let arr = [...Array(num)].map((_, index) => index + 1);
  let squareOfSums = arr.reduce((acc, curr) => acc + curr, 0) ** 2;
  let sumOfSquares = arr.reduce((acc, curr) => acc + curr ** 2, 0);
  return squareOfSums - sumOfSquares;
};
console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150

// let sumSquareDifference = function(integer) {
//   let numbers = Array(integer).fill().map((_, idx) => idx + 1);
//   let sumSquared = numbers.reduce((sum, elem) => sum + elem) ** 2;
//   let sumOfSquares = numbers.reduce((sum, elem) => sum + (elem ** 2), 0);
//   return sumSquared - sumOfSquares;
// };

// function sumSquareDifference(number) {
//   let numArr = Array(number).fill(0);
//   let squareOfSums = (numArr.reduce((acc, _, idx) => acc + idx + 1, 0)) ** 2;
//   let sumOfSquares = numArr.reduce((acc, _, idx) => acc + ((idx + 1) ** 2), 0);
//   return squareOfSums - sumOfSquares;
// }
