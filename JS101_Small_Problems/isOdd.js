//Understanding the problem:
//input: one integer input that can be negative, positive or 0,
//output: true or false if the number's absolute value is odd.

//Algo:
//take an integer's absolute value and return true if that value is odd.

const isOdd = (integer) => {
  return Math.abs(integer) % 2 !== 0;
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
