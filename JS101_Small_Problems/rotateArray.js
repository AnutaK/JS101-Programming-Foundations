const rotateArray = (arr) => {
  // If the input is not an array, return undefined.
  // If the input is an empty array, return an empty array.
  if (!Array.isArray(arr)) return undefined;
  if (!arr.length) return arr;
  return arr.slice(1).concat(arr[0]);
};

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   const newArr = [...arr];
//   if (newArr.length > 0) newArr.push(newArr.shift());
//   return newArr;
// }

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined
