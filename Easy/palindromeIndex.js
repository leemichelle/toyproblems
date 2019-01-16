/* HackerRank problem https://www.hackerrank.com/challenges/palindrome-index/problem */

// Works but times out if the string is immensely long 
function palindromeIndex(s) {
  let reversedStr = reverse(s);
  if (reversedStr === s) {
      return -1;
  } 
  let newStr = '';
  for (let i = 1; i <= s.length; i++) {
      newStr = s.slice(0, i - 1) + s.slice(i);
      if (reverse(newStr) === newStr) {
          return i - 1; 
      }
  }   
  return -1;
}

function reverse(string) {
  return string.split('').reverse().join('');
}