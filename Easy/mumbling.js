/* codewars problem - mumbling */

function accum(s) {
	let result = '';
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-';
  }
  return result.substring(0, result.length - 1);
}