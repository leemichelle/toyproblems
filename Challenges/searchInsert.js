/*
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

*/

// function searchInsert(array, target) {
//   let start = 0;
//   let end = array.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   if (target > array[end]) {
//     return end + 1;
//   }
//   if (target < array[start]) {
//     return 0;
//   }
//   while (start !== middle || end !== middle) { // 0 2
//     if (target < array[middle]) { // 2 < 3
//       end = middle;  // end = 1
//     } else if (target > array[middle]) {
//       start = middle;
//     }
//     console.log(start, end, middle);
//   }

// }

// function searchInsert(array, target) {
//   let num = 0;
//   while (num < array.length) {
//     if (target < array[num]) {
//       return num;
//     } else if (target === array[num]) {
//       return num;
//     }
//     num++;
//   }
//   return array.length;
// }

function searchInsert(nums, target) {
  let pointerOne = 0;
  let pointerTwo = nums.length - 1;
  while (pointerOne <= pointerTwo) {
    console.log('first', pointerTwo, pointerOne)
      let middle = Math.floor((pointerOne + pointerTwo) / 2);
      if (nums[middle] === target) {
          return middle;
      } else if(target < nums[middle]) {
          pointerTwo = middle - 1;
      } else {
          pointerOne = middle + 1;
      }
      console.log(pointerTwo, pointerOne)
  }
  return pointerOne;
};

// var searchInsert = function(nums, target) {
//   const len = nums.length
//   let i = 0
//   while (i < len) {
//     if (target < nums[i]) return i
//     else if (target === nums[i]) return i
//     i++
//   }
//   return len
// };

console.log(searchInsert([1, 3, 5, 6], 2))