function multiplyList(array1, array2) {
  //Input:
  //two arrays

  //Output:
  //one array with elements from both arrays multiplied
  return array1.reduce((acc, curr, idx) => {
    return curr * array2[idx], ...acc;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
