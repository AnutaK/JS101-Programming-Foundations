// const change = (word) => {
//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// };
// const swap = (str) => {
//   if (str.length === 1) return str;
//   return str
//     .split(" ")
//     .map((el) => {
//       return change(el);
//     })
//     .join(" ");
// };

// // function swap(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => {
//       let chars = word.split("");
//       [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
//       console.log(chars)
//       return chars.join("");
//     })
//     .join(" ");
// }

function swap(string) {
  let newArray = [];
  let wordArray = string.split(" ");
  wordArray.forEach((word) => {
    newArray.push(word.split("").reverse().join(""));
  });
  return newArray.join(" ");
}

console.log(swap("Oh what a wonderful day it is"));

// console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
// console.log(swap("a")); // "a"

//Understanding the problem:
//Input: a string
//Output: a modified string

//Algo:
//if a string.length === 1, return string
//else break a string into an array of words
//Start a loop and iterate over an array
//Send each word to a helper function to perform swapping
//Inside the swapping function:
//set a variable first to be equal to a value of the character at index 0
//set a variable last to be equal to a value of the last character of the string
//swap the first and the last characters of the string and return a resulting variable back to the calling function
