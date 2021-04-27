const buyFruit = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    let multiplier = el[1];
    while (multiplier) {
      newArr.push(el[0]);
      multiplier--;
    }
  });
  return newArr;
};

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
