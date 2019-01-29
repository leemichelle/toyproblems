/* leetcode Plus One question */

// doesn't work for long arrays, for some reason parseInt changes digits to 0 at the end if very large number
var plusOne = function(digits) {
  let sum = parseInt(digits.join('')) + 1; //does not parse properly
  let newSum = sum.toString().split('').map((num) => parseInt(num));
  return newSum;
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]) // parses to 6145390195186705000 for some reason...