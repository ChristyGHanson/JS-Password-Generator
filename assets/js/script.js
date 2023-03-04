// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '>', ';', ')', '/', '[', ']', '='];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // document.querySelector("#password") contains a valid CSS selector string.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts happen inside the function called generatePassword()
function generatePassword() {
  let pwLength = prompt("How long do you want your password to be? (Between 8 and 128 characters.)");
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert('Password length must be a number between 8 and 128 characters.');
    return;
  }

  console.log(pwLength);

  let useLower = confirm('Do you want to use lowercase letters?');
  let useUpper = confirm('Do you want to use uppercase letters?');
  let useSpecialChar = confirm('Do you want to use special characters?');
  let useNum = confirm('Do you want to use numbers?');
  console.log(useLower, useUpper, useSpecialChar, useNum); //pass more than one thing into a function.

  // evaluate characters the user wanted to use and make an empty array using those characters.
  // Whatever the user selected, we will use to generate a password. 
  let useChar = [];

  // if the value stored is true, push the value to the empty array.
  // evaluate lowercase
  if (useLower) {
    useChar.push(...lowerCase);
  };

  // evaluate uppercase
  if (useUpper) {
    useChar.push(...upperCase);
  };

  // evaluate special characters
  if (useSpecialChar) {
    useChar.push(...specialCharacter);
  };

  // evaluate numbers
  if (useNum) {
    useChar.push(...numbers);
  };

  // Print the characters in this previously empty array useChar.
  console.log(useChar);

  // User will get an alert if they do not actively choose any of the four characters. 
  if (useLower === false && useUpper === false && useSpecialChar === false && useNum === false) {
    alert('ALERT: You must choose a character type. Click Generate Random Password to try again.');
  }

  // An empty array must be created to hold random password characters. 
  let passwordChar = [];

  // Use a for loop to get a random index value in the array (the user had selected the character types) and store it to a variable. The random characters intended for the randomly generated password are then pushed to an empty array called passwordChar.
  for (let i = 1; i <= pwLength; i++) {
    // code block to be executed
    let randomIndexValue = Math.floor(Math.random() * useChar.length);
    let randomIndexChar = useChar[randomIndexValue];
    passwordChar.push(randomIndexChar);
  }

  // Log the random characters to the console.
  console.log(`Console log random characters here: ${passwordChar}`); // print random password characters to the console

  // Write the results to the DOM.
  let string = JSON.stringify(passwordChar);
  // Make sure the id in the HTML file is referenced here.
  document.querySelector("#password").innerHTML = string;
  return string;
}

generateBtn.addEventListener("click", writePassword);