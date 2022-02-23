const loadQuots = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => display(data))
}


const display = quote => {
    const quoteElement = document.getElementById('rendom');
    quoteElement.innerText = quote.quote;
}