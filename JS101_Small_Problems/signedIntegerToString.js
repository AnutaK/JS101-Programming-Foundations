const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

const signedIntegerToString = (int) => {
  switch (Math.sign(int)) {
    case -1:
      return `-${integerToString(-int)}`;
    case +1:
      return `+${integerToString(int)}`;
    default:
      return integerToString(int);
  }
};

console.log(signedIntegerToString(-123) === "-123");
