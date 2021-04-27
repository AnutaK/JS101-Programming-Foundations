let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const rotate90 = (arr) => {
  let newArr = arr.slice();
  let transposedArr = [];
  let colNumber = newArr[0].length;

  console.log(newArr.length);
  for (let column = 0; column < colNumber; column++) {
    transposedArr.push([]);
  }

  //   console.log(transposedArr);

  for (let row = newArr.length - 1; row >= 0; row--) {
    for (let column = 0; column < colNumber; column++) {
      transposedArr[column].push(newArr[row][column]);
    }
    // console.log(newArr[column]);
  }

  return transposedArr;
};

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
