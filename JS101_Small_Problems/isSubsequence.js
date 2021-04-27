//Understand the problem:
//input: two strings
//output: a boolean

//Algo:
//declare two iterative variables, i and j, and assign them to a value of 0
//if string1 is null, return true right away
//else start a loop until the end of the string2
// if the second string at index position j === to first string index position i, increment i
//check if we've reached the end of string1, return true
//increment j
//return false if we've reached the end of string1

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

// console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "abracadabra"));
// console.log(isSubsequence("abc", "acb"));
