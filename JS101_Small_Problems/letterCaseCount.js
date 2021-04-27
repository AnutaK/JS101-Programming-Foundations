const letterCaseCount = (str) => {
  //input: a string
  //output: an object specifying how many characters of each type - lowercase, uppercase, neither -
  //are in the string

  //create an empty object
  //then iterate over a string
  // - if a string is a lower case letter
  // - this can be determined by comparing a character with itself
  // - then add a new entry to an object with a property key signalling whether it's a lower case letter
  //or an upper case,

  let cache = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let el of str) {
    if (el === el.toLowerCase() && el.match(/[a-z]/i)) {
      cache["lowercase"] += 1;
    }

    if (el === el.toUpperCase() && el.match(/[a-z]/i)) {
      cache["uppercase"] += 1;
    }

    if (!el.match(/[a-z]/i)) {
      cache["neither"] += 1;
    }
  }

  return cache;
};

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
