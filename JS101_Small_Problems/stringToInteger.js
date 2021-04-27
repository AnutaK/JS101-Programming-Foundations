const stringToInteger = (str) => {
  //Build an array from the string
  // let arr = str.split("");
  // let num = str.charCodeAt(arr[0]);
  // console.log(num);
  let arr = str.split("").map((letter) => letter.charCodeAt() - 48);
  console.log(arr);
  let value = 0;
  arr.forEach((el) => (value = 10 * value + el));
  return value;
};

console.log(stringToInteger("4321") === 4321);

// function stringToInteger(string) {
//   const ZERO_OFFSET = '0'.charCodeAt();

//   return string.split('').reverse().reduce( (acc, char, index) => {
//     return acc + (char.charCodeAt() - ZERO_OFFSET) * 10**index;
//   }, 0);
// }
