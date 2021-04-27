const transpose = (arr) => {
  let newArr = arr.slice();
  let transposedArr = [[], [], []];

  for (let column = 0; column < newArr.length; column++) {
    let row = 0;
    while (row < 3) {
      transposedArr[column].push(newArr[row][column]);
      row++;
    }
  }
  return transposedArr;
};
const matrix = [
  [1, 5, 8], //0
  [4, 7, 2], //1
  [3, 9, 6], //2
];

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
