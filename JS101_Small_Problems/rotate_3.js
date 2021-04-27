function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  console.log(numberString);
  for (let index = 0; index < numberString.length; index++) {}

  let firstPart = numberString.slice(1) + numberString[0];
  console.log(firstPart);

  let secondPart = firstPart[0] + rotateString(firstPart.slice(1));
  console.log(secondPart);

  //   let firstPart = numberString.slice(0, numberString.length - count);
  //   let secondPart = numberString.slice(numberString.length - count);
  //   let resultString = firstPart + rotateString(secondPart);

  //   return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

rotateRightmostDigits(735291);
