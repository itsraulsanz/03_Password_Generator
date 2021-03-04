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
    } else {
        userWantsLowerLetters;
    }


    var userWantsLowerLetters = confirm("Would you like Lower Case Letters in your password?")
    var userWantsNumbers = confirm("Would you like Upper Case Letters in your password?")
    var userWantsSpecialCharacters = confirm("Would you like Lower Case Letters in your password?")

    /*

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
*/

    return characterOptionsForFinalPassword

    // return "Congrats new password is here!"
}



/*
//var characterOptionsForFinalPassword = "";
//var finalPassword = "";

function userLength() {

    passLength = prompt("How many characters would you like in your password? (Between 8 and 128 characters)");

    if (passLength < 8) {
        alert("Password must contains between 8 and 128 characters");
        userLength;
    } else if (passLength > 128) {
        alert("Password must contains between 8 and 128 characters");
        userLength;
    }
    return passLength;
}

//var userWantsUpperLetters = confirm("Would you like Upper Case Letters in your password?")
//var userWantsLowerLetters = confirm("Would you like Lower Case Letters in your password?")
//var userWantsNumbers = confirm("Would you like Upper Case Letters in your password?")
//var userWantsSpecialCharacters = confirm("Would you like Lower Case Letters in your password?")



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

//return characterOptionsForFinalPassword

// return "Congrats new password is here!"

*/


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);