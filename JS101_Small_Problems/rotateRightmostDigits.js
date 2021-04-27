const rotateRightmostDigits = (number, spaces) => {
  // convert the original number to a string
  // split the string into two parts: the part to remain unchanged and the part to be rotated
  // rotate the second part
  // join the first part back together with the rotated second part
  // convert the string to a number and return it

  let string = number.toString();
  let unchanged = string.slice(0, -spaces);

  let rotated = rotateArray(string.slice(-spaces));

  return unchanged + rotated;
};

const rotateArray = (arr) => {
  // If the input is not an array, return undefined.
  // If the input is an empty array, return an empty array.
  return arr.slice(1).concat(arr[0]);
};

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
