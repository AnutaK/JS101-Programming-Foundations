const removeVowels = (arr) => {
  //input: array
  //output: array with stripped vowels

  //loop over a string
  //evaluate if a character is a vowel,
  //if it is, remove it.
  //return a modified array
  const vowels = ["a", "i", "e", "o", "u"];

  return arr.map((el) => {
    return el
      .split("")
      .filter((char) => vowels.indexOf(char.toLowerCase()) === -1)
      .join("");
  });
};

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
