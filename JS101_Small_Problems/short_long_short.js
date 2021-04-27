//Understand the problem
//input:
//two strings of different lengths
//output:
//one string

//Algo:
//1. Determine the length of each string
//if string1 is greater than string2, return a concatenated result a shorter string + longer string + shorter string again
//Reverse
//You can use destructuring next time to approach this problem

//Code:

const shortLongShort = (str1, str2) => {
  [str1, str2] = [str1, str2].sort((a, b) => a.length - b.length);
  return `${str1}${str2}${str1}`;
};

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
