const quotes = [
  {
    quote: "If you only do what you can do, you will never be more than who you are.",
    author: "Master Shifu",
  },
  {
    quote: "There are no accidents.", 
    author: "Master Oogway", 
  },
  {
    quote: "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    author: "Master Oogway",
  },
  {
    quote: "There is no secret ingredient.",
    author: "Mr. Ping",
  },
  {
    quote: "There is no answer. But Eleanor is the answer.",
    author: "Chidi",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;