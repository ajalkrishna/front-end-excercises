
const bookSpace = document.querySelector("#book-space");
const topBooks = [];

fetch('https://legacy--api.herokuapp.com/api/v1/books')
    .then(res => res.json())
    .then(res => {
        topBooks.push(res);
        console.log(topBooks);
        // displayBooks()
    })

// let displayBooks=()=>{
//     for (book of topBooks) {
//         bookSpace.innerHTML = `
//         <div class="col">
//         <div class="card">
//             <div class="card-body">
//                 <img src="../assets/book-placeholder.png" class="w-100 mb-3">
//                 <h5 class="card-title">Book One</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
//                     additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//         </div>
//         `
//     }
// }


