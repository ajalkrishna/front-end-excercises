// object destructuring
function objectDestructure() {
    const product = {
        name: "HP Pavilion",
        price: 50000,
        model: {
            series: "A",
            serialNo: 1023
        }
    }
    const { name, price } = product; // destructured form
    console.log("without de-structuring " + product.name);
    console.log(`with destructuring ${price}`);

    const { name: productName } = product; //rename the property
    console.log(`after renaming ${productName}`);

    const { model: { series, serialNo } } = product; // destructuring the nesting
    console.log("model No : " + product.model.series + product.model.serialNo);
    console.log(`model No using destructuring: ${series + serialNo}`);
}

// Array destructuring
const fruits = ['Mango', 'Grape', 'Jackfruit', 'Pineapple', 'Cherries']

const [first, second] = fruits;
console.log("without destructuing " + fruits[0]);
console.log("with destructuring " + first);

const [,,,secondLast,last]=fruits;
console.log("final fruit is "+last);

// splicing an array using destructuring
const [f1,f2,...others]=fruits;
console.log(`unselscted fruits ${others}`)

const vegetables={
    round:"onion",
    long:"peas",
}
getRoundVegetable(vegetables)
function getRoundVegetable({round}){
    console.log(`${round} is a round vegetable`);
}