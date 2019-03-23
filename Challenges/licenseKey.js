/*
You are given a license key represented as a string S which consists only 
alphanumeric character and dashes. The string is separated into N+1 groups 
by N dashes.

Given a number K, we would want to reformat the strings such that each group 
contains exactly K characters, except for the first group which could be shorter 
than K, but still must contain at least one character. Furthermore, there must 
be a dash inserted between two groups and all lowercase letters should be converted 
to uppercase.

Given a non-empty string S and a number K, format the string according to the rules 
described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters 
except the first part as it could be shorter as mentioned above.
*/


var licenseKeyFormatting = function(S, K) {
  let noDash = S.split('-').join('').toUpperCase();
  let result = [];
  let difference = noDash.length % K
  let tempStr = '';
  let tempK = K;
  for (let i = 0; i < noDash.length; i++) {
    if (difference !== 0) {
      while (difference > 0) {
        tempStr += noDash[i];
        difference--;
        i++;
      }
      result.push(tempStr);
      tempStr = '';
      i--;
    } else {
      while (tempK > 0) {
        tempStr += noDash[i];
        tempK--;
        i++;
      }
      result.push(tempStr);
      tempStr = '';
      tempK = K;
      i--;
    }
  }
  return result.join('-');
};

let S = "5F3Z-2e-9-w"
let K = 4

console.log(licenseKeyFormatting(S, K))

//another solution
var licenseKeyFormatting = function(s, k) {
  var licenseKey = '';
  var cleanedString = s.replace(/-/g, '').toUpperCase();
  var position = cleanedString.length - k; //8-4 = 4
  for (i = cleanedString.length - 1; i >= 0; i--) {
      licenseKey += cleanedString[i];
      if (i === position && position !== 0) {
          licenseKey += '-';
          position -= k;
      }
  }
  return licenseKey.split('').reverse('').join('');
};