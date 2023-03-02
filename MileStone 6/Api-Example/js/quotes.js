const loadQuate=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=> displayQuote(data))
    console.log('quotes Loading');
}

const displayQuote = quote =>{
    const blockQuote=document.getElementById('quote')
    const p=document.createElement('p');
    p.innerText=quote.quote;
    blockQuote.appendChild(p);
    console.log(quote);
}
loadQuate();