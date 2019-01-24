// took 15 mins
var rotate = function(nums, k) {
  let rotate = nums.slice(0); 
  for (let i = 0; i < rotate.length; i++) {
      let steps = i + k;
      if (steps > nums.length - 1) {
          steps = steps - (nums.length);
      }
      rotate[steps] = nums[i];
  }
  return rotate;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3) // [5,6,7,1,2,3,4]
rotate([-1,-100,3,99], 2) // [3,99,-1,-100]

/*
I: array and k steps
O: array rotated
C: O(1) space, k is non negative
E: none

I: [1,2,3,4,5,6,7] and k = 3   
O: [5,6,7,1,2,3,4] 

create a copy of array
iterate through copy
if index plus step is greater than length of array
  
set element at i as the element plus step in the original array



*/