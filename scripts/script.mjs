import { randomUrl, charUrl} from "./urls.mjs";
import { safeQuote } from "./helperfuncs.mjs";

const p = document.getElementById('quote');
const speaker = document.getElementById('speaker');
const show = document.getElementById('show')
const quote_btn = document.getElementById('quote_btn')


quote_btn.addEventListener('click', fetchData)

// For testing API fetches
// fetch(url)
//     .then(response => response.json())
//     .then(quote => console.log(quote))
//     .catch(error => console.error(error));

// Get data from API imported from the randomUrl const in ./urls.mjs
async function fetchData() {
    try {
        const response = await fetch(randomUrl);
        // If it failed to connect, return error
        if (!response.ok) {
            throw new Error(`Bruh! \nHTTP error! status: ${response.status}`)
        }
        // fetch data and convert to json obj array
        const data = await response.json();

        //Check to see if quote has no explicit words
        //returns TRUE if quote is clean
        if (safeQuote(data[0].quote)) {
        // Since it's random, fetch the quote from the first obj in array
        show.innerHTML = data[0].show; // anime title
        p.innerHTML = `"` + data[0].quote + `"`; // quote
        speaker.innerHTML = "-" + data[0].character; //quote speaker
        }
        else {
            // If a forbidden word is found, call function again
            // to fetch another random quote.
            fetchData();
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}



//------------------------- Ideas of Helper Functions to be Imported ----------------------/
// // Retrieve image of the speaker of the quote 
// // Get image from API stored in charURL imported from ./urls.mjs
// // Testing before placing in module file ./helperfuncs.mjs
// async function fetchImage(quoteData) {

//     try {
//         const response = await fetch("https://api.jikan.moe/v4/characters/1/full");
//         if (!response.ok) {
//             throw new Error(`Bruh! Not Agin! \nHTTP error! status: ${response.status}`)
//         }
//         const data = await response.json();
//         console.log(data);
//         // if quoteData.character == data.character
//         // then return value of image src of that anime

        
//     } catch (error) {
//         console.error('Error fetching data:', error);
        
//     }

// }

