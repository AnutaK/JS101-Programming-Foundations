function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach((word) => {
    console.log(word);
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
      console.log(words);
    }
  });
  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize(
    "These dull boring cards are part of a chaotic annoying board game."
  )
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
