const insert = document.querySelector("#confirm_insert");
const insertBookForm = document.querySelector("#insert_form");
const author = document.querySelector("#author");
const title = document.querySelector("#book_name");
const price = document.querySelector("#price");
const review = document.querySelector("#review");

const titleError = document.querySelector("#title_error");
const authorError = document.querySelector("#author_error");
const priceError = document.querySelector("#price_error");
const reviewError = document.querySelector("#review_error");


insert.addEventListener("click", (event) => {
    event.preventDefault();
    if (insertBookForm.checkValidity()) {
        alert("form valid")
    }
    else {
        if (title.validity.valueMissing) {
            let message = "Title is Mandatory"
            showErrorMessage(titleError,message);
        }
        if(author.validity.valueMissing){
            let message="Author name cannot be empty";
            showErrorMessage(authorError,message);
        }
        if(author.validity.tooShort){
            let message="Author name is too short";
            showErrorMessage(authorError,message);
        }
        if(price.validity.valueMissing){
            let message="Price Cannot be empty!!";
            showErrorMessage(priceError,message);
        }
        if(price.validity.rangeUnderflow){
            let message="Minimum Price is 10";
            showErrorMessage(priceError,message);
        }
        if(review.validity.valueMissing){
            let message="Please Provide some description";
            showErrorMessage(reviewError,message);
        }
    }
});
let showErrorMessage=(element,message)=>{
    element.style.display = "block";
    element.textContent = message;
    setTimeout(()=>{
        // element.style.display = "none";
        element.textContent = "";
    },3000)
}
