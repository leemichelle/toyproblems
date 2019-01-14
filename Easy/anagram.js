/*
Given 2 strings, write a function that determines if the second string
is an anagram of the first.
*/

function anagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {};
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    count = counter[str1[i]] || 0;
    counter[str1[i]] = count + 1;
    // counter[str1[i]] = counter[str1[i]] + 1 || 1;
  }
  for (let j = 0; j < str2.length; j++) {
    count = counter[str2[j]] || 0;
    counter[str2[j]] = count - 1;
    // counter[str2[j]] = counter[str2[j]] - 1 || 1;
  }
  for (let key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
}

//another way to write it with 2 for loops
function anagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1
    }
  }
  return true;
}

anagram('texttwisttime', 'timetwisttext') //true
anagram('rat', 'car') //false
anagram('aaz', 'zza') //false