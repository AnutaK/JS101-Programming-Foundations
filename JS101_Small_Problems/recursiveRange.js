// SAMPLE INPUT/OUTPUT
//adds up all numbers from 0 to the number passed

function recursiveRange(num) {
  if (num <= 1) return num; //Base Case

  return num + recursiveRange(num - 1);
}
// recursiveRange(6) // 21 = 0 + 1 + 2 + 3 + 4 + 5 + 6
// recursiveRange(10) // 55
