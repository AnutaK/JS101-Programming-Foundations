const fibonacci = (nth) => {
  let previous = 1;
  let total = 1;
  for (let fib = 3; fib <= nth; fib++) {
    [total, previous] = [previous + total, total];
  }
  return total;
};

// const fibonacci = num => {
//   if(num === 1) return 1;
//   let sum = 0;
//   let num1 = 0;
//   let num2 = 1;
//   for (let index = 1; index < num ; index += 1) {
//     sum  = num1 + num2;

//     num1 = num2;
//     num2 = sum;
//   }

// return sum;
// }

// function fibonacci(integer) {
//   const results = [];

//   for (let count = 0; count <= integer; count++) {
//     if (count <= 2) {
//       results.push(1);
//     } else {
//       results.push(results[count - 2] + results[count - 1]);
//     }
//   }

//   return results[integer];
// }

//3 = fib1 + fib2; 2 = 1 + 1
//4 = fib1 + fib2; 3 = 2 + 1
//5 = fib1 + fib2; 5 = 3 + 2
//6 = fib1 + fib2; 8 = 5 + 3;

console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050
