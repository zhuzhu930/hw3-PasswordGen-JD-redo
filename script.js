// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// let lowercaseQ;
// let uppercaseQ;
// let numericsQ;
// let specialCharQ;
// let lengthQ;
const lowercaseQ = prompt("Do you want to include lowercase letters? Please answer Yes or No.");
const uppercaseQ = prompt("Do you want to include uppercase letters? Please answer Yes or No.");
const numericsQ = prompt("Do you want to include numbers? Please answer Yes or No.");
const specialCharQ = prompt("Do you want to include special characters? Please answer Yes or No.");
const lengthQ = parseInt(prompt("How long do you want your password to be? Please enter a number between 8 and 128 characters.")); //converting string to a number. 
const passwordString = [];



// const lowercaseQ = prompt("Do you want to include lowercase letters? Please answer Yes or No.");
// const uppercaseQ = prompt("Do you want to include uppercase letters? Please answer Yes or No.");
// const numericsQ = prompt("Do you want to include numbers? Please answer Yes or No.");
// const specialCharQ = prompt("Do you want to include special characters? Please answer Yes or No.");
// const lengthQ = parseInt(prompt("How long do you want your password to be? Please enter a number between 8 and 128 characters.")); 


//My Plan: 


//2. use arrays to store lowercase letters, uppercase letters, numerics, and special characters. 

const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];
const specialCharArray = ["~","!","@","#","$","%","^","&","*"];

//3. Concatenate arrays based on user input: 
//all options chosen
const allArray = lowerArray.concat(upperArray).concat(numberArray).concat(specialCharArray); //condition done
//only chosen 2 options
const lowerUpper = lowerArray.concat(upperArray); //condition done
const lowerNum = lowerArray.concat(numberArray); //condition done
const lowerSpecial = lowerArray.concat(specialCharArray); //condition done
const upperNum = upperArray.concat(numberArray); // condition done
const upperSpecial = upperArray.concat(specialCharArray) // condition done
const numSpecial = numberArray.concat(specialCharArray);
// 3 options chosen
const lowerUpperNum = lowerArray.concat(upperArray).concat(numberArray);
const lowerUpperSpecial = lowerArray.concat(upperArray).concat(specialCharArray);
const lowerNumSpecial = lowerArray.concat(numberArray).concat(specialCharArray);
const upperNumSpecial = upperArray.concat(numberArray).concat(specialCharArray);

//4. generate random string --- Testing generating a random string: 
//Adding conditions

function generate() {
//For allArray
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() ==="yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ; i++) {
    const randomAllCharacter = allArray[Math.floor(Math.random() * allArray.length)];
    passwordString.push(randomAllCharacter);
  }
} 
//For 2 options chosen
//lowerUpper
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomLUCharacter = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
    passwordString.push(randomLUCharacter);
  }
} 
//lowerNum
if (lowercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() ==="yes") {
  for (let i = 0; i <= lengthQ -1; i++) {
    const randomLNCharacter = lowerNum[Math.floor(Math.random() * lowerNum.length)];
    passwordString.push(randomLNCharacter);
  }
}
//lowerSpecial
if (lowercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomLSCharacter = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
    passwordString.push(randomLSCharacter);
  }
}
//upperNum
if (uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomUNCharacter = upperNum[Math.floor(Math.random() * upperNum.length)];
    passwordString.push(randomUNCharacter);
  }
}
//upperSpecial
if (uppercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomUSCharacter = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
    passwordString.push(randomUSCharacter);
  }
}
//numSpecial
if (numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomNSCharacter = numSpecial[Math.floor(Math.random() * numSpecial.length)];
    passwordString.push(randomNSCharacter);
  }
}
//For 3 options chosen: 
//lowerUpperNum
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomLUNCharacter = lowerUpperNum[Math.floor(Math.random() * lowerUpperNum.length)];
    passwordString.push(randomLUNCharacter);
  }
} 
//lowerUpperSpecial
if (lowercaseQ.toLowerCase() === "yes" && uppercaseQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomLUSCharacter = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
    passwordString.push(randomLUSCharacter);
  }
} 
//lowerNumSpecial
if (lowercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomLNSCharacter = lowerNumSpecial[Math.floor(Math.random() * lowerNumSpecial.length)];
    passwordString.push(randomLNSCharacter);
  }
} 
//upperNumSpecial
if (uppercaseQ.toLowerCase() === "yes" && numericsQ.toLowerCase() === "yes" && specialCharQ.toLowerCase() === "yes") {
  for (let i = 0; i <= lengthQ - 1; i++) {
    const randomUNSCharacter = upperNumSpecial[Math.floor(Math.random() * upperNumSpecial.length)];
    passwordString.push(randomUNSCharacter);
  }
} 
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  generate();
  passwordText.innerHTML = passwordString.join("");
});

//reference
// for (let i = 0; i <= lengthQ; i++) {
//   const randomCharacter = lowerArray[Math.floor(Math.random() * lowerArray.length)];
//   passwordString.push(randomCharacter);
// }
//passwordText.innerHTML = passwordString.join("");




//4. write a function to generate the password. 
// Based on the prompts answers, use .push() methods to construct new arrays that meet the requrement, once new arrays are constructed, generate random password base on the length the user chose. 

// function generatePasswor() {
//   //setting conditions, if all, 2 or 3 options chosen
// }
 
//4. Once a password is generated, use starter code writePassword funciton to write it into the textbox. 

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }