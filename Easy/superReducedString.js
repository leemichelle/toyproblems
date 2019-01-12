/* HackerRank problem */

//Nonrecursive way
function superReducedString(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
          arr.splice(i, 2);
          i = -1; // needed to set to -1 instead of 0 because it still increments by 1 once it hits line 7 again.
      }
  }
  if (arr.length === 0) {
      return 'Empty String';
  }
  return arr.join('');
}

//recursive way
function super_reduced_string(s){
  var chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
      if (chars[i] === chars[i+1]) {
          chars.splice(i, 2);
          return super_reduced_string(chars.join(''))
      }
  }
  return s.length > 0 ? s : "Empty String";
}