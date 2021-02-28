// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var strength = 0;
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var specialCharacters = "!@£$%^&*()";

    var characterOptionsForFinalPassword = "";
    var finalPassword = "";

    var userWantsStrength = confirm("How many characters would you like in your password?")
    var userWantsUpperLetters = confirm("Would you like Upper Case Letters in your password?")
    var userWantsLowerLetters = confirm("Would you like Lower Case Letters in your password?")
    var userWantsNumbers = confirm("Would you like Upper Case Letters in your password?")
    var userWantsSpecialCharacters = confirm("Would you like Lower Case Letters in your password?")

    if (userWantsStrength === true) {
        characterOptionsForFinalPassword += strength;
    }

    if (userWantsUpperLetters === true) {
        characterOptionsForFinalPassword += upperCaseLetters;
    }

    if (userWantsLowerLetters === true) {
        characterOptionsForFinalPassword += lowerCaseLetters;
    }

    if (userWantsNumbers === true) {
        characterOptionsForFinalPassword += numbers;
    }

    if (userWantsSpecialCharacters === true) {
        characterOptionsForFinalPassword += specialCharacters;
    }

    return characterOptionsForFinalPassword

    // return "Congrats new password is here!"
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);