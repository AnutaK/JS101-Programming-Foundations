function getGrade(...arg) {
  let letterGrade = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0,
  };
  let average = arg.reduce((total, grade) => total + grade, 0) / arg.length;
  console.log(average);

  return Object.keys(letterGrade).find((el) => average >= letterGrade[el]);

  // console.log(average);
}

// return Object.keys(letterGrade).find((elem) => average >= letterGrade[elem]);

// let average = arg.reduce((total, grade) => total + grade, 0) / arg.length;
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
