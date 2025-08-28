//import { fromChar, dayQuote, dailyMessage } from "./urls.mjs";


//const url = "https://api.animechan.io/v1/quotes/random"
const url = "https://yurippe.vercel.app/api/quotes"
const randomUrl = "https://yurippe.vercel.app/api/quotes?random=1"
const charUrl = "https://api.jikan.moe/v4/characters/"
const p = document.getElementById('quote');
const speaker = document.getElementById('speaker');
const show = document.getElementById('show')

window.fetchData = fetchData;


// fetch(url)
//     .then(response => response.json())
//     .then(quote => console.log(quote))
//     .catch(error => console.error(error));


async function fetchData() {
    
    try {
        const response = await fetch(randomUrl);
        if (!response.ok) {
            throw new Error(`Bruh! \nHTTP error! status: ${response.status}`)
        }
        const data = await response.json();

        // Since it's random, fetch the quote from the first obj in array
        show.innerHTML = data[0].show; // anime title
        p.innerHTML = `"` + data[0].quote + `"`; // quote
        speaker.innerHTML = "-" + data[0].character; //quote speaker
        
        console.log(`Data received:`, data[0].quote)
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}














