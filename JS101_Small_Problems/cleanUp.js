const isAlphabetic = (char) => {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
};
const cleanUp = (str) => {
  //Understanding the problem:
  //Input: a string with alphabetic and non-alphabetic characters

  //Output: a string w/out non-alphabetic characters
  //Replace a non-alphabetic character with a space
  //No two consecutive spaces are allowed

  //Algo:
  //Create a helper function to evaluate if a character is non-alphabetic
  //Return true if it's alpahbetic
  //False otherwise
  //In the main function, start a loop and send each element to the helper function to evaluate it
  //If it is an alphabetic character, add it to a resulting string
  //If it is not, replace with a space
  //Evaluate the final string to make sure there are no consecutive spaces:
  //if a character === "", slice it out of the string
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (isAlphabetic(str[index])) result += str[index];
    else if (result[result.length - 1] !== " ") result += " ";
  }
  console.log(result);
};

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
