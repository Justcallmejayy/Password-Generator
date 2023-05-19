// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var specialCharacters = '`~!@#$%^&*()-_=+[{]}\|;:/?><'.split('');


// Write password to the #password input
                                                                                                 
function writePassword() {
  var passwordLength = prompt('How long do you want your password?');
    if (passwordLength === null) {
        return;
  }
    while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
  passwordLength = prompt('Please enter a number between 8 and 128.');
    if (passwordLength === null) {
        return;
    }
  };
  
  
var wantsUppercase = confirm('Do you want uppercase letters?');
var wantsLowercase = confirm('Do you want lowercase letters?');
var wantsNumbers = confirm('Do you want numeric characters?');
var wantsSpecialCharacters = confirm('Do you want special characters?');
 
var allCharacters = [];

if (wantsUppercase) {
  allCharacters = allCharacters.concat(uppercaseLetters);
}
if (wantsLowercase) {
  allCharacters = allCharacters.concat(lowercaseLetters);
}
if (wantsNumbers) {
  allCharacters = allCharacters.concat(numbers);
}
if (wantsSpecialCharacters) {
  allCharacters = allCharacters.concat(specialCharacters);
}
if (!wantsUppercase && !wantsLowercase && !wantsNumbers && !wantsSpecialCharacters) {
    alert('Please confirm to atleast one of the criteria questions.');
    return;
}

var password = '';
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  password += allCharacters[randomIndex];
 }



//var passwordText = document.querySelector("#password");
var passwordText = document.querySelector("#password");
passwordText.value = password; // fixed variable name for passwordText and removed extra curly braces
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);