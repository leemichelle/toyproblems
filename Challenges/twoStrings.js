/* HackerRank problem - Two String www.hackerrank.com/challenges/two-strings/problem */

function twoStrings(s1, s2) {
  //I: 2 strings
  //O: yes or no
  //C: optimize if have time
  //E: empty strings

  // declare an object to store letter count
  // declare a count variable
  // iterate through 1st string
    // store string letters into object
  // iterate through second string
    // check if letter exists in object
    // if exists, return Yes
  // return No

  let letterObj = {};
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
      letterObj[s1[i]] = 1; //dont need to track frequency of letters since just 1 match should return yes     
  }
  for (let i = 0; i < s2.length; i++) {
      if (letterObj[s2[i]]) {
          return "YES";
      }
  }
  return "NO";
}

/*
Examples:
hello, world
obj {
  h: 1 
  e: 1
  l: 1 ==> return Yes
  o: 1
}

*/
