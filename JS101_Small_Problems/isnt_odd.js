// Understading the problem:
// - input:
//     - one integer argument
//     - it can be positive, negative, or zero
//  - output:
//     - returns true if the number's absolute value is odd

// Examples / Test Cases:
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// Data Structure
// - no data structure

// Algorithm:
//  - apply abs() method to our integer
//    to make it an absolute value
//  - use if conditional to determine if a integer is an odd number

const isOdd = (integer) => {
  return Math.abs(integer) % 2 === 1;
};
