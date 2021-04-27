const reverseWords = (str) => {
  //Conditions:
  //input: string
  //output: letters of each word in the string with 5 letters or more reversed

  //Algo:
  //1. Start by splitting the string into an array of characters
  //2. Initiliaze an empty string variable
  //3. If a word has < than 5 letters, append it to the resulting string as-is.
  //4. Else send a word to an auxilary function to have letters reversed
  //5. Return a resulting string

  let wordArray = str.split(" ");
  return wordArray
    .map((el) => {
      return el.length < 5 ? el : reverseOneWord(el);
    })
    .join(" ");
};

const reverseOneWord = (word) => {
  return word.split("").reverse().join("");
};

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
