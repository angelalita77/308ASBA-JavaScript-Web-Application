import { fromChar, dayQuote, dailyMessage } from "./urls.mjs";


//const url = "https://api.animechan.io/v1/quotes/random"
const url = "https://yurippe.vercel.app/api/quotes"
const randomUrl = "https://yurippe.vercel.app/api/quotes?random=1"
const p = document.getElementById('quote');
const speaker = document.getElementById('speaker');
const show = document.getElementById('show')

window.fetchQuote = fetchQuote;


// fetch(url)
//     .then(response => response.json())
//     .then(quote => console.log(quote))
//     .catch(error => console.error(error));


async function fetchQuote() {
    
    try {
        const response = await fetch(randomUrl);
        if (!response.ok) {
            throw new Error(`Bruh! \nHTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        p.innerHTML = data[0].quote;
        console.log(`Data received:`, data[0].quote)
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}











