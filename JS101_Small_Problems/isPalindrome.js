const isRealPalindrome = (str) => {
  //Practice two pointers problem:

  //Strip the string of all non-alphanumeric characters
  str = str.replace(/[^a-z0-9+]+/gi, "").toLowerCase();

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else return false;
  }
  return true;
};

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
