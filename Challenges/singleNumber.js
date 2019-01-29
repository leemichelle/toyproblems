// only beats 18%
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          count++;
      } else if (nums[i] !== nums[i + 1] && count === 0) {
         return nums[i];
      } else if (nums[i] !== nums[i+1]) {
          count = 0;
      }
  }
};

/*
I: non-empty array of integers
O: integer that appears only once
C: linear time complexity and no extra space
E: none

sort the array
iterate through array
declare a count variable and set to 0
if element equals next element
  add count
if does not equal and count is 0
  return number



*/