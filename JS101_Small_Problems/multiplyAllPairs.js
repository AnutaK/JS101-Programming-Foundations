const multiplyAllPairs = (arr1, arr2) => {
  let newArr = [];
  for (let el of arr2) {
    newArr.push(el * arr1[0], el * arr1[1]);
  }
  return newArr.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
//2,4,4,3,1,2
