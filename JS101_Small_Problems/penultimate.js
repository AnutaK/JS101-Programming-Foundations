const penultimate = (str) => {
  //Understanding the problem:
  //Input: A string of words
  //Output: a single word that represents the word before last

  //Algo:
  //Split an argument string into an array of words.
  //return the next to last word
  let arr = str.split(" ");
  return arr[arr.length - 2];
};

const middleWord = (str) => {
  //The problem:
  //input: a string
  //output: a middle word from the string
  // - if the string has odd number of elements, then return the element in the middle,
  //else divide the string in half and return the first element of the second half

  //Edge cases:
  //String is empty, return "";
  //String has one element, return that element
  let middle;
  if (str.length < 2) return "";
  let arr = str.replace(/[^\w\s]/gi, "").split(" ");

  if (arr.length % 2 === 1) {
    middle = Math.floor(arr.length / 2);
    console.log(middle);
  } else middle = arr.length / 2;

  return arr[middle];
};

console.log(middleWord("Launch School is was next reatest!"));

// console.log(penultimate("last word") === "last"); // logs true
console.log(middleWord("Launch School is the great!")); // logs true
