/*
You're given strings J representing the types of stones that are jewels, 
and S representing the stones you have.  Each character in S is a type of 
stone you have.  You want to know how many of the stones you have are 
also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are 
letters. Letters are case sensitive, so "a" is considered a different type 
of stone from "A".

*/

// Naive implementation

let numJewelsInStones = (J, S) => {
  // J = types of stones that are jewels
  // S represents stones I have
  // letters in J are distinct and all characters in J & S are letters 
   
  // I: string
  // O: number
  // C: time contraints?
  // E: none, characters are all letters
   
  // declare a num to store the count
  // loop through J and compare to S
    // for any that match S, increment count
  // return count
   
  let count = 0;
  for (var i = 0; i < J.length; i++) {
      for (var j = 0; j < S.length; j++) {
          if (J[i] === S[j]) {
              count++;
          }
      }
  }
  return count;
};
