const sequence = (count, num) => {
  // let result = [];
  // let sum = start;

  // for (let index = start; index < count; index++) {
  //   result.push(sum);
  //   sum += start;
  // }
  // return result;

  return [...Array(count)].map((_, index) => num * (index + 1));
};
console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [1, 2, 3]
console.log(sequence(3, 0)); // [1]
