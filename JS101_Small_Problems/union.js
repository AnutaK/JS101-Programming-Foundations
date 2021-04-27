const union = (arr1, arr2) => {
  //Input: two arrays
  //Output: a single array consisting of unique values

  //Algo:
  //Determine which array is the longest
  //Iterate over the longest array
  //If an element at index[0] does not exist in the shorter array, then push it to the shorter array,
  //Else continue
  //Return a sorted array

  let longest = arr1.length > arr2.length ? arr1 : arr2;
  let shortest = arr1.length < arr2.length ? arr1 : arr2;

  for (let index = 0; index < longest.length; index++) {
    if (shortest.includes(longest[index])) continue;
    else shortest.push(longest[index]);
  }
  return shortest.sort();
};

console.log(union([1, 3, 4, 5], [3, 6, 9, 5, 2])); // [1, 3, 5, 6, 9]

//Liked Solutions:
//1.
// function union(array1, array2) {
//   return array1.concat(array2.filter(number => !array1.includes(number)));
// }

// function union (array1, array2) {
//   let arrayUnion = [];
//   [...array1,...array2].forEach(number => {
//     if (!arrayUnion.includes(number)) arrayUnion.push(number);
//   });
//   return arrayUnion;
// }
