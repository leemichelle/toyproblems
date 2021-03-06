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

//Better solution
var twoSum = function(nums, target) {
    var counter = {}
    for(let i = 0; i < nums.length; i++) {
      let value = nums[i]; //3, 2, 4
      let difference = target - value; //3, 4, 2
      if (counter.hasOwnProperty(value)) {
        return [counter[value], i]
      } else {
        counter[difference] = i
      }
    }
    return []
  }
  twoSum([3, 2, 4], 6); //[1, 2]

  //Another way to write solution above
  var twoSum = function(nums, target) {
    var ans = [];
    var exist = {};
    
    for (var i = 0; i < nums.length; i++){
        if (typeof(exist[target-nums[i]]) !== 'undefined'){ // because when you find a pair that exits in object, that's the one that is the answer...due to some weird algorithm
            return [exist[target - nums[i]], i];
        }
        exist[nums[i]] = i;
    }
  }