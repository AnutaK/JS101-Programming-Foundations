const isUnique = (num) => {
  let arr = String(num).split("");
  return new Set(arr).size === arr.length;
};
const featured = (num) => {
  // - divisible by 7 without a remainder
  // - is odd
  // - not a repeated number

  if (num === 9876543201)
    console.log(
      "There is no possible number that fulfills those requirements."
    );

  //return num + 1 only if it's ... , else go to the next number;

  for (
    let featuredNumber = num + 1;
    featuredNumber < 9876543201;
    featuredNumber += 14
  ) {
    if (featuredNumber % 7 && !featuredNumber % 2) return featuredNumber;
    else continue;
  }
};

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
