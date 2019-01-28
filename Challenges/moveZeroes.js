/* leetcode move zeroes problem */

var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0 && count !== nums.length) {
          nums.splice(i, 1); 
          nums.push(0); 
          i--;
          count++;
      }
  }
  return nums;
};

/*
Input: [0,1,0,3,12]
      x
Output: [1,3,12,0,0]



*/