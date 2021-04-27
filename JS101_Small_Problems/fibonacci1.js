const fibonacci = (nth) => {
  let fib1 = 1;
  let fib2 = 1;
  let fibonacci = 0;

  if (nth < 3) return 1;

  for (let index = 3; index < nth; index++) {
    fibonacci += fib1 + fib2;
    fib1 = fib2;
    fib2 = fibonacci;
  }
  return fibonacci;
};

console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050
//1,1,2,3,5
