function triangles(a, b, c) {
  // All sides must have lengths greater than zero — i.e., the shortest side is greater than zero (shortest > 0).
  // The sum of the two shortest sides must be greater than the longest side (shortest + middle > longest).

  let sorted = [...arguments].sort((a, b) => a - b);
  let [shortest, middle, longest] = sorted;

  if (shortest === 0 || middle === 0 || longest === 0) return "invalid";
  if (shortest + middle < longest) return "invalid";

  console.log(sorted);

  //Algo:
  //Evaluate each side and set it to equal to longest, middle or shortest
  //then determine what type of a triagle you have
  console.log(shortest);
  console.log(middle);
  console.log(longest);

  //   if (shortest !== middle && middle !== longest) return "scalene";
  //   else if (shortest === middle && middle !== longest) return "isosceles";
  if (shortest === middle && middle === longest) return "equilateral";
  else if (shortest === middle || middle === longest) return "isosceles";
  else return "scalene";
}

console.log(triangles(3, 3, 3)); // "equilateral"
console.log(triangles(3, 3, 1.5)); // "isosceles"
console.log(triangles(3, 4, 5)); //      // "scalene"
console.log(triangles(0, 3, 3)); // "invalid"
console.log(triangles(3, 1, 1)); // "invalid"

// Other solution:
// function triangles(a, b, c) {
//   let orderedSides = [...arguments].sort((a, b) => a - b);
//   let [shortest, middle, longest] = orderedSides;

//   if (shortest === 0 || shortest + middle <= longest) return "invalid";

//   if (shortest === middle && middle === longest) {
//     return "equilateral";
//   } else if (shortest === middle || middle === longest) {
//     return "isosceles";
//   }

//   return "scalene";
// }
