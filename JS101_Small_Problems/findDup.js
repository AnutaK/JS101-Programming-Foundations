console.time();
// const findDup = (arr) => {
//   //Input: array
//   //output: digit that gets repeated twice

//   //Algo:
//   //Create an empty object
//   //Iterate over an array and store each element of the array as a property on an object:
//   //  If the property doesn't exist, set its value to be 1;
//   //  If the property exists, set its value to be an existing value + 1;

//   //Now that we've populated the object, iterate over its values
//   //and return the property whose value is greater than 1

//   let cache = {};

//   for (let el in arr) {
//     cache[arr[el]] = (cache[arr[el]] || 0) + 1;
//   }

//   for (let el in cache) {
//     if (cache[el] === 1) continue;
//     else return el;
//   }

//   // let i = 0;
//   // let sorted = arr.sort((a, b) => a - b);

//   // for (let i = 0; i < sorted.length; i++) {
//   //   if (sorted[i] === sorted[i + 1]) return sorted[i];
//   //   else continue;
//   // }
// };

console.timeEnd();

console.log(findDup([5, 5, 3, 1]));
console.log(
  findDup([
    18,
    9,
    36,
    96,
    31,
    19,
    54,
    75,
    42,
    15,
    38,
    25,
    97,
    92,
    46,
    69,
    91,
    59,
    53,
    27,
    14,
    61,
    90,
    81,
    8,
    63,
    95,
    99,
    30,
    65,
    78,
    76,
    48,
    16,
    93,
    77,
    52,
    49,
    37,
    29,
    89,
    10,
    84,
    1,
    47,
    68,
    12,
    33,
    86,
    60,
    41,
    44,
    83,
    35,
    94,
    73,
    98,
    3,
    64,
    82,
    55,
    79,
    80,
    21,
    39,
    72,
    13,
    50,
    6,
    70,
    85,
    87,
    51,
    17,
    66,
    20,
    28,
    26,
    2,
    22,
    40,
    23,
    71,
    62,
    73,
    32,
    43,
    24,
    4,
    56,
    7,
    34,
    57,
    74,
    45,
    11,
    88,
    67,
    5,
    58,
  ])
);

//Other Solutions:
function findDup(arr) {
  return arr.find((val, idx) => arr.indexOf(val) !== idx);
}
