let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random"

let getQuote = () => {
    fetch(url)

        .then(data => data.json())
        .then(data => {
            quote.innerText = data.content;
            author.innerText = data.author;
        })
}

btn.addEventListener("click", getQuote);