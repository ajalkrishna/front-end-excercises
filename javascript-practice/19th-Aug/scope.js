const messageOne = "I'm Global scope"
function understandScope(){
    const messageTwo = "I'm Local scope"
    console.log(messageOne);
    console.log(messageTwo);
}
understandScope()

// console.log(messageOne);
// console.log(messageTwo);