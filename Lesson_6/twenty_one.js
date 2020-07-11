let readline = require("readline-sync");

let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

for (let suit in suits) {
  for (let value in values) {
    deck.push([suits[suit], values[value]]);
  }
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map((card) => card[1]);

  let sum = 0;
  values.forEach((value) => {
    if (value === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values
    .filter((value) => value === "A")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });

  return sum;
}

console.log(deck);

while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === "stay") break;
}
