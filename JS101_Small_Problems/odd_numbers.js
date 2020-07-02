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
//  - loop over numbers from 1 to 99
//  - determine which numbers are odd
//  - if it is, print it out to the console

const allOdd = () => {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) console.log(i);
  }
};

allOdd();
