/*
Given two strings, a and b, that may or may not be of the same length, 
determine the minimum number of character deletions required to make a 
and b anagrams. Any characters can be deleted from either of the strings.

For example, if a=cde and b=dcf, we can delete e from string a and f from 
string b so that both remaining strings are cd and dc which are anagrams.

*/

//Naive solution
function makeAnagram(a, b) {
  //I: two strings, may or may not be same length
  //O: number representing characters deleted
  //C: all lowercase
  //E: 
  let countLetters = {};
  let count = 0;
  for (let i = 0; i < a.length; i++) {
      count = countLetters[a[i]] || 0;
      countLetters[a[i]] = count + 1;
  }
  for (let x = 0; x < b.length; x++) {
      count = countLetters[b[x]] || 0;
      countLetters[b[x]] = count - 1;
  }
  let result = 0;
  for (let key in countLetters) {
      result += Math.abs(countLetters[key])
  }
  return result;
}