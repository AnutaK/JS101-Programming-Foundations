var containsDuplicate = function (nums) {
  let filteredArray = [];
  for (let index = 0; index < nums.length; index++) {
    if (
      nums[index] === nums[index + 1] &&
      filteredArray.includes(nums[index])
    ) {
      filteredArray.push(nums[index]);
    }
  }
  return filteredArray;
};
