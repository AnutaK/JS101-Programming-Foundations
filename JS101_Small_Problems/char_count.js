const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    // char = char.toLowerCase();
    if (!/[/\W/g]/.test(char)) {
      obj[char] = (obj[char] || 0) + 1;
    }
  }
  return obj;
};
console.log(charCount("Hello World!!!"));
