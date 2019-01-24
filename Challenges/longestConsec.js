/* codewars problem - Consecutive strings https://www.codewars.com/kata/consecutive-strings/train/javascript */

// Naive solution
function longestConsec(strarr, k) {
  let longestLength = 0;
  let longestStr = '';
  if (strarr.length < k) {
    return '';
  }
  for (let i = 0; i < strarr.length - k + 1; i++) {
    let num = 0;
    let str = '';
    let x = i;
    while (num < k) {
      str += strarr[x];
      x++;
      num++;
    }
    if (str.length > longestLength) {
      longestStr = str;
      longestLength = longestStr.length;
    }
  }
  return longestStr;
}

// with sliding window pattern