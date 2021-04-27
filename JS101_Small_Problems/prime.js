const prime = (number) => {
  let isPrime = true;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime
    ? console.log(`Number is prime`)
    : console.log(`Number is not prime`);
};

console.log(prime(237));
