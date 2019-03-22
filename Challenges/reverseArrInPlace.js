function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  while(leftIndex < rightIndex) {
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return arrayOfChars;
}

console.log(reverse(['a', 'b', 'c', 'd']))