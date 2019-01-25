// beats 22%..
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          return true;
      }
  }
  return false;
};

/*
I: array of int
O: boolean
C: none
E: empty array?

sort the array 
iterate through array
  check if current equals next
  return false if so
return true

*/