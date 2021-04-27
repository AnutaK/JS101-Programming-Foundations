const interleave = (arr1, arr2) => {
  //input: two arrays of the same length
  //output: one array with elements from each array, alternating elements

  //Algo:
  //Create a new empty array
  //start iterating over one of the arrays.
  //take one element from the first array and add it to the resulting array
  //then take element from the second array and add it to the resulting array
  //continue alternating elements until you reach the end of the array you are iterating over
  //return the resulting array

  // let result = [];

  // for (let start = 0; start < arr1.length; start++) {
  //   result.push(arr1[start], arr2[start]);
  // }
  // return result;

  return arr1.reduce((acc, curr, idx) => {
    acc.push(curr, arr2[idx]);
    return acc;
  }, []);
};

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
