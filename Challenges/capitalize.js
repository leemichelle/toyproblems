function capitalize(str) {
  //split by space
  //iterate through array
    // capitalize first letter and slice remaining
  // return array joined 
  let strArr = str.split(' ');
  let capitalized = [];
  for (let i = 0; i < strArr.length; i++) {
    capitalized.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
  }
  return capitalized.join(' ');
}