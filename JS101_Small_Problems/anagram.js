const validAnagram = (str1, str2) => {
  //Understanding the problem:
  //input: two strings
  //output: true/false
  //Examples: below
  //data Structure: construct an object

  let anagramObj1 = {};
  let anagramObj2 = {};

  for (let prop of str1) {
    anagramObj1[prop] = (anagramObj1[prop] || 0) + 1;
  }
  for (let prop of str2) {
    anagramObj2[prop] = (anagramObj2[prop] || 0) + 1;
  }

  for (let obj in anagramObj1) {
    if (anagramObj1[obj] !== anagramObj2[obj]) return false;
  }
  return true;
};

console.log(validAnagram("", "")); //true;
console.log(validAnagram("aaz", "zza")); //false;
console.log(validAnagram("anagram", "nagaram")); //true;
console.log(validAnagram("rat", "car")); //true;
console.log(validAnagram("awesome", "awesom")); //false;
console.log(validAnagram("qwerty", "qeywrt")); //true;
console.log(validAnagram("texttwisttime", "timetwisttext")); //true;
