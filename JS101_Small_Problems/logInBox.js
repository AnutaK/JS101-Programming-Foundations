//Understand the problem:
// input: string
// output: a box surrounding the input string

//Data Structure:
//none

//Algorithm:
// always output an empty bpx:
//      if the string is empty - console.log a static box
//      if string !== null, repeat the characters based on the length
//

const logInBox = (str) => {
  if (!str.length) {
    console.log(`
+--+
|  |
|  |
|  |
+--+`);
  } else {
    console.log(`
+${"-".repeat(str.length + 2)}+
|${" ".repeat(str.length + 2)}|
| ${str} |
|${" ".repeat(str.length + 2)}|
+${"-".repeat(str.length + 2)}+`);
  }
};

logInBox("To boldly go where no one has gone before.");
