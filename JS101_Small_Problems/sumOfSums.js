function sumOfSums(arr) {
  let sums = [];
  for (let idx = 1; idx <= arr.length; idx++) {
    sums = sums.concat(arr.slice(0, idx));
    console.log(sums);
  }
  return sums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
