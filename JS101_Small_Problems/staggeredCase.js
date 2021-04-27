const staggeredCase = (str) => {
  //input: a string
  //output: a modified string

  //algorithm:
  //iterate over a string and convert each alphabetic character to its equivalent.

  return str
    .split("")
    .map((char, index) => {
      if (index % 2 === 0 && char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else return char.toLowerCase();
    })
    .join("");
};

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
