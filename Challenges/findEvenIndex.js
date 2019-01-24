/* codewars problem Equal Sides of An Array https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript */

// sliding window pattern
function findEvenIndex(arr){
  let leftSum = 0;
  let rightSum = 0;
  // adds everything to the right side, skipping 0 index
  for (let i = 1; i < arr.length; i++) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (rightSum !== leftSum) {
      rightSum -= arr[i + 1];
      leftSum += arr[i];
    } else {
      return i;
    }
  } 
  return -1;
}

