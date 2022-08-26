const globalMsg = "I'm the global message!!"

// function declaration - named function
function firstFunction() {
    console.log(globalMsg)
}
// function expression - Anonymous function
const secondFunction = function () {
    console.log("I'm function expression");
}

// arrow functions
const thirdFunction = (message="No Message") => console.log(message);

// function uses rest parameter
const fourthFunction = (name,...details) => {
    console.log(`My name is ${name}`);
    console.log(`My age and country is ${details}`);
}

//function calls
firstFunction();
secondFunction();
thirdFunction("I'm Arrow function");
fourthFunction("James",36,"USA");
