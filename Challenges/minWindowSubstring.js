// function minWindow(str, substring) {
//   let substringCounter = {};
//   for (let i = 0; i < substring.length; i++) {
//     let letter = substring[i];
//     substringCounter[letter] ? substringCounter[letter]++ : substringCounter[letter] = 1; //{A: 1, B: 1, C: 1}
//   }
//   let count = substring.length; //3
//   let backCounter = 0;
//   let minLength = Infinity;
//   let start;
//   for (let i = 0; i < str.length; i++) { //"ADOBECODEBANC"
//     let letter = str[i]; // A
//     if (substringCounter[letter]) { 
//       substringCounter[letter]--; // {A:0, B:1, C: 1}
//       count--; //2
//     }
//     while (count === 0) {
//       if (i - backCounter + 1 < minLength) { //5 - 0 + 1 <
//         minLength = i - backCounter + 1; // minLength = 6
//         start = backCounter; //start = i? start = 0
//       }
//       while (!substringCounter.hasOwnProperty(str[backCounter])) { 
//         backCounter++;
//       }
//       if (substringCounter.hasOwnProperty(str[backCounter])) { //str[0]
//         substringCounter[str[backCounter]]++; // A: 1
//         count++; //count++
//       }
//     }
//     console.log(substringCounter, i)
//   }
//   return minLength === Infinity ? '' : str.substr(start, minLength);
// }

var minWindow = function(s, t) {
  let obj = {};
  for (let i = 0; i < t.length; i++) {
    obj[t[i]] ? obj[t[i]]++ : obj[t[i]] = 1;
  }
  let count = t.length;
  let result = '';
  let min = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  let iCounter = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      count--;
      result += s[i];
    } else if (count === 0) {
      if (result.length < min.length) {
        min = result;
      }
      result = '';
      iCounter++;
      i = iCounter;
      count = t.length;
    } else {
     result += s[i];
    }
  }
 return min;
};

console.log(minWindow("ADOBECODEBANC", "ABC")); //BANC

// let obj = {A: 0}
// function isTrue(obj) {
//   return obj[A];
// }
// console.log(isTrue(obj));


function minWindow(s, t) {
  let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1); //{A: 1, B: 1, C: 1}
  let count = t.length;   // remaining matching count
  let l = 0;
  let r = 0;
  let start = 0;
  let minLen = Infinity;
  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;
    while (count === 0) {   // valid
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }
      if (map[s[l++]]++ === 0) count++; // make it invalid
    }
  }
  return minLen === Infinity ? '' : s.substr(start, minLen);
}


//another solution
function minWindow (s, t) {
    let obj = {};
    let minLength = Number.MAX_VALUE;
    let frontCounter = 0;
    let count = t.length; //3
    for (let i = 0; i < t.length; i++) {
      let char = t[i];
      obj[char] ? obj[char]++ : obj[char] = 1; //{A: 1, B:1, C:1}
    }
  
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (obj[char]) {
        obj[char]--;
        if (obj[char] === 0) {
          count--;
        }
      }
      if (count === 0) { //{A: 0, B: 0, C: 0}, frontCounter = 0
        if (i - frontCounter + 1 < minLength) {
          minLength = i - frontCounter + 1;
          start = frontCounter;
        };
        while (!obj.hasOwnProperty(s[frontCounter])) { // 
          frontCounter++;    // 1
        }
        if (obj.hasOwnProperty(s[frontCounter])) {
          obj[s[frontCounter]]++;
          count++;
        }
      }
    }
    return s.substr(start, minLength);
  }
  console.log(minWindow("ABECODEBANC", "ABC"))