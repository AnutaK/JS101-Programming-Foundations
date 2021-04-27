const centerOf = (string) =>
  string.slice((string.length - 1) / 2, string.length / 2 + 1);

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
// console.log(centerOf("Launchschool")); // "hs"
// console.log(centerOf("x")); // "x"

// function centerOf(str) {
//     return str.length % 2 !== 0 ?
//       str.substr(Math.ceil(str.length / 2 - 1), 1) :
//       str.substr(Math.ceil(str.length / 2 - 1), 2);
//   }
