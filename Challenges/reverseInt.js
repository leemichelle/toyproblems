function reverseInt(num) {
  let sign = Math.sign(num);
  let str = num.toString().split('').reverse().join('');
  return parseInt(str) * sign;
}