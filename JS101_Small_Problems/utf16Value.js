const utf16Value = (str) => {
  //Understanding the problem
  //Input: a string
  //Output: a number representing a sum of that string's UTF characters

  return str
    .split("")
    .map((el) => el.charCodeAt())
    .reduce((acc, curr) => acc + curr);
};

console.log(utf16Value("Four score")); // 984
// console.log(utf16Value("Launch School")); // 1251
// console.log(utf16Value("a")); // 97
// console.log(utf16Value("")); // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 281
