// generatePassword function code here
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var confirmCharactors = [];
  var numberOfCharacters, confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialCha, confirmCharactors;

  numberOfCharacters = prompt("Choose password length between 8 and 128 characters.");


  // Conformation about number of characters, lowercase, uppercase, numbers and special characters
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("It is not a number. Please enter a valid number from 8 to 128.");
  } else {
    alert("Your new password will be " + numberOfCharacters + " charactors.");
  }

  confirmLowercase = window.confirm("Do you want add lowercase characters to your Password?");
  if (confirmLowercase) {
    alert("Lowercase characters will be used for your password");
  }
  else {
    alert("Lowercase characters will Not be used for your password");
  }

  confirmUppercase = window.confirm("Do you want add uppercase characters to your Password?");
  if (confirmUppercase) {
    alert("Uppercase characters will be used for your password");
  }
  else {
    alert("Uppercase characters will Not be used for your password");
  }

  confirmNumbers = window.confirm("Do you want add numbers to your Password?");
  if (confirmNumbers) {
    alert("Numbers will be used for your password");
  }
  else {
    alert("Numbers will Not be used for your password");
  }

  confirmSpecialCha = window.confirm("Do you want add special characters to your Password?");
  if (confirmSpecialCha) {
    alert("Special characters will be used for your password");
  }
  else {
    alert("Special characters will Not be used for your password");
  }

  if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialCha === false) {
    return "Please select at least one character type.";
  }

  // Select confrim characters
  if (confirmLowercase) {
    confirmCharactors = confirmCharactors.concat(lowercaseCharacters)
  }
  if (confirmUppercase) {
    confirmCharactors = confirmCharactors.concat(uppercaseCharacters)
  }
  if (confirmNumbers) {
    confirmCharactors = confirmCharactors.concat(numberCharacters)
  }
  if (confirmSpecialCha) {
    confirmCharactors = confirmCharactors.concat(specialCharacters)
  }

  // Generate Password code
  var generatePassword = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    var range = [Math.floor(Math.random() * confirmCharactors.length)];
    generatePassword = generatePassword + confirmCharactors[range];
  }

  return generatePassword;
}

var passwordText;
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

function writePassword() {
  var password = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // copyPassword function code here
function copyPassword(){
  passwordText = document.getElementById("password");
  passwordText.select();
  document.execCommand("copy");
}

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
