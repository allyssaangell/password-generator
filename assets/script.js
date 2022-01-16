// Assignment code here
let characters = "";
let randomStr = "";

let generatePassword = function () {
  //password length
  var chooseLength = window.prompt(
    "Choose a password length between 8 and 128 characters."
  );
  console.log(chooseLength);
  while (chooseLength < 8 || chooseLength > 128 || isNaN(chooseLength)) {
    window.alert("Invalid choice. Choose a password length between 8 and 128.");
    chooseLength = window.prompt(
      "Choose a password length between 8 and 128 characters."
    );
    console.log(chooseLength);
  }

  //confirm whether or not to include lowercase, and/or special characters
  var confirmLowercase = window.confirm(
    "Would you like to include lowercase text?"
  );
  if (confirmLowercase) {
    console.log("include lowercase");
    characters = characters.concat("abcdefghijklmnopqrstuvwxyz");
  } else {
    console.log("don't include");
  }

  //confirm uppercase
  var confirmUppercase = window.confirm(
    "Would you like to include uppercase text?"
  );
  if (confirmUppercase) {
    console.log("include uppercase");
    characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else {
    console.log("don't include uppercase");
  }

  //confirm numeric
  var confirmNumeric = window.confirm(
    "Would you like to include numeric characters?"
  );
  if (confirmNumeric) {
    console.log("include numeric");
    characters = characters.concat("0123456789");
  } else {
    console.log("don't include numeric");
  }

  //confirm special characters
  var confirmSpecialChar = window.confirm(
    "Would you like to include special characters?"
  );
  if (confirmSpecialChar) {
    console.log("include special characters");
    characters = characters.concat("~`!@#$%^&*()-_=+[{]}/?.>,<");
  } else {
    console.log("don't include special characters");
  }

  if (
    confirmLowercase === false &&
    confirmUppercase === false &&
    confirmNumeric === false &&
    confirmSpecialChar === false
  ) {
    window.alert("No valid character type was chosen, please try again.");
    console.log("No valid character type was chosen");
    return null;
  }

  for (let i = 0; i < chooseLength; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randomStr += characters.slice(randomNum, randomNum + 1);
  }
  console.log(randomStr);
  window.alert(randomStr);
  return randomStr;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
