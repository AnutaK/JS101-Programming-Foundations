//Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// Understading the problem:
// - input:
//     - No input
// - output:
//     - all odd numbers from 1 to 99
//     - log numbers on separate lines

// Data Structure
// - no data structure

// Algorithm:
//  - loop over numbers from 1 to 99, inclusive
//  - if the number is odd, meaning that when divided by 2, the remainder is > 0,
// print the number to the console

const allOdd = () => {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
};

allOdd();
