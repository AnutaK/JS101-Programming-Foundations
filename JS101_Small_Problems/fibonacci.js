const fibonacci = (num) => {
  //Input: a number for which a fibonacci number needs to be computed
  //Output: a fibonaccci number

  //Base case:
  if (num <= 2) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);

  //Algo:
  //return 1 if the number is 1
  //else compute a fibonacci number: (n+1) - (n+2)
};

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765

//1,1,2,3,5,8,13;
