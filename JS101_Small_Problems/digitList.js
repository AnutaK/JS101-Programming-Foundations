// const digitList = (num) => {
//   //Understand the problem:
//   //input: a positive integer
//   //output: returns an array of digits in that number

//   return String(num)
//     .split("")
//     .map((el) => parseInt(el));
// };

function digitList(number) {
  let results = [];
  while (number > 0) {
    console.log(number);
    results.unshift(number % 10);
    console.log(results);
    number = Math.floor(number / 10);
    console.log(number);
  }
  return results;
}

console.log(digitList(12345)); // [1, 2, 3, 4, 5]
// console.log(digitList(7)); // [7]
// console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444)); // [4, 4, 4]
