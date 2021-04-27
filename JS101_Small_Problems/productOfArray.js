const productOfArray = (arr) => {
  if (arr.length <= 1) return arr;

  for (let el of arr) {
    return el * productOfArray(arr.slice(1));
  }
  _;
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
