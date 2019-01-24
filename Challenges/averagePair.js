/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus constraints: Time = O(N) Space = O(1)

Sample input:
averagePair([1, 2, 3], 2.5); //true
averagePair([], 4); //false
averagePair([-1, 0, 3, 4, 5, 6], 4.1); //false

I = sorted array of integers and a target average
O = boolean
C = time is o(n) and space is o(1)
E = [] should return false

if array is empty or length is less than 2, return false
declare sum variable //-1
if sum divided by 2 equals target, return true
if sum divided by 2 does not equal target and array length is greater than 2
  loop through array starting at 2
    sum equals sum - previous number + next number
    if sum divided 2 equals target, return true
else, return false

*/

const averagePair = (array, avg) => {
  if (array.length === 0 || array.length < 2) {
    return false;
  } 
  let sum = array[0] + array[1];
  if ((sum / 2) === avg) {
    return true;
  } else if (sum / 2 !== avg && array.length > 2) {
    for (let i = 2; i < array.length; i++) {
      sum = sum - array[i-2] + array[i] 
      if (sum / 2 === avg) {
        return true;
      }
    }
  } 
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));