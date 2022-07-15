// Assignment code here
function generatePassword() {
  var passwordLength = prompt("How long of a password from 8 to 128 characters? ");
  // Generates an array for charcterTypes
  var characterTypes = prompt("What character types would you like to include? Options: lowercase, uppercase, numeric, and/or special-characters. (Seperate with spaces)").split(" ");
  
  var number = passwordLength/characterTypes.length;
  console.log(number);
  
  // removes the decimal, this value is how many every element but the last will have of given character type
  var removedDecimal = Math.trunc(number);
  console.log(removedDecimal);
  // the array location of the last element
  const lastItem = characterTypes.length - 1;
  // sets the array equal to everything but the last element of the array characterTypes
  const initial = characterTypes.slice(0, lastItem);
  // sets a number that will be added to the last element of the array characterTypes
  var extra = passwordLength - (initial.length * removedDecimal);
  const listArr = [];
  var newLowerCase;
  var newUpperCase;
  var newNumeric;
  var newSpecialChars;
  var newLastItem;

  if (characterTypes.length == 1){
    if (characterTypes.indexOf("lowercase") !== -1){
      newLowerCase = getMultipleRandom(lowerCase, passwordLength);
    }else{
      newLowerCase = [];
    }
    if (characterTypes.indexOf("uppercase") !== -1){
      newUpperCase = getMultipleRandom(upperCase, passwordLength);
    }else{
      newUpperCase = [];
    }
    if (characterTypes.indexOf("numeric") !== -1){
      newNumeric = getMultipleRandom(numeric, passwordLength);
    }else{
      newNumeric = [];
    }
    if (characterTypes.indexOf("special-characters") !== -1){
      newSpecialChars = getMultipleRandom(specialChars, passwordLength);
    }else{
      newSpecialChars = [];
    }
  }else{
    // for multiple character seclections
    if (initial.indexOf("lowercase") !== -1){
      newLowerCase = getMultipleRandom(lowerCase, removedDecimal);
      listArr.push(newLowerCase);
      console.log(newLowerCase);
    }else{
      newLowerCase = [];
    }
    if (initial.indexOf("uppercase") !== -1){
      newUpperCase = getMultipleRandom(upperCase, removedDecimal);
      listArr.push(newUpperCase);
    }else{
      newUpperCase = [];
    }
    if (initial.indexOf("numeric") !== -1){
      newNumeric = getMultipleRandom(numeric, removedDecimal);
      listArr.push(newNumeric);
    }else{
      newNumeric = [];
    }
    if (initial.indexOf("special-characters") !== -1){
      newSpecialChars = getMultipleRandom(specialChars, removedDecimal);
      listArr.push(newSpecialChars);

    }else{
      newSpecialChars = [];
    }

    // for lastItem character seclections
    if (characterTypes[lastItem].indexOf("lowercase") !== -1){
      newLastItem = getMultipleRandom(lowerCase, extra);
      listArr.push(newLastItem);

    }else{
      newLastItem = [];
    }
    if (characterTypes[lastItem].indexOf("uppercase") !== -1){
      console.log("yes");
      newLastItem = getMultipleRandom(upperCase, extra);
      listArr.push(newLastItem);
    }else{
      newLastItem = [];
    }
    if (characterTypes[lastItem].indexOf("numeric") !== -1){
      newLastItem = getMultipleRandom(numeric, extra);
      listArr.push(newLastItem);
      console.log(newLastItem);
    }else{
      newLastItem = [];
    }
    if (characterTypes[lastItem].indexOf("special-characters") !== -1){
      newLastItem = getMultipleRandom(specialChars, extra);
      listArr.push(newLastItem);

    }else{
      newLastItem = [];
    }
    console.log(listArr);
  }

let test = [];

 for(i = 0; i < listArr.length; i++) {
  test.push(listArr[i].join(""));
  console.log("for loop");
}

let joinTest = test.join("");
console.log(joinTest);


let splitTest = joinTest.split("");
console.log(splitTest);

let arrayPassword;

if (characterTypes.length == 1){
  let NewSplitTest = [...splitTest, ...newLowerCase, ...newUpperCase, ...newNumeric, ...newSpecialChars];

  arrayPassword = [...NewSplitTest].sort((a, b) => 0.5 - Math.random());
}else{
  arrayPassword = [...splitTest].sort((a, b) => 0.5 - Math.random());
  console.log(arrayPassword);
}

  var startPassword = arrayPassword.join("");
  console.log(startPassword);
  var password = startPassword;

  console.log(password);
  return password;
 }
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 var lowerCase = ("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz").split("");
 var upperCase = lowerCase.map(element => {
  return element.toUpperCase();
 });
 var numeric = ("123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890").split("");
 var specialChars = ("!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*!@#$%^&*").split("");
 function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
 }
 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);