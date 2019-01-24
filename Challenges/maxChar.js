function maxChar(str) {
  const charCount = {}
  for (let char of str) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  let max = 0;
  let maxChar = '';
  for (let key in charCount) {
    if (charCount[key] > max) {
      max = charCount[key];
      maxChar = key;
    }
  }
  return maxChar;
}