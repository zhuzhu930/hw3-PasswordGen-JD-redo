//1. Define variables
// Connecting the DOM
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// Setting up prompts and store them in variables. 
const lowercaseQ = prompt("Do you want to include lowercase letters? Please answer Yes or No.");
const uppercaseQ = prompt("Do you want to include uppercase letters? Please answer Yes or No.");
const numericsQ = prompt("Do you want to include numbers? Please answer Yes or No.");
const specialCharQ = prompt("Do you want to include special characters? Please answer Yes or No.");
const lengthQ = parseInt(prompt("How long do you want your password to be? Please enter a number between 8 and 128 characters.")); //converting string to a number. 
//Setting an empty array for the password stirng. 
const passwordString = [];


//2. Use arrays to store lowercase letters, uppercase letters, numerics, and special characters. 

const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];
const specialCharArray = ["~","!","@","#","$","%","^","&","*"];

//3. Concatenate arrays based on user's input: 
//all options chosen
const allArray = lowerArray.concat(upperArray).concat(numberArray).concat(specialCharArray); //condition done
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

//4. Set a function to generate random string, I tested the conditions first before wrapping the entire condition with a function. 

function generate() {
//Adding conditions
//For allArray
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() ==="yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomAllCharacter = allArray[Math.floor(Math.random() * allArray.length)];
    passwordString.push(randomAllCharacter);
  }
} 
//For 2 options chosen
//lowerUpper
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLUCharacter = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
    passwordString.push(randomLUCharacter);
  }
} 
//lowerNum
if (lowercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() ==="yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLNCharacter = lowerNum[Math.floor(Math.random() * lowerNum.length )];
    passwordString.push(randomLNCharacter);
  }
}
//lowerSpecial
if (lowercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLSCharacter = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
    passwordString.push(randomLSCharacter);
  }
}
//upperNum
if (uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomUNCharacter = upperNum[Math.floor(Math.random() * upperNum.length)];
    passwordString.push(randomUNCharacter);
  }
}
//upperSpecial
if (uppercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomUSCharacter = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
    passwordString.push(randomUSCharacter);
  }
}
//numSpecial
if (numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomNSCharacter = numSpecial[Math.floor(Math.random() * numSpecial.length)];
    passwordString.push(randomNSCharacter);
  }
}
//For 3 options chosen: 
//lowerUpperNum
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLUNCharacter = lowerUpperNum[Math.floor(Math.random() * lowerUpperNum.length)];
    passwordString.push(randomLUNCharacter);
  }
} 
//lowerUpperSpecial
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLUSCharacter = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
    passwordString.push(randomLUSCharacter);
  }
} 
//lowerNumSpecial
if (lowercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomLNSCharacter = lowerNumSpecial[Math.floor(Math.random() * lowerNumSpecial.length)];
    passwordString.push(randomLNSCharacter);
  }
} 
//upperNumSpecial
if (uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i < lengthQ; i++) {
    const randomUNSCharacter = upperNumSpecial[Math.floor(Math.random() * upperNumSpecial.length)];
    passwordString.push(randomUNSCharacter);
  }
} 
}

//5. Adding an event listener to the generate button.
generateBtn.addEventListener("click", () => {
  //call generate function. 
  generate();
  //writing the generated string into HTML
  passwordText.innerHTML = passwordString.join("");
});