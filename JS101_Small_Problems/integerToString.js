const integerToString = (num) => {
  let number = [];

  //then iterate over an array and look up a corresponding key on the object and return the value

  while (num > 0) {
    console.log(num);
    number.unshift(num % 10);
    num = Math.floor(num / 10);
    console.log(number.join(""));
  }

  return number.join("");
};

integerToString(12345);
