const hexadecimalToInteger = (str) => {
  const DIGITS = {
    0: 10,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let arrayOfDigits = str.split("").map((el) => DIGITS[el.toLowerCase()]);
  console.log(arrayOfDigits);

  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 16 * value + digit));
  return value;
};

console.log(hexadecimalToInteger("4D9f") === 19871);
