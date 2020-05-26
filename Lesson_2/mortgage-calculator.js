const readline = require("readline-sync");

const prompt = (message) => {
  console.log(`=> ${message}`);
};

function isInvalidNumber(number) {
  return (
    number.trim() === "" ||
    Number(number) < 0 ||
    Number(number) === 0 ||
    Number.isNaN(Number(number))
  );
}

let anotherCalculation = true;

prompt("Welcome to Mortgage Calculator!");
console.log("**********************************");

do {
  prompt("Please enter your loan amount: ");

  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanAmount = readline.question();
  }

  prompt("PLease enter the Annual Percentage Rate (APR): ");

  let apr = readline.question();

  while (isInvalidNumber(apr)) {
    prompt("Hmm... that doesn't look like a valid number.");
    apr = readline.question();
  }

  prompt("Please enter the loan duration (in years): ");

  let loanDuration = readline.question();

  while (isInvalidNumber(loanDuration)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanDuration = readline.question();
  }

  const calculateMortgage = () => {
    let monthlyInterestRate = Number(apr) / 100 / 12;
    let loanDurationMonths = loanDuration * 12;

    let mortgageAmount =
      Number(loanAmount) *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -Number(loanDurationMonths))));
    return mortgageAmount;
  };

  let result = calculateMortgage();
  console.log(`Your Mortgage Payment is: $${result.toFixed(2)}`);

  prompt("Would you like to do another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer !== "no" && answer !== "yes") {
    prompt("Please enter only 'yes' or 'no': ");
    answer = readline.question().toLowerCase();
  }

  if (answer === "no") {
    anotherCalculation = false;
    return;
  }
} while (anotherCalculation);
