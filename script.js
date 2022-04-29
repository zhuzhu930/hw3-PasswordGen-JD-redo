// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//My Plan: 
//1. when clicking the button to generate a password, a series of prompts pop up. Store the user inputs into variables. 
const lowercaseQ = prompt("Do you want to include lowercase letters? Please answer Yes or No");
const uppercaseQ = prompt("Do you want to include uppercase letters? Please answer Yes or No");
const numericsQ = prompt("Do you want to include numbers? Please answer Yes or No");
const specialCharQ = prompt("Do you want to include special characters? please answer Yes or No");

//2. use arrays to store lowercase letters, uppercase letters, numerics, and special characters. 

//3. write a function to generate the password. 
// Based on the prompts answers, use .push() methods to construct new arrays that meet the requrement, once new arrays are constructed, generate random password base on the length the user chose. 

//4. Once a password is generated, use starter code writePassword funciton to write it into the textbox. 