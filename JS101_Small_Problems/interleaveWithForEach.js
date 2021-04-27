const interleave = (arr1, arr2) => {
  let combinedArr = [];
  arr1.forEach((el, idx) => combinedArr.push(el, arr2[idx]));
  return combinedArr;
};

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
