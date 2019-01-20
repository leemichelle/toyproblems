/* codewars problem */

function isIsogram(str){
  let newStr = str.toLowerCase();
  let count = {};
  for (let i = 0; i < newStr.length; i++) {
    if (count[newStr[i]]) {
      return false;
    } else {
      count[newStr[i]] = 1;
    }
  }
  return true;
}