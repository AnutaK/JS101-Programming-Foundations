function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("");
}

let board = {
  1: "X", // top left
  2: " ", // top center
  3: " ", // top right
  4: " ", // middle left
  5: "O", // center
  6: " ", // middle right
  7: " ", // bottom left
  8: " ", // bottom center
  9: "X", // bottom right
};

displayBoard(board);
