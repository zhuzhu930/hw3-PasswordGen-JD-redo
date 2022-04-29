// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//My Plan: 
//1. when clicking the button to generate a password, a series of prompts pop up. Store the user inputs into variables. 
const lowercaseQ = prompt("Do you want to include lowercase letters? Please answer Yes or No.");
const uppercaseQ = prompt("Do you want to include uppercase letters? Please answer Yes or No.");
const numericsQ = prompt("Do you want to include numbers? Please answer Yes or No.");
const specialCharQ = prompt("Do you want to include special characters? Please answer Yes or No.");
const lengthQ = prompt("How long do you want your password to be? Please enter a number between 8 and 128 characters.");

//2. use arrays to store lowercase letters, uppercase letters, numerics, and special characters. 

const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];
const specialCharArray = ["~","!","@","#","$","%","^","&","*"];

//3. Concatenate arrays based on user input: 
//all options chosen
const allArray = lowerArray.concat(upperArray).concat(numberArray).concat(specialCharArray);
// function getRandom(allArray){
//   return Math.random(allArray)
// }
// console.log(getRandom);
//only chosen 2 options
const lowerUpper = lowerArray.concat(upperArray);
const lowerNum = lowerArray.concat(numberArray);
const lowerSpecial = lowerArray.concat(specialCharArray);
const upperNum = upperArray.concat(numberArray);
const upperSpecial = upperArray.concat(specialCharArray)
const numSpecial = numberArray.concat(specialCharArray);
// 3 options chosen
const lowerUpperNum = lowerArray.concat(upperArray).concat(numberArray);
const lowerUpperSpecial = lowerArray.concat(upperArray).concat(specialCharArray);
const lowerNumSpecial = lowerArray.concat(numberArray).concat(specialCharArray);
const upperNumSpecial = upperArray.concat(numberArray).concat(specialCharArray);

//4. generate random string --- Testing generating a random string: 
const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const passwordString = [];
for (let i = 0; i < 10; i++) {
  const randomCharacter = lowerArray[Math.floor(Math.random() * lowerArray.length)];
  passwordString.push(randomCharacter);
}
console.log(passwordString.join(""));



//4. write a function to generate the password. 
// Based on the prompts answers, use .push() methods to construct new arrays that meet the requrement, once new arrays are constructed, generate random password base on the length the user chose. 

function generatePasswor() {
  //setting conditions, if all, 2 or 3 options chosen
}
 
//4. Once a password is generated, use starter code writePassword funciton to write it into the textbox. 

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }