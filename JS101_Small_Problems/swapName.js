function swapName(string) {
  let [lastName, ...givenNames] = string.split(" ").reverse();
  givenNames = givenNames.reverse().join(" ");

  return `${lastName}, ${givenNames}`;
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
console.log(swapName("Karl Oskar Henriksson Ragvals")); // "Ragvals, Karl Oskar Henriksson"
