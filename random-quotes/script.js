const clock = document.getElementById("clock");
const tbody = document.querySelector("#table_body")
const button = document.querySelector(".quote_button")

setInterval(() => {
    let date = new Date();
    let inMinutes = makeItStd(date.getMinutes());
    let inHours = makeItStd(date.getHours());
    let inSeconds = makeItStd(date.getSeconds());
    let status = "AM"
    if ((inHours - 12) >= 0) {
        inHours=inHours-12;
        status = "PM"
    }
    clock.innerText = `${inHours} : ${inMinutes} : ${inSeconds} ${status}`

}, 1000)
function makeItStd(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value
}

async function extractData() {
    let response = await fetch("https://dummyjson.com/quotes?skip=0&limit=10")
    let data = await response.json()
    for (const quoteObj of data.quotes) {
        let tr = document.createElement("tr")
        for (const key in quoteObj) {
            let td = document.createElement('td')
            td.innerText=quoteObj[key];
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    button.addEventListener("click",()=>{
        let quote = data.quotes[Math.floor(Math.random()*10)].quote
        alert(quote)
    })
}



extractData()