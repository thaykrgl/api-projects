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
        .then(
            quote.classList.remove("smooth"),
            author.classList.remove("smooth")  
        )
        .then(setTimeout(() => {
            quote.classList.add("smooth")
            author.classList.add("smooth")
        }, 300))
}

btn.addEventListener("click", getQuote);