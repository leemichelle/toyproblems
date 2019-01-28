/* leetcode First Unique Character in a String */
// beats 22%
var firstUniqChar = function(s) {
  let count = {};
  for (let i = 0; i < s.length; i++) {
     count[s[i]] ? count[s[i]]++ : count[s[i]] = 1;
  }
  for (let i = 0; i < s.length; i++) {
      if (count[s[i]] === 1) {
          return i;
      }
  }
  return -1;
};