//naive solution
function same (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * arr1[i])
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//better solution - O(n) time
function same (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter = {};
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    count = counter[arr1[i] ** 2] || 0;
    counter[arr1[i] ** 2] = count + 1;
  }
  for (let j = 0; j < arr2.length; j++) {
    count = counter[arr2[j]] || 0;
    counter[arr2[j]] = count - 1;
  }
  let result = 0;
  for (let key in counter) {
    result += Math.abs(counter[key]);
  }
  return result === 0;
}


let arr1 = [1, 2, 1]
let arr2 = [4, 1, 4]
same(arr1, arr2) //false