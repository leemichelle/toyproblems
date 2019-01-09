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