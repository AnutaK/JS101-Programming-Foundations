const staggeredCase = (str) => {
  //input: a string
  //output: a modified string

  //algorithm:
  //iterate over a string and convert each alphabetic character to its equivalent.

  return str
    .toLowerCase()
    .split("")
    .map((char, index) => {
      if (char >= "a" && char <= "z") {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else if (index % 2 !== 0) {
          return char.toLowerCase();
        }
      } else return char;
    })
    .join("");
};

console.log(staggeredCase("I Love Launch School!"));
//=== "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );
