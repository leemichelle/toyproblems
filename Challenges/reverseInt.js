// function reverseInt(num) {
//   let sign = Math.sign(num);
//   let str = num.toString().split('').reverse().join('');
//   return parseInt(str) * sign;
// }

var reverse = function(x) {
  let result = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);
  while (x >= 1) {
      x = x / 10; // 32.1; 1.2
      console.log('x', x)
      let temp = Math.floor(x); // 32 1
      console.log('temp', temp)
      let remaining = (x - temp) * 10; 
      console.log('remain', remaining)
      result = (result * 10) + remaining;
      console.log('result', result)
      x = temp;
  }
  // sign === true ? result = Math.floor(result) : result = Math.floor(result);
  return Math.round(result) * sign;
};

console.log(reverse(120)); //rounding error for this number
console.log(reverse(901000)); //rounding error
console.log(1.2 - 1)