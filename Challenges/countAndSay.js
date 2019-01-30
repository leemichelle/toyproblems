/* leetcode count and say */
/*
let obj = {
1. 11
2. 21
3. 1211
4. 111221
5. 312211
}

I: number
O: number 
C: none, 1-30
E: none

6. 13112221
7. 1113213211

count = 1
1113213211

4. 3211
5. 

count = 2
currentVal = 1
nextVal = 1
131221

let count = 1
convert number to string
declare emptry string
iterate through the number
declare current value 
declare next value 
if current does not equal next
  add count and current value to string
else if they match
  increment count
return string converted to number

function countAndSay (num) {
  let obj = {
  1. 11
  2. 21
  3. 1211
  4. 111221
  5. 312211
  }
  if (obj[num]) {
    return obj[num]
  }
  let count = 1;
  let numStr = obj[num - 1].toString()
  let result = '';
  let current = numStr[0]
  for (let i = 1; i < numStr.length; i++) {
    let next = numStr[i];
    if (current !== next) {
      result += count + current;
      current = next;
    } else if (current === next) {
      count++;
    }
  }
  return parseInt(result);
}

*/