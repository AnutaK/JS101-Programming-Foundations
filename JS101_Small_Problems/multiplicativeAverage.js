const multiplicativeAverage = (arr) => {
  //input: an array
  //output: a rounded up number that represents an average of the number elements of the array multiplied together

  return arr.reduce((acc, curr) => acc * curr, 1) / arr.length;
};

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
