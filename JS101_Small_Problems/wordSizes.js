const wordSizes = (sentence) => {
  //Split the string into an array of characters
  //Start a loop:
  //    1. Set a new variable to the value of char.length;
  //    2. Make that value to be a new property on the cache object if that property doesn't exist and add 1 to its value..
  //    3. If the property exists, add 1 to its value
  //Return cache object

  //   Discussion
  // The goal of this exercise is to count the number of words of each size. To do that, the solution first obtains a list of words by splitting the words argument string into an array of words. Computing the size of a word is easy, but incrementing the count for that word size is slightly trickier.

  // The solution stores the counts of word sizes as properties of the count object. It does this by iterating over the list of words and performing the following:

  // Initialize the wordSize variable to the length of the current word.
  // Check whether wordSize is equal to 0. If yes, proceed immediately to the next iteration since there is no need to account for words of zero length.
  // Ensure that the property for the current wordSize in the count object exists and has a value. If the property does not exist (i.e., count[wordSize] evaluates to undefined), set it to 0. Otherwise, just set it to its current value. Note that we use bang prefix here. This prefix converts the value to a boolean and reverses it.
  // Increment the count for a particular wordSize by 1.

  let cache = {};
  if (!sentence.length) return {};
  let wordArray = sentence.split(" ");

  for (let word = 0; word < wordArray.length; word++) {
    let wordLength = wordArray[word].length;
    if (!wordLength) continue;
    else cache[wordLength] = (cache[wordLength] || 0) + 1;
  }
  return cache;
};

console.log(wordSizes("Hello,    world!"));

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(""));
