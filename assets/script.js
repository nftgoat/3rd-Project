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

function generatePassword(){
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
alert("You chose: " + length);

 // check choices for character options

 var lowerCase = confirm("Do you want your password to include lower case letters?");
 var upperCase = confirm("Do you want your password to include upper case letters?");
 var numeric = confirm("Do you want your password to include numbers?");
 var specialCharacter = confirm("Do you want your password to include special characters? \nEx: !, $, #, ?, @");
 alert("You chose the following options: \n Lower Case Letters: " + lowerCase + "\n Upper Case Letters: " + upperCase + "\n Numbers: " + numeric + "\n Special Characters: " + specialCharacter);

 //make sure at least 1 item is selected

 var passInvalid = true;
  while(passInvalid) {
    if (lowerCase == true  || upperCase == true || numeric == true || specialCharacter == true){
        passInvalid = false;
    } else {
        alert("Your input was invalid. \nOne character option must be selected. \nPlease try again.");
        lowerCase = confirm("Do you want your password to include lower case letters?");
        upperCase = confirm("Do you want your password to include upper case letters?");
        numeric = confirm("Do you want your password to include numbers?");
        specialCharacter = confirm("Do you want your password to include special characters? \nEx: !, $, #, ?, @");
        alert("You chose the following options: \n Lower Case Letters: " + lowerCase + "\n Upper Case Letters: " + upperCase + "\n Numbers: " + numeric + "\n Special Characters: " + specialCharacter);
    }
  }
  //what different characters consist of

  if (specialCharacter) {
    specialCharacter = '?!.@$#-_,:;<>%&*()=+';
  } else {
    specialCharacter = '';
  }
  
  if (numeric) {
    numeric = '123456789';
  } else {
    numeric = '';
  }
  
  if (upperCase) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    upperCase = '';
  }
  
  if (lowerCase) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  } else {
    lowerCase = '';
  }

  //adds everything together

  var completePass = specialCharacter.concat(numeric, upperCase, lowerCase);

  var number = '';
    for (var i = 0; i < length; i++) {
    number += completePass[Math.floor(Math.random() * completePass.length)];
  } 
  return number;
  }