//Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// Understading the problem:
// - input:
//     - No input
// - output:
//     - all even numbers from 1 to 99
//     - log numbers on separate lines

// Data Structure
// - no data structure

// Algorithm:
//  - loop over numbers from 1 to 99
//  - determine which numbers are even
//  - if it is, print it out to the console

const allEven = () => {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
};

//Alternative solution:
// const allEven = () => {
//   for (let number = 1; number <= 99; number += 1) {
//     if (number % 2 === 1) continue;

//     console.log(number);
//   }
// };

allEven();
