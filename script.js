// Assignment Code
var generateBtn = document.querySelector("#generate");


// length of password
var length = prompt("Please choose a length for your password between 8 and 128 characters.");
// confirm whether to include uppercase
var uppercase = confirm("Should the password contain uppercase letters?");
// confirm whther to include numbers
var numbers = confirm("Should the password contain numbers?");
// confirm whether to include symbols
var symbols = confirm("Should the password contain any symbols?");

var password = document.getElementById('#password');

// split will create an array of all of the characters listed
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var allNumbers = '0123456789'.split('');
var allSymbols = '!"#$%&()*+,-./:;=>?@[]^_`{|}~'.split('');

generateBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var passwordLength = parseInt(length);
  var includeUppercase = (uppercase);
  var includeNumbers = (numbers);
  var includeSymbols = (symbols);
  // declaring a password variable calling on the above elements
  var password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);
  password.value = password
})

function generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols) {
  // sets the password character to default to just lowercase letters
  var characters = lowerCaseLetters;
  // if other conditions are met their available characters are added to the variable
  if (includeUppercase) characters = characters.concat(upperCaseLetters)
  if (includeNumbers) characters = characters.concat(allNumbers)
  if (includeSymbols) characters = characters.concat(allSymbols)

  // loops through all of the possible characters until it meets the length specified
  var passwordCharacters = [];
  for (var i = 0; i < length; i++) {
  
  var letterIndex = characters[Math.floor(Math.random * passwordLength)]
  // .push adds the randomly generated letter from the index above to the passwordCharacters array
  passwordCharacters.push(letterIndex)
  }
  // as the function loops through this will join all of the characters in a string
  return passwordCharacters.join('')

}









// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);