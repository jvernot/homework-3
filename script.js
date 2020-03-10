
//variables containing all of our possible characters
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var allNumbers = '0123456789';
var allSymbols = '!"#$%&()*+,-./:;=>?@[]^_`{|}~';


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  // length of password -- changed from a string to an integer
  var length = parseInt(prompt("Please choose a length for your password between 8 and 128 characters."));
  // setting conditons so that the password is not less than 8 or longer than 128 characters
  if (length < 8 || length > 128) {
    alert("Nope! Please pick a length between 8 and 128 characters.")
    location.reload();
  } else {
  // confirm whether to include lowercase
  var includeLowercase = confirm("Should the password contain lowercase letters?");
  // confirm whether to include uppercase
  var includeUppercase = confirm("Should the password contain uppercase letters?");
  // confirm whther to include numbers
  var includeNumbers = confirm("Should the password contain numbers?");
  // confirm whether to include symbols
  var includeSymbols = confirm("Should the password contain any symbols?");

  // creating a variable to hold the characters for our password
  var characters = "";
  }
  //check to see if our critera are met and incldue them in the characters variable if they are
  if (includeLowercase) {
    characters += lowerCaseLetters;
  }
  if (includeUppercase) {
    characters += upperCaseLetters;
  }
  if (includeNumbers) {
    characters += allNumbers;
  }
  if (includeSymbols) {
    characters += allSymbols
  }
  if (characters === "") {
    //stop our user and have them start over if they choose no critera for the password
    alert("This wouldn't be a very secure password! Select at least one criteria.")
    location.reload();
  }
  // where we will store the characters for the password
  var password = "";

  for (var i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  
  document.getElementById("password").value = password

}


