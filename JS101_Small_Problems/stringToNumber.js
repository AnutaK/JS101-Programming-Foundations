const toNumber = (str) => {
  let obj = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };
  //Split the string into an array of characters by a delimiter and
  //then we transform an array by mapping over it and looking up a value of the property on our existing object.

  let converted = str.split("").map((digit) => obj[digit]);
  let value = 0;
  console.log(converted);
  converted.forEach((digit) => (value = 10 * value + digit));
  //0 = 0 + 1
  //1 = 10 * 1 + 2 = 12
  //12 = 10 * 12 + 3 = 123

  return value;
};

console.log(toNumber("12345"));
