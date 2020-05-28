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

let retrieveInput = (input, validInput) => {
  while (validInput(input)) {
    prompt("Hmm... that doesn't look like a valid number");
    input = readline.question();
  }
  return input;
};

do {
  prompt("PLease enter your Loan Amount: ");
  let loanAmount = readline.question();
  retrieveInput(loanAmount, isInvalidNumber);

  prompt("PLease enter the Annual Percentage Rate (APR): ");
  let apr = readline.question();
  retrieveInput(apr, isInvalidNumber);

  prompt("Please enter the loan duration (in years): ");
  let loanDuration = readline.question();
  retrieveInput(loanDuration, isInvalidNumber);

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
