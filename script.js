// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var userLength = "";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{\|}~";


function generatePassword() {

    var characterOptionsForFinalPassword = "";
    var finalPassword = "";

    userLength = prompt("How many characters would you like in your password?");

    if (userLength < 8) {
        alert("Password must contains between 8 and 128 characters");
        return "";
    } else if (userLength > 128) {
        alert("Password must contains between 8 and 128 characters");
        return "";
    }


    userLowerLetters = confirm("Would you like Lower Case Letters in your password?");
    if (userLowerLetters === true) {
        characterOptionsForFinalPassword += lowerCaseLetters;
    }

    userUpperLetters = confirm("Would you like Upper Case Letters in your password?");
    if (userUpperLetters === true) {
        characterOptionsForFinalPassword += upperCaseLetters;
    }

    userNumbers = confirm("Would you like Numbers in your password?")
    if (userNumbers === true) {
        characterOptionsForFinalPassword += numbers;
    }

    userSpecialCharacters = confirm("Would you like Special Characters in your password?")
    if (userSpecialCharacters === true) {
        characterOptionsForFinalPassword += specialCharacters;
    }



    return characterOptionsForFinalPassword;

    return "Congrats new password is here!"
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);