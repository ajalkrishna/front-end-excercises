const product = {
    name: "HP Pavilion",
    price: 50000,
    model: {
        series: "A",
        serialNo: 1023
    }
}


// object Destructuring
const { name, price } = product; // destructured form
console.log("without de-structuring " + product.name);
console.log(`with destructuring ${price}`);

const { name: productName } = product; //rename the property
console.log(`after renaming ${productName}`);

const { model: { series, serialNo } } = product; // destructuring the nesting
console.log("model No : " + product.model.series + product.model.serialNo);
console.log(`model No using destructuring: ${series + serialNo}`);