function isValid(args) {
  return (
    args.reduce((acc, curr) => acc + curr, 0) === 180 &&
    args.every((angle) => angle > 0)
  );
}

function triangle(args) {

    //The Rules: 
    //Right: One angle is a right angle (exactly 90 degrees).
    //Acute: All three angles are less than 90 degrees.
    //Obtuse: One angle is greater than 90 degrees

  let triangleArray = [...arguments].sort((a,b) => a - b);
  
  
  if(isValid(triangleArray)){
    if(triangleArray[2] === 90) return "right";
    else if(triangleArray.every(angle => angle < 90)) return "acute";
    else(triangleArray[2] > 90) return "obtute";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
