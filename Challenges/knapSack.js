function knapSack1(array, weight) {
  let knapSack = new Array(weight + 1);
  for (let i = 0; i < knapSack.length; i++) {
    let currentMax = 0;
    for (let x = 0; x < array.length; x++) {
      if (array[x].weight <= i) {
        let currtemp = array[x].value + knapSack[i - array[x].weight]; 
        currentMax = Math.max(currentMax, currtemp);
        console.log(currentMax, currtemp)
      } 
     
      knapSack[i] = currentMax;
    }
  }
  console.log(knapSack);
  return knapSack[weight];
}
console.log(knapSack1([
  { weight: 2, value: 15 },
  { weight: 3, value: 90 },
  { weight: 7, value: 160 },
], 20))