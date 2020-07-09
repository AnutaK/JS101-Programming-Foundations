const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const MATCH_POINTS = 5;
const VALID_PLAYERS = ["user", "computer", "random"];
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];
const score = { player: 0, comp: 0 };

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  console.log(`${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function chooseWhoPlaysFirst(board) {
  let answer;
  let firstTimePlayer;

  prompt(`Choose who gets to play first! (user/computer/random)`);
  answer = readline.question().trim();

  while (!VALID_PLAYERS.includes(answer)) {
    prompt("Sorry, that's not a valid choice.");
    answer = readline.question().trim();
  }

  switch (answer) {
    case "user":
      playerChoosesSquare(board);
      firstTimePlayer = "user";
      break;

    case "computer":
      computerChoosesSquare(board);
      firstTimePlayer = "computer";
      break;
  }

  return firstTimePlayer;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === " ");
}

function joinOr(arr, delimiter = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return (
        arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`
      );
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

// eslint-disable-next-line max-statements
function computerChoosesSquare(board) {
  let square;

  // offense first
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  //pick #5 if it's available
  if (!square && board["5"] === INITIAL_MARKER) square = 5;

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

const isSomeoneWonMatch = (score) => {
  return score.player === MATCH_POINTS || score.comp === MATCH_POINTS;
};

const incrementScore = (board) => {
  return detectWinner(board) === "Player" ? score.player++ : score.comp++;
};

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

//TicTacToe game
while (true) {
  let board = initializeBoard();
  chooseWhoPlaysFirst(board);

  while (true) {
    displayBoard(board);
    if (chooseWhoPlaysFirst(board) === "user") {
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    } else {
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    incrementScore(board);
  } else {
    prompt("It's a tie!");
  }

  if (isSomeoneWonMatch(score)) {
    prompt(`${detectWinner(board)} won the match!`);
    score.player = 0;
    score.comp = 0;
  }

  prompt("Play again? (y or n)");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing Tic Tac Toe!");

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}
