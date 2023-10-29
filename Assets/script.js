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

  // Check if all user input are false 
  if(lowercase_input ==false && uppercase_input == false && numeric_input==false && special_characters_input==false)
  {
    alert("PLease select at Least 1 character type");
  }

  // Run when at least one user inout is true
 else{

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
 
 
}

// Function for getting a random element from an array
function getRandom(password_length) {

  // Geeting the return value from get password option function and store it in a variable
  var password_array = getPasswordOptions();

// Declare a varable to store random generated string from the password_array 
  var password="";

  // Make a loop to run on every index
  for(var i=0; i<password_length; i++)
  {
    // declare a vaiable to store a random generated number from the password_array
    var random_number = Math.floor(Math.random()*password_array.length);

    // put random number as an index for password_array
    // store and add it to the password sting variable
    password += password_array[random_number];
  } 
  // Return the random generated password to display
   return password;
  
}

// Function to generate password with user input
function generatePassword() {

  // Declare a variable to store Length of password from user input
var Pass = prompt("How Long Password Should Be ?");

// Convert string in to number
var password_number = parseInt(Pass);

// Check if password is number or not
if(isNaN (password_number))
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