/*
Write a function called maxSubarraySum which accepts an array of 
integers and a number called n. The function should calculate the 
maximum sum of n consecutive elements in the array.
*/


const maxSubarraySum = (array, n) => {
  if (array.length === 0) {
    return null;
  }
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let count = n;
    let curr = i;
    while (count > 0) {
      sum += array[curr]
      curr++; 
      count--;
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}