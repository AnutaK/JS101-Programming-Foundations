const averagePair = (arr, num) => {
  //understand the problem:
  //Inout: an array and an average value
  //Output: boolean value

  //Algo:
  //1. Initialize three variables: a start variable, the second variable and an average
  //If array is empty, return false,
  //else
  //2. Start a loop beginning at the start variable
  //3. Starting with the first two numbers, check if their average is equal to the parameter average
  //4. if not, more the cursor to the next two numbers and check their average again
  //5. Loop until you reach the last two digits.
  //If no average is found return false

  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) return false;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
