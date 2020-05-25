const readline = require("readline-sync");

const prompt = (message) => {
  console.log(`=> ${message}`);
};

function invalidNumber(number) {
  return (
    number.trimStart() === "" || Number.isNaN(Number(number)) || number < 0
  );
}

let anotherCalculation = true;

prompt("Welcome to Mortgage Calculator!");
console.log("**********************************");

do {
  prompt("Please enter your loan amount: ");

  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanAmount = readline.question();
  }

  prompt("PLease enter the Annual Percentage Rate (APR): ");

  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt("Hmm... that doesn't look like a valid number.");
    apr = readline.question();
  }

  prompt("Please enter the loan duration: ");

  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanDuration = readline.question();
  }

  let monthlyInterestRate = Number(apr) / 100 / 12;
  let loanDurationMonths = Number(loanDuration) * 12;

  const mortgageCalculator = () => {
    //Create a variable to calculate loan duration in months
    let motgageAmount =
      Number(loanAmount) *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -Number(loanDurationMonths))));
    return motgageAmount;
  };

  let result = mortgageCalculator();
  console.log(`Your Mortgage Payment is: $${result.toFixed(2)}`);

  prompt("Would you like to do another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") {
    anotherCalculation = false;
    return;
  }
} while (anotherCalculation);
