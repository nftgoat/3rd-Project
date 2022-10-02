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
  var length = prompt ('Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.');

//Check length criteria
  var passwordInvalid = true;
  while (passwordInvalid) {
      if (length > 7 && length < 129){
      {  passwordInvalid = false;} 
      }else {
        alert('Your input was invalid. Try again.');
        length = prompt('Choose the length of your password.\nMust be at least 8 characters.\nMust not exceed 128 characters.');
    } 
}