function sameFrequency(num1, num2) {
  //Understand the problem:
  //Input: two numbers
  //Output: a boolean value
  //Data Structure: an object
  //Algo:
  //1.Convert numbers to strings
  //2.Initialize an empty object
  //3.Iterate over the first string and store each character as a value in the object
  //4.If the second string has a different length than the first, immediately return false
  //5.Else, do a lookup of each character in the second string in the object.
  //6.If the same character exists as the property of the object, decrease the value by 1.
  //7.If all values on the object are 0, it means that th evalues have the same frequence, so we return true
  //8. Otherwise, return false

  let string1 = num1.toString();
  let string2 = num2.toString();

  let cache = {};

  if (string1.length !== string2.length) return false;

  for (let char of string1) {
    if (!cache.hasOwnProperty(char)) cache[char] = 1;
    else cache[char]++;
  }
  for (let char of string2) {
    if (cache.hasOwnProperty(char)) cache[char]--;
  }

  let sum = Object.values(cache).reduce((curr, acc) => curr + acc, 0);
  return sum === 0;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(22, 222));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
