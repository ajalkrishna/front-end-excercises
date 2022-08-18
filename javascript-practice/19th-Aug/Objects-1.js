
const book = {
    title: "Introduction to JS Objects",
    author: "Jacob Thomas",
    price: 250,
    pages: 500,
    editions: {
        first: 2015,
        second: 2018,
        third: 2022
    }
}

// accessing the properties of an object 
console.log(book.title);
console.log(book['author']);
// add new property
let newProperty = "referance"
book[newProperty] = "A quick glance into JS"
// console.log(book);

// iterate an object
for (key in book) {
    if (key != 'editions') {
        console.log(`${key} is ${book[key]}`);
        continue
    }
    console.log(`${key} is ${book[key].third}`);
}

// object creation using constructor function

function Car(name,model,price){
    this.name=name;
    this.model = model;
    this.price=price;
}
const honda = new Car("Honda","Z200",1800000);
console.log(honda);
let hondaKeys = Object.keys(honda);
console.log(hondaKeys);
delete honda.model;
console.log(honda);