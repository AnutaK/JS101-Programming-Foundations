// const average = (arr) => {
//   //array of integers
//   //output: an rounded up average integer
//   let result = 0;

//   return arr.reduce((acc, curr) => {
//     return (acc + curr) / arr.length;
//     // return Math.floor(result / arr.length);
//   });
// };

const average = (arr) => {
  return Math.floor(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
};

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
