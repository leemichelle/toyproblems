/* HackerRank problem- Ransom Note https://www.hackerrank.com/challenges/ctci-ransom-note/problem */

function checkMagazine(magazine, note) {
  //I: 2 arrays (magazine: array of strings, note: array of strings)
  //O: Yes or No
  //C: optimization if time permits
  //E: empty array for notes, can only use words once

  //declare an object to store magazine words
  //iterate through magazine array
   // store magazine words into object and track count of words
  //iterate through note array
   // if magazine has note word
    // decrement magazine word count
   // else if
    // return 'No'
  // return Yes

  let wordCount = {};
  for (let i = 0; i < magazine.length; i++) {
      wordCount[magazine[i]] ? wordCount[magazine[i]]++ : wordCount[magazine[i]] = 1;
  }
  for (let i = 0; i < note.length; i++) {
      if (wordCount[note[i]]) {
          wordCount[note[i]]--;
      } else {
          return 'No';
      }
  }
  return 'Yes';
}

/*
Example:
magazine: ive got a lovely bunch of coconuts
note: ive got some coconuts

magazine: {
  ive: 1
  got: 1
  a: 1
  lovely: 1
  bunch: 1
  coconuts: 1
}

*/