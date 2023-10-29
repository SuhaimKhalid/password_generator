// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Declare vaiables to store Lower Case password options
  var lowercase_input = confirm("Do you want Lowercase character in Password?");

  // Declare vaiables to store Upper Case password options
  var uppercase_input = confirm("Do you want Uppercase character in Password?");

  // Declare vaiables to store Numeric Character password options
  var numeric_input = confirm("Do you want Numeric character in Password?");

  // Declare vaiables to store Special Character password options
  var special_characters_input = confirm("Do you want Special characters in Password?");

  // Delcare a variable to store array of password option
  var password_option =[];

  // only run when lowercase_input is selected true by the user
  if(lowercase_input)
  {
    password_option = password_option.concat(lowerCasedCharacters);
  }

  // only run when Uppercase_input is selected true by the user
  if(uppercase_input)
  {
    password_option = password_option.concat(upperCasedCharacters);
  }

  // only run when Numeric_input is selected true by the user
  if(numeric_input)
  {
    password_option = password_option.concat(numericCharacters);
  }

  // only run when special_character_input is selected true by the user
  if(special_characters_input)
  {
    password_option= password_option.concat(specialCharacters);
  }

  // In the end retuen the new generated array 
    return password_option;
 
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  // Declare a variable to store Length of password from user input
var Pass = prompt("How Long Password Should Be ?");

// Convert string in to number
var password_number = parsent(Pass);

// Check if password is number or not
if(isNaN ==password_number)
{
  alert("Please Enter a Number");
}
else{
  // Password length should be greater than 8
  if(password_number<8)
  {
    alert("Password Must be Greater than 8 Character");
  }
  // Password length should be Les than 128
  else if(password_number>128)
  {
    alert("Password Must be Less than 128");
  }
  else
  {
    // Pass the password length number to random function
    return getRandom(password_number);
  }

}

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);