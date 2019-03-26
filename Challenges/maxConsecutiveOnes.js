/*
Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at 
most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
Follow up:
What if the input numbers come in one by one as an infinite stream? In other words, you 
can't store all numbers coming from the stream as it's too large to hold in memory. Could you 
solve it efficiently?

*/

let array = [1,0,1,1,0];
let array1 = [1,1,0,1];
let array2 = [0];

const maxConsecutive = (array) => {
  let count = 1;
  let maxCount = 0;
  let tempCount = 0;
  let lastIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      tempCount++;
    } else if (array[i] === 0 && count === 1) {
      tempCount++
      lastIndex = i;
      count--;
    } else if (array[i] === 0 && count === 0) {
      if (tempCount > maxCount) {
        maxCount = tempCount;
        tempCount = 0;
      }
      i = lastIndex;
      count = 1;
    }
  }
  if (tempCount > maxCount) {
    maxCount = tempCount;
  }
  return maxCount;
}

// console.log(maxConsecutive(array2));

/*
have a count variable 1
have maxCount 
have lastIndex variable
iterate through array
  if 1 - increment maxCount
  if hit zero and count is 1, decrememt count to 0
    make zero a one
    increment maxCount
    last index = i
  if hit zero and count is 0
    set i as lastIndex
    

*/

/*

find first index of 0 and turn to 1
keep track of that first index
have maxCounter
have tempCounter
helper function (arr)
  loop through array 
    if you hit 0
      slice from first zero index plus 1
      if (tempCount is greater than maxCount)
      let count = 0
      helper array
    count++
return maxCount
    
    
*/

const maxOnes = (arr) => {
  let maxCounter = 0;
  let tempCounter = 0;
  const helper = (arr) => {
    let oneIndex = arr.indexOf(0);
    arr[oneIndex] = 1; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) { 
        arr = arr.splice(oneIndex + 1); // why set equal to splice? Doesnt splice return deleted elements? Also, why slice dont work?
        if (tempCounter > maxCounter) { 
          maxCounter = tempCounter;
        }
        tempCounter = 0;
        helper(arr);
      } else if (arr[i] === 1) {
        tempCounter++; 
      }
    }
  }
  helper(arr);
  if (tempCounter > maxCounter) {
    maxCounter = tempCounter;
  }
  return maxCounter
}

console.log(maxOnes([1,0,1,1,0,1]))
console.log(maxOnes(array))
console.log(maxOnes(array1))
console.log(maxOnes(array2))