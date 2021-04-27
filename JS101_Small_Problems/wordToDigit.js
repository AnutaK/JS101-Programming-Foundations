// const NUM_WORDS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };
// NUM_WORDS;
// function wordToDigit(sentence) {
//   return sentence
//     .split(/\b/)
//     .map((word) =>
//       Object.keys(NUM_WORDS).includes(word) ? NUM_WORDS[word] : word
//     )
//     .join(" ");
// }

function wordToDigit(string) {
  let numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numberWords.forEach((ele, idx) => {
    while (string.includes(ele)) {
      string = string.replace(ele, idx);
    }
  });

  return string;
}
console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
