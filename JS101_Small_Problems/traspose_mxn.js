const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];

const transpose = (arr) => {
  let newArr = arr.slice();
  let transposedArr = [];
  let colNumber = newArr[0].length;

  console.log(newArr.length);
  for (let column = 0; column < colNumber; column++) {
    transposedArr.push([]);
  }

  //   console.log(transposedArr);

  for (let row = 0; row < newArr.length; row++) {
    for (let column = 0; column < colNumber; column++) {
      transposedArr[column].push(newArr[row][column]);
    }
    // console.log(newArr[column]);
  }

  return transposedArr;
};

console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]])); // [[1]]
