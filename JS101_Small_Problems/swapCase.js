const swapCase = (str) => {
  let newStr = "";
  str
    .split("")
    .map((el) => {
      el === el.toLowerCase()
        ? (newStr += el.toUpperCase())
        : (newStr += el.toLowerCase());
    })
    .join("");

  return newStr;
};

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
