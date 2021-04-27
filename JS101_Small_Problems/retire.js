const retirement = () => {
  let rlSync = require("readline-sync");

  let currentAge = rlSync.question("What is your age? ");
  let desiredRetirementAge = rlSync.question(
    "At what age would you like to retire? "
  );

  let currentYear = Date();
  let retirementYear = currentYear.getFullYear();

  let retirementAge =
    currentYear.getFullYear() + (desiredRetirementAge - currentAge);
  let workYearsLeft = retirementAge - currentYear.getFullYear();

  console.log(
    `
    It's only ${retirementYear}. You will retire in ${retirementAge}.
    You only have ${workYearsLeft} years of work left.
    `
  );
};

retirement();
