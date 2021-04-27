const legalCharacter = (character) => {
  return character >= "a" && character <= "z";
};

const isVowel = (character) => ["a", "i", "e", "o", "u"].includes(character);

const doubleConsonants = (str) => {
  return [...str].reduce((acc, curr) => {
    if (legalCharacter(curr.toLowerCase()) && !isVowel(curr.toLowerCase()))
      acc += curr.repeat(2);
    else acc += curr;
    return acc;
  }, "");
};

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
