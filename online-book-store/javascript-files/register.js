let generalForm = document.querySelector("#general_form");
let interestForm = document.querySelector("#interest_form");
let firstName = document.querySelector("#first_name")

let nextButton = document.querySelector("#next");
let backButton = document.querySelector("#back");
let submitButton = document.querySelector("#submit");
let statusBar = document.querySelector(".status_bar")

interestForm.style.display="none";

nextButton.addEventListener("click",()=>{
    console.log("firstButtonCLicked");
    generalForm.style.display="none";
    interestForm.style.display="block";
});

backButton.addEventListener("click",()=>{
    interestForm.style.display="none";
    generalForm.style.display="block";
})
submitButton.addEventListener("click",()=>{
    // console.log(firstName);
    // console.log(firstName.value);
    alert("successfully submitted")
})