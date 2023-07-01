const quotes = [{
    quote: "You only live once, but if you do it right, once is enough.",
    writer: "– Mae West"
}, {
    quote: "An investment in knowledge pays the best interest.",
    writer: "– Benjamin Franklin"
}, {
    quote: "The stock market is a device to transfer money from the impatient to the patient.",
    writer: "– Warren Buffett"
}, {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    writer: "– Steve Jobs"
}, {
    quote: "Being rich is having money; being wealthy is having time.",
    writer: "– Margaret Bonanno"
}, {
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    writer: "– Soren Kierkegaard"
}, {
    quote: "Rule No. 1 : Never lose money. Rule No. 2 : Never forget Rule No. 1.",
    writer: "– Warren Buffett"
}, {
    quote: "First they ignore you, then they laugh at you, then they fight you, then you win.",
    writer: "– Mahatma Gandhi"
}, {
    quote: "The purpose of our lives is to be happy.",
    writer: "- Dalai Lama"
}, {
    quote: "I have always believed that process is more important than results",
    writer: "- MS Dhoni"
}, ]

let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");
// let btn = document.getElementById("Qbtn");
// let quote = document.getElementsByClassName("qoute");
// let writer = document.getElementsByClassName("writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    const body = document.querySelector("body");
    const clr = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
    body.style.background = clr
    quote.innerHTML = quotes[random].quote;
    quote.style.color = clr
    writer.innerHTML = quotes[random].writer;

})