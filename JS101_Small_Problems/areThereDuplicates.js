const areThereDuplicates = (...args) => {
  let cache = {};

  args.forEach((arg) => {
    cache[arg] = (cache[arg] || 0) + 1;
  });

  console.log(cache);

  for (let property in cache) {
    return cache[property] > 1;
  }

  return false;
};

console.log(areThereDuplicates(1, 1, 3));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));
