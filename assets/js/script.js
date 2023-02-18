// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generate password has not been defined yet.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts happen inside the function.
function generatePassword() {
  let pwLength = prompt("How long do you want your password to be? (Between 8 and 128 characters.)");
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert('Password must be a number between 8 and 128 characters.');
    return; //return; stops function.
  }

  console.log(pwLength);
  let useLower = confirm('Do you want to use lowercase letters?'); // test for false. then return.
  let useUpper = confirm('Do you want to use uppercase letters?');
  let useSpecialChar = confirm('Do you want to use special characters?');
  let useNum = confirm('Do you want to use numbers?');
  console.log(useLower, useUpper, useSpecialChar, useNum); //pass more than one thing into a function.

  //evaluate characters they chose to add. 
  // Whatever the user selected, we will use to generate a password. Leave array completely empty.
  let useChar = [];
  //evaluate for lowercase. copy this and do it for the rest.
  if (useLower) {
    useChar.push(...lowerCase); //push is a method. do this for the other arrays. ... is the spread operator. push one character at a time into each array "space."
  };


  //evaluate for uppercase.
  if (useUpper) {
    useChar.push(...upperCase);
  };

  //evaluate for special character
  if (useSpecialChar) {
    useChar.push(...specialCharacter);
  };

  // evaluate for numbers.
  if (useNum) {
    useChar.push(...numbers);
  };

  console.log(useChar); // put the array in the array. not what we want.
  // test for false cases using pipes, etc.
  // random number generator. look for useChar. how long character password will be. use a loop.
  // first pwLength, get a random number, use random number to get a character out of the array.
  // randomly get a number x amount of times. Use a for loop and a random number generator.
  let string = '';
  // Do all of it before the return. 
  return string;
}

// Add event listener to generate button
// eventTarget.addEventListener() method of the EventTarget interface.
generateBtn.addEventListener("click", writePassword); //will cause functions to activate above.



// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""



// var displayList = function () {
  // alert("Make: " + cars.make);
// };

// displayList();