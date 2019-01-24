function palindrome(str) {
  let reversed = str.split('').reduce((reverse, character) => {
    return character + reverse;
  }, '');
  return reversed === str;
}

function palindrome(str) {
  return str.split('').every((character, i) => {
    return character === str[str.length - i - 1];
  });
}