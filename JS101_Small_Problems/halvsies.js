// const halvsies = (arr) => {
//   //input: a single array
//   //output: a two-dimensional array consisting of two halves representing an original array

//   //Algo:
//   //Start by defining a midpoint:
//   //if array.length is even, then split exactly in half
//   //if array.length is odd, split 1 character after the middle
//   //Set the first half to be equal to a new subarray starting at index[0] until the midpoint + 1
//   //set the second half from midpoint to the end of the original array
//   //return one array consistg of the two halves.

//   return arr.length % 2 === 0
//     ? [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)]
//     : [
//         arr.slice(0, Math.round(arr.length / 2)),
//         arr.slice(Math.round(arr.length / 2)),
//       ];
// };

//Favorite Solutions:
// function halvsies(array) {
//   let newArr = [];
//   while (newArr.length < array.length) {
//     newArr.push(array.shift());
//   }
//   return [newArr, array];
// }

console.log(halvsies([1, 2, 4, 5, 5, 3, 4, 5])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3, 3, 2, 6, 5, 3, 8])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
