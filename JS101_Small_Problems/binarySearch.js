const binarySearch = (pages, wordToSearch) => {
  let left = 0;
  let right = pages.length - 1;

  let midPoint = Math.floor((left + right) / 2);

  while (pages[midPoint] !== wordToSearch && left <= right) {
    if (wordToSearch < pages[midPoint]) {
      right = midPoint - 1;
    } else left = midPoint + 1;
    midPoint = Math.floor((left + right) / 2);
  }
  if (pages[midPoint] === wordToSearch) return midPoint;
  else return -1;
};

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];

console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
); // 6
