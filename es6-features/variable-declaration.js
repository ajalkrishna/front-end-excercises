let firstNumber = 10;
var secondNumber = 20;
const thirdNumber = 30;
console.log("Before Change");
console.log(firstNumber, secondNumber, thirdNumber);
firstNumber = 40;
secondNumber = 50;
// thirdNumber=70; // can't modify const
console.log("After Change")
console.log(firstNumber, secondNumber, thirdNumber);

// -----------------------------------
var varValue = "I'm Var";
var varValue = "I'm second var"; // if we use var, we can declare it two times
let letValue = "I'm Let";
// let letValue = "I'm second let";
noDeclaration = "I have no declaration" // no need of let or var keyword
function scope() {
    console.log("inside the scope function");
    let letValue = "I'm Let inside scope";
    console.log(letValue + " and " + varValue);
}
scope()
console.log("outside the block");
console.log(varValue);
console.log(letValue);
console.log(noDeclaration);

