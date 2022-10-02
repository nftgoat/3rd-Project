// Assignment code here
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generatePassword function
  alert ("Throughout these pop-ups, Please fill out your password criteria.")

//Define length criteria
  var length = prompt ("Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.");

//Check length criteria
  var passwordInvalid = true;
  while (passwordInvalid) {
      if (length > 7 && length < 129){
      {  passwordInvalid = false;} 
      }else {
        alert("Your input was invalid. Try again.");
        length = prompt("Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.");
    } 
}
// change value of length to a number
var numLength = Number(length);

alert("You chose: " + length);

 // check choices for character options
 var lowerCase = confirm("Do you want your password to include lower case letters?");
 var upperCase = confirm("Do you want your password to include upper case letters?");
 var numeric = confirm("Do you want your password to include numbers?");
 var specialCharacter = confirm("Do you want your password to include special characters? \nEx: !, $, #, ?, @");
 alert("You chose the following options: \n Lower Case Letters: " + lowerCase + "\n Upper Case Letters: " + upperCase + "\n Numbers: " + numeric + "\n Special Characters: " + specialCharacter);