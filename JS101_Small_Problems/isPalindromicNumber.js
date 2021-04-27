const isPalindromicNumber = (num) => {
  let numToString = String(num);

  let i = 0;
  let j = numToString.length - 1;

  while (i < j) {
    if (numToString[i] === numToString[j]) {
      i++;
      j--;
    } else return false;
  }

  return true;
};

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
