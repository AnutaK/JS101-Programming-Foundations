const wordCap = (str) => {
  //   let newArr = str.split(" ");
  //   let newStr = "";

  return str.split(" ").reduce((el, curr) => {
    return curr;
  }, "");

  //   for (let el of newArr) {
  //     newStr += `${el[0].toUpperCase()}${el.slice(1)} `;
  //   }
  //   return newStr;
};
console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
