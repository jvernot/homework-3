// Assignment Code
var generateBtn = document.querySelector("#generate");



// split will create an array of all of the characters listed
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var allNumbers = '0123456789'.split('');
var allSymbols = '!"#$%&()*+,-./:;=>?@[]^_`{|}~'.split('');

generateBtn.addEventListener("click", function() {
  // length of password -- changed from a string to an integer
  var length = parseInt(prompt("Please choose a length for your password between 8 and 128 characters."));
  // setting conditons so that the password is not less than 8 or longer than 128 characters
  if (length < 8 || length > 128) {
    alert("Nope! Please pick a length between 8 and 128 characters.")
    location.reload();
  } else {
    // confirm whether to include uppercase
  var uppercase = confirm("Should the password contain uppercase letters?");
  // confirm whther to include numbers
  var numbers = confirm("Should the password contain numbers?");
  // confirm whether to include symbols
  var symbols = confirm("Should the password contain any symbols?");
  }
  

  var passwordLength = parseInt(length);
  var includeUppercase = (uppercase);
  console.log(includeUppercase);
  var includeNumbers = (numbers);
  var includeSymbols = (symbols);
  
})





// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);