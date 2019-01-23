/* Write a function that takes a string as input and returns the string reversed. */

let reverseString = (s) => {
  let end = s.length - 1
  let result = '';
  while (end >= 0) {
      result += s[end];
      end--;     
  }
  return result;
};

function reverse(str) {
  let str = '';
  for (let i = str.length - 1; i >= 0; i--) {
    str += str[i];
  }
  return str;
}

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse(str) {
  return str.split('').reduce((reversed, character) => 
    character + reversed
  , '')
}







































