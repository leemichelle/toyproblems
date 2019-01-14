/* HackerRank Problem - Sherlock and Valid String https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem */

// Problem asks to "print" Yes or No, so that's why there's console.logs but still throws errors for some reason..
function isValid(s) {
  let incrementCounter = 0;
  let counter = {};
  for (let i = 0; i < s.length; i++) {
      counter[s[i]] ? counter[s[i]]++ : counter[s[i]] = 1;
  } 
  let valuesAsArr = Object.values(counter).sort((a, b) => { return a - b }); //[1, 1, 2, 2]
  for (let i = 0; i < valuesAsArr.length; i++) {
      let nextValue = valuesAsArr[i + 1]; //1
      let prevValue = valuesAsArr[i]; //1
      let difference = nextValue - prevValue; //0
      if (nextValue > prevValue) {
          incrementCounter += difference; // incrementCounter: 
          valuesAsArr[i + 1] = valuesAsArr[i];
      }
      if (incrementCounter > 1) {
        return console.log("NO");
      }
  }
  return console.log("YES");
}