//variable declaration

var num1 = 5;
let num2 = 6;
const num3 = 10; // number
const status = false; //boolean
const string = "Helllo world"; //string

//Arithemetic Operations
let sum = num1 + num2;
num1++ // incremented by  one
let quotient = num1 / num2;
let product = num3 * num1;
let reminder = quotient % product;

// String Operation

let firstName = "John";
let lastName = "Mathews B"
let fullName = firstName + " " + lastName;
console.log(fullName);


// to display data in the webpage

let firstNameObj = document.querySelector(".full_name");
firstNameObj.textContent = fullName;


