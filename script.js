// Assignment Code
var generateBtn = document.querySelector("#generate");


// length of password
var length = prompt("Please choose a length for your password between 8 and 128 characters.");

var uppercase = confirm("Should the password contain uppercase letters?");

var numbers = confirm("Should the password contain numbers?");

var symbols = confirm("Should the password contain any symbols?");

console.log(length);
console.log(uppercase);
console.log(numbers);
console.log(symbols);

generateBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var passwordLength = parseInt(length);
  var includeUppercase = (uppercase);
  var includeNumbers = (numbers);
  var includeSymbols = (symbols);

  // declaring a password variable calling on the above elements
  var password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);
})






// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);