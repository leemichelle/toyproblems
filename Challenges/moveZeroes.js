/* leetcode move zeroes problem */

// var moveZeroes = function(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 0 && count !== nums.length) {
//           nums.splice(i, 1); 
//           nums.push(0); 
//           i--;
//           count++;
//       }
//   }
//   return nums;
// };

/*
Input: [0,1,0,3,12]
      x
Output: [1,3,12,0,0]



*/

// go backwards in array if using splice so won't need decrement
function moveZeroes(array) {
    let length = array.length;
    let decrement = 1;
    for (let i = 0; i < length - decrement; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            array.push(0);
            decrement++;
            i--;
        }
    }
    return array;
}

console.log(moveZeroes([0, 1, 0, 3, 12]))