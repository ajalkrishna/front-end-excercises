
const isValid=true;

console.log("Message before promise");
const firstPromise = new Promise((resolve, reject) => {
    if(isValid) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
})
console.log(firstPromise);
console.log("Message after promise");

firstPromise
    .then(()=>console.log("promise resolved"))
    .catch(()=>console.log("promise rejected"))

console.log("Message after consumption");

