/* HackerRank problem https://www.hackerrank.com/challenges/gem-stones/problem */

function gemstones(arr) {
  let count = {};
  // creates an object with the letters of first word
  for (let i = 0; i < arr[0].length; i++) {
      count[arr[0][i]] = 1;
  }
  // checks if next words have letters in the object
  for (let i = 1; i < arr.length; i++) {
      for (let key in count) {
          if (!arr[i].includes(key)) { // if word does not have letter in obj
              count[key] = 0; // make that letter falsey
          }
      }
  }
  let result = [];
  for (let key in count) {
      if (count[key]) { // check for truthy values
          result.push(key);
      }
  }
  return result.length;
}

//original pseudocode
  // put shortest array word into object
   // match letters against other words in array
   // if letter don't match, turn letter into count 0
  // return letter in object