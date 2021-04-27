const countOccurrences = (arr) => {
  //understanding the problem:
  //input: an array of elements
  //output: strings in the following format:
  // 'string_name'-> number of occurences

  //Use an occurence counter algorithm

  //Data structure: an object

  //Algorithm
  //initialize an empty object
  //loop over a given array and construct an object based on how many times a certain word is met in the array
  //construct a string in a certain way.

  let cache = {};

  for (let el in arr) {
    cache[arr[el]] = (cache[arr[el]] || 0) + 1;
  }

  for (let property in cache) {
    console.log(`${property} => ${cache[property]}`);
  }
};

// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

console.log(
  countOccurrences([
    "car",
    "car",
    "truck",
    "car",
    "SUV",
    "truck",
    "motorcycle",
    "motorcycle",
    "car",
    "truck",
    "suv",
  ])
);
