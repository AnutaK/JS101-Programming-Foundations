const isLetter = (letter) => {
  return letter >= "a" && letter <= "z";
};

const isNumber = (number) => {
  return number >= "0" && number <= "9";
};

const removeNonLetters = (str) => {
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (isLetter(str[index]) || isNumber(str[index])) result += str[index];
  }
  return result;
};
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const isRealPalindrome = (string) => {
  string = removeNonLetters(string.toLowerCase());
  return isPalindrome(string);
};

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
