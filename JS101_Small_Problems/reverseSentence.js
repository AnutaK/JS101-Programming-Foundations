const reverseSentence = () => {
  return str.split(" ").reverse().join(" ");
};

console.log(reverseSentence("")); // ""
console.log(reverseSentence("Hello World")); // "World Hello"
console.log(reverseSentence("Reverse these words"));
console.log(reverseSentence("Reverse these multiple words")); // "words these Reverse"
// "words these Reverse"
