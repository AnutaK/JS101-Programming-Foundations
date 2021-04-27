// Understanding the problem:
// - input:
//     - Integer > 0
// - output:
//     - a sum of all numbers that are multiples of 3 & 5.

// Data Structure
// - None

// Algorithm:
// Iterate from 1 up to that number and sum up all numbers that are evenly divisible by 3 and 5

const multiple = (int) => {
  let sum = 0;

  for (let i = 1; i <= int; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }
  return sum;
};

multiple(20);
