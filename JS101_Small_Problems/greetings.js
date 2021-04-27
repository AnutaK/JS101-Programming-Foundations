// Understanding the problem:
// - input:
//     - array
//     - object
// - output:
//     - A string

// Data Structure
// - None

// Algorithm:
// - return a string interpolated with elements from the array and object

const greetings = (arr, obj) => {
  console.log(arr);
  return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
    obj.occupation
  } around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// Hello, John Q Doe! Nice to have a Master Plumber around.
