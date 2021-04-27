const fridayThe13ths = (year) => {
  let thirteenths = [];

  for (let month = 0; month < 12; month++) {
    thirteenths.push(new Date(year, month, 13));
  }
  console.log(thirteenths);

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? count + 1 : count;
  }, 0);
};

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
