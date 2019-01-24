/* Strong password question from Hackerrank
Louise joined a social networking site to stay in touch with her friends. 
The signup page required her to input a name and a password. However, the 
password must be strong. The website considers a password to be strong if 
it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length n in the password field 
but wasn't sure if it was strong. Given the string she typed, 
can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

*/

// PROBLEM IS SPECIAL CHARACTERS WILL RETURN TRUE FOR UPPER AND LOWERCASE
  // Need to do regex and define lowercase and upper
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;
  let security = {
      lowerCase: 0,
      upperCase: 0,
      digit: 0,
      specialChar: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'],
      special: 0
  };
  let length = 0
  if (password.length < 6) {
      length = 6 - password.length;
  }
  for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toLowerCase()) {
          security['lowerCase']++;
      }
      if (password[i] === password[i].toUpperCase()) {
          security['upperCase']++;
      }
      if (typeof password[i] === 'Number') {
          security['digit']++;
      }
      if (security['specialChar'].includes(password[i])) {
          security['special']++;
      }
  }
  if (security['lowerCase'] === 0) {
      count++;
  }
  if (security['upperCase'] === 0) {
      count++;
  }
  if (security['digit'] === 0) {
      count++;
  }
  if (security['special'] === 0) {
      count++;
  }
  if (count < length) {
      return length;
  }
  return count;
  
}