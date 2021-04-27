const leadingSubstrings = (str) => {
  let newArr = [];
  for (let i = 1; i <= str.length; i++) {
    newArr.push(str.substr(0, i));
  }

  return newArr;
};

const substrings = (str) => {
  let newStr = str.slice();
  let newArr = [];

  for (let char = 0; char < str.length; char++) {
    newArr.push(...leadingSubstrings(str.slice(char)));
  }

  return newArr;
};

const palindromes = (word) => {
  if (word.length > 1 && word === word.split("").reverse().join("")) return;
};

console.log(palindromes("hello-madam-did-madam-goodbye"));

// returns
// [
//   "a",
//   "ab",
//   "abc",
//   "abcd",
//   "abcde",
//   "b",
//   "bc",
//   "bcd",
//   "bcde",
//   "c",
//   "cd",
//   "cde",
//   "d",
//   "de",
//   "e",
// ];
