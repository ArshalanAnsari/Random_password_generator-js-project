const inputBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialChar = "!@#$%^&*/.-<>;";

const charAll = upperCase + lowerCase + number + specialChar;


function createPassword() {
    let  password = "";

    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += specialChar[Math.floor(Math.random()*specialChar.length)]

    while(length > password.length){
      password += charAll[Math.floor(Math.random()*charAll.length)]

    }
    console.log(password)
    inputBox.value = password;
}


function copyPassword(){
  inputBox.select();
  document.execCommand("copy")
}