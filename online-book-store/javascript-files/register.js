const generalForm = document.querySelector("#general_form");
const interestForm = document.querySelector("#interest_form");
const firstForm = document.querySelector("#first_form")
const secondForm = document.querySelector("#second_form")

const nextButton = document.querySelector("#next");
const backButton = document.querySelector("#back");
const submitButton = document.querySelector("#submit");

const firstName = document.querySelector("#first_name")


interestForm.style.display = "none";

nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstForm.checkValidity()) {
        generalForm.style.display="none";
        interestForm.style.display="block";
    }
    else {
        firstForm.reportValidity()
    }
});

backButton.addEventListener("click",()=>{
    interestForm.style.display="none";
    generalForm.style.display="block";
})


submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(secondForm.checkValidity()){
        alert("successfully submitted")
    }
    else{
        secondForm.reportValidity()
    }
})
