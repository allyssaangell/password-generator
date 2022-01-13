// Assignment code here
document.getElementById("generate").addEventListener("click", function () {
  //password length
  var chooseLength = window.prompt(
    "Choose a password length between 8 characters and no more than 128"
  );

  if (chooseLength >= 8 && chooseLength <= 128) {
    window.alert("Thanks!");
    console.log(chooseLength);
  } else {
    window.alert("Invalid choice. Choose a password length between 8 and 128");
    var chooseLengthAgain = window.prompt(
      "Choose a password length between 8 characters and no more than 128"
    );
    if (chooseLengthAgain >= 8 && chooseLengthAgain <= 128) {
      window.alert("Thanks!");
      console.log(chooseLengthAgain);
    }
  }

  //confirm whether or not to include lowercase, and/or special characters
  var confirmLowercase = window.confirm(
    "Would you like to include lowercase text?"
  );
  if (confirmLowercase) {
    console.log("include lowercase");
  } else {
    console.log("don't include");
  }

  //confirm uppercase
  var confirmUppercase = window.confirm(
    "Would you like to include uppercase text?"
  );
  if (confirmUppercase) {
    console.log("include uppercase");
  } else {
    console.log("don't include uppercase");
  }

  //confirm numeric
  var confirmNumeric = window.confirm(
    "Would you like to include numeric characters?"
  );
  if (confirmNumeric) {
    console.log("include numeric");
  } else {
    console.log("don't include numeric");
  }

  //confirm special characters
  var confirmSpecialChar = window.confirm(
    "Would you like to include special characters?"
  );
  if (confirmSpecialChar) {
    console.log("include special characters");
  } else {
    console.log("don't include special characters");
  }

  if (
    confirmLowercase === true ||
    confirmUppercase === true ||
    confirmNumeric === true ||
    confirmSpecialChar === true
  ) {
    //do something?
    console.log("At least one valid option was chosen");
  } else {
    window.alert("No valid character type was chosen, please try again");
    console.log("No valid character type was chosen");
  }
});

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
