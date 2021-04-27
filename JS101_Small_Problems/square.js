const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = (num) => {
  return multiply(num, num);
};

// const powerToTheNth = (num, nth) => {
//   //Understand the problem:
//   //Given two numbers, a number and a power, we need to return a result of taking the power of that number

//   //Algorithm:
//   //While iteration variable < nth, we are going to iterate and send number to our multiply function and store the result in a separate variable
//   //return the result
//   let result = num;

//   for (let index = 1; index < nth; index++) {
//     result = multiply(result, num);
//   }
//   return result;
// };

// 2 * 2 = 4 - first iteration;
// 4 * 2 = 8 - second iteration;
// 8 * 2 = 16 - third iteration, etc.

let power = function (num, exp) {
  console.log(Array(exp).fill(num).reduce(multiply));
};

console.log(power(2, 4));
console.log(power(2, 5));

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//Recursive solution

// const power = (num, nth) => {
//   if(nth === 1) return num;
//   else return multiply(power(num,nth - 1), num)
// }
