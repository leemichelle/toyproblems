//I: 2 arrays with int
//O: array with num representing exchange amount
//C: none
//E: none

/*
Examples:
Alice = [1, 1] 
      Total = 2 - 1 
Bob = [2, 2] = 4
      Total = 4 - 2
Answer = Alice 1, Bob 2 ==> [1, 2] [2, 1]

Input: A = [1,2,5], B = [2,4]
Output: [5,4]

I: [2], [1,3]
O: [2,3]
*/

// very slow runtime
var fairCandySwap = function(A, B) {
  let AliceTotal = A.reduce((sum, num) => sum + num, 0);
  let BobTotal = B.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i < A.length; i++) {
    for (let x = 0; x < B.length; x++) {
      let ATotal = AliceTotal;
      let BTotal = BobTotal;
      BTotal = BobTotal - B[x] + A[i];
      ATotal = ATotal - A[i] + B[x];
      if (BTotal === ATotal) {
        return [A[i], B[x]];
      }
    }
  }
};
