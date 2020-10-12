//array of objetcs for quotes
const quotes = [
    {
        quote: "May you live every day of your life.",
        author: "Jonathan Swift"
    },
    {
        quote: "If your dreams don't scare you, they are too small.",
        author: "Richard Branson"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: "Mary Kay Ash"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        quote: "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’",
        author: "Leah Busque"
    },
    {
        quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        author: "Michele Ruiz"
    },
    {
        quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
        author: "Arianna Huffington"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Hellen Keller"
    },
    {
        quote: "It’s no use going back to yesterday, because I was a different person then.",
        author: "Lewis Carroll"
    },
    {
        quote: "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
        author: "Socrates"
    },
    {
        quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama XIV"
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "Abraham Lincoln"
    },
    {
        quote: "We know what we are, but not what we may be.",
        author: "William Shakespeare"
    },
    {
        quote: "We all know that light travels faster than sound. That's why certain people appear bright until you hear them speak.",
        author: "Albert Einstein"
    },
    {
        quote: "Everything has beauty, but not everyone sees it.",
        author: "Confucius"
    },
    {
        quote: "You may be one person to the world but you may also be the world to one person.",
        author: "Audrey Hepburn"
    },
    {
        quote: "The best way to pay for a lovely moment is to enjoy it.",
        author: "Richard Bach"
    },
    {
        quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
        author: "Walt Disney"
    },
    {
        quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        author: "Winston Churchill"
    },
    {
        quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        author: "Steve Jobs"
    },
    {
        quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
        author: "Rob Siltanen"
    },
    {
        quote: "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
        author: "Mohnish Pabrai"
    },
    {
        quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
        author: "Johann Wolfgang Von Goethe"
    },
    {
        quote: "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
        author: "Brian Tracy"
    },
    {
        quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
        author: "Henry Ford"
    },
    {
        quote: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
        author: "Hasidic Proverb"
    },
    {
        quote: "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Creativity Is Intelligence Having Fun.",
        author: "Albert Einstein"
    },
    {
        quote: "To See What Is Right And Not Do It Is A Lack Of Courage.",
        author: "Confucius"
    },
    {
        quote: "Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
        author: "John Wooden"
    },
    {
        quote: "If I had eight hours to chop down a tree, I'd spend six sharpening my axe.",
        author: "Abraham Lincoln"
    },
    {
        quote: "There are only two ways of living life. Forget those who you can not forgive and forgive those who you can not forget.",
        author: "Ali ibn Abi Talib"
    },
    {
        quote: "A Room Without Books Is Like A Body Without A Soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "A friend to all is a friend to none",
        author: "Aristotle"
    },
    {
        quote: "Wise men speak because they have something to say; Fools becasue they have to say something",
        author: "Plato"
    },
]

//index of array for displaying a random quote
var index = Math.floor(Math.random() * quotes.length)
//variable for the element displaying the quote
var quotation = document.getElementById("text");
//displaing a random quote from quotes array
quotation.innerText = '"' + quotes[index].quote + '"';

//variable for the element displaying the author of the quote
var authorName = document.getElementById("author");
//displaying the author's name from the quotes array
authorName.innerText = '- ' + quotes[index].author;

//function for changing quotes when button is clicked
const generateQuote = () => {
    //incrementing the array index by one
    index++;
    //resetting the index if it exceeds the length of the quotes array 
    if (index === quotes.length) {
        index = 0;
    }

    quotation.innerText = '"' + quotes[index].quote + '"';

    authorName.innerText = '- ' + quotes[index].author;
}

//styling for button element when clicked
const button = document.querySelector("#new-quote");
button.addEventListener('click', () => button.style.outline = 'none')


