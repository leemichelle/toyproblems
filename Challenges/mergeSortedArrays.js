/*
I: 2 arrays
O: 1 merged array

declare an empty array 
check for longest array
declare a starting value and set equal to first in longest
loop through longest array
  if longest is smaller than shortest 

*/

function mergeArrays1(array1, array2) {
  const mergedArr = [];

  while (array1.length > 0 && array2.length > 0) {
    const headArr1 = array1[0];
    const headArr2 = array2[0];
    console.log(headArr1, headArr2)
    if (headArr1 < headArr2) {
      mergedArr.push(headArr1);
      array1 = array1.slice(1);
    } else {
      mergedArr.push(headArr2)
      array2 = array2.slice(1);
    }
  }

  return mergedArr;
}

let arr1 = [3, 4, 6, 10, 11, 15];
let arr2 = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays1(arr1, arr2))

function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}
console.log(mergeArrays(arr1, arr2))
