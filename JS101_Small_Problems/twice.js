//Understand the problem:
//input: any number
//output: a number
//if a number is a not a double number: return a number multiplied by 2
//else return the passed-in number

//Algo:
//A double number is an even-length number whose left-side digits
//are exactly the same as its right-side digits
//Start by understanding if a number is a double number
//Convert a number to a string
//If a length is evenly divisible by 2, split the string into 2 substrings
//  Then compare the strings:
//  If the strings are the same, then return the number as is
//If a length is not evenly divisible by 2, double the string.

const twice = (num) => {
  let string = String(num);

  let half1 = string.slice(0, string.length / 2);
  let half2 = string.slice(string.length / 2);

  if (half1 === half2) return Number(string);
  else return Number(string) * 2;
};

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
