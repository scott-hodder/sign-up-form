
const quotes = [
    "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.",
    "That has sort of an oak-y afterbirth.",
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.",
    "I learned a while back that if I do not text 911, people do not return my calls. Um, but people always return my calls because they think that something horrible has happened.",
    "I… Declare…. Bankruptcy!",
    "It’s Britney, bitch."
]

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('randomQuote').innerHTML = quotes[5];
    document.getElementById('randomQuote').style.transform = "scale(1.2)";
    document.getElementById('randomQuote').style.transition="0.4s";
    document.getElementById('randomQuote').style.background="red";
    document.getElementById('randomQuote').style.color="white";
}
