const merge = (arr1, arr2) => {
  let new1 = arr1.slice();
  let new2 = arr2.slice();
  let mergedArr = [];

  while (new1.length > 0 && new2.length > 0) {
    mergedArr.push(new1[0] <= new2[0] ? new1.shift() : new2.shift());
  }
  return mergedArr.concat(new1.length === 0 ? new2 : new1);
};
console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
