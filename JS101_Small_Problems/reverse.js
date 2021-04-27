const reverse = (array) => {
  //Input:
  //an array

  //Output:
  //a reversed array

  //Algo:
  //To reverse an array in place,
  //Start iterating over a given array argument beginning with the last element
  //While there are still elements in the array to iterate over,
  //Set the value of the first element to equal to the value of the last element

  let j = array.length - 1;
  for (let index = 0; index < array.length; index++) {
    array[i] = array[j];
    i++;
    j--;
  }

  return array;
};

let list = [1, 2, 3, 4];

let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
