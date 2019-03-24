function findNeedle(haystack, needle) {
  const result = [];
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let found = false;
      for (let x = 0; x < needle.length; x++) {
        if (haystack[i+x] !== needle[x]) {
          break;
        }
        if (x === needle.length - 1) {
          found = true;
        }
      }
      if (found) {
        result.push(i);
      }
    }
  }
  return result;
}

console.log(findNeedle('aaabcdddbbddddabcdefghi', 'abc'));

//time complexity is n * m if haystack is n and needle is m

// another solution
let needleHaystack = function(haystack, needle) {
    let results = [];
    let start = 0;
    let end = needle.length + start;
    while (start < haystack.length) {
      let possibleNeedle = haystack.substr(start, end);
      if (possibleNeedle === needle) {
        results.push(start);
      }
      start++;
    }
    return results;
  }