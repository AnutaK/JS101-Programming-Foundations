const wordSizes = (str) => {
  let wordObj = {};
  let wordArray = str.replace(/[^\w\s]|_/g, "").split(" ");

  wordArray.forEach((word) => {
    if (wordObj.hasOwnProperty(word.length)) wordObj[word.length]++;
    else wordObj[word.length] = 1;
  });

  return wordObj;
};

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes("")); // {}
