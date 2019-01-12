/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

//Naive solution
let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
     for (let x = 1; x < nums.length; x++) {
       if (x !== i) {
         if (nums[x] + nums[i] === target) {
             return [i, x];
         }
       }
     }
  }
};