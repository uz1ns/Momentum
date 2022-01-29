const quotes = [
    {
        quote: "There is nothing in the world so irresistibly contagious as laughter and good humor.",
        author: "Charles Dickens"
    },
    {
        quote: "Love all, trust a few. Do wrong to none.",
        author: "William Shakespeare"
    },
    {
        quote: "Rather be dead than cool.",
        author: "Kurt Cobain"
    },
    {
        quote: "I would rather die of passion than of boredom.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Don't be afraid of limitations but imagine and try.",
        author: "Mark Victor Hansen"
    },
    {
        quote: "Dream your wildest dreams and you will live a wild life.",
        author: "Napoleon Hill"
    },
    {
        quote: "Why do you make efforts commonly, don’t want to live commonly!",
        author: "John F. Kennedy"
    },
    {
        quote: "Without haste, but without rest -Johann Wolfgang von Goethe",
        author: "Novelist and playwright"
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa"
    },
    {
        quote: "A good traveler has no fixed plans, and is not intent on arriving.",
        author: "Johann Wolfgang von Goethe"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

let sequence = Math.floor(Math.random()*quotes.length);
const todaysQuote = quotes[sequence].quote;
const todaysAuthor = quotes[sequence].author;
quote.innerText = todaysQuote;
author.innerText = `- ${todaysAuthor}`;