// const leadingSubstrings = (str) => {

//   let newArr = [];
//   for (let i = 1; i <= str.length; i++) {
//     newArr.push(str.substr(0, i));
//   }

//   return newArr;
// };

//Approach using map()

const leadingSubstrings = (str) => {
  return str.split("").reduce((substrs, char, idx) => {
    let substr = idx > 0 ? substrs[idx - 1] + char : char;
    substrs.push(substr);
    return substrs;
  }, []);
};

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
