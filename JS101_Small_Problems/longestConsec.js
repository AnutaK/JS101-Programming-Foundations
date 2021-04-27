//////////

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//Given an array of strings, we need to return the first longest string of k length;

//Input: array of strings
//Output: the longest string combining of string of k length

//We need to build a new array with strings in it, that are k length

const longestConsec = (arr, k) => {
  let consecutiveStrings = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let string = arr.slice(i, i + k);
    consecutiveStrings.push(string.join(""));
  }
  console.log(consecutiveStrings.sort((a, b) => b.length - a.length)[0]);

  //   console.log(consecutiveStrings);
};

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ===
    "abigailtheta"
); // true
// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh",
//     ],
//     1
//   ) === "oocccffuucccjjjkkkjyyyeehh"
// ); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(
//   longestConsec(
//     [
//       "itvayloxrp",
//       "wkppqsztdkmvcuwvereiupccauycnjutlv",
//       "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
//     ],
//     2
//   ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// ); // true
// console.log(
//   longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
//     "wlwsasphmxxowiaxujylentrklctozmymu"
// ); // true
// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
//     "ixoyx3452zzzzzzzzzzzz"
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
// ); // true
