const triangle = (digit) => {
  //Understand the problem:
  //Input: digit
  //Output: no return value, multiple console.logs

  //Algo:
  //declare two variables: let space = " ",
  //Start a loop: reduce a number of spaces and increase a number of stars each time you loop
  //n - number of rows that's passed into the function
  //4 spaces + 1 *'s = repeat(" ", n - 1) + repeat("*", asterisk)
  //3 spaces + 2 *'s
  //2 spaces + 3 *'s
  //1 space + 4 *'s
  //0 spaces + 5 *'s

  let space = " ";
  let count = 1;

  while (count <= digit) {
    console.log(space.repeat(digit - count) + "*".repeat(count));
    count++;
  }
};
triangle(5);
//    *
//   **
//  ***
// ****
//*****
triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
