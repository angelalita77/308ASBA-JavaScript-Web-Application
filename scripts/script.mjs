import { randomUrl, charUrl} from "./urls.mjs";
const p = document.getElementById('quote');
const speaker = document.getElementById('speaker');
const show = document.getElementById('show')
const quote_btn = document.getElementById('quote_btn')


quote_btn.addEventListener('click', fetchData)
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
        // fetch data and convert to obj array
        const data = await response.json();
        if (safeQuote(data[0].quote)) {
 
        
        
        //fetchImage(data);
        // Since it's random, fetch the quote from the first obj in array
        show.innerHTML = data[0].show; // anime title
        p.innerHTML = `"` + data[0].quote + `"`; // quote
        speaker.innerHTML = "-" + data[0].character; //quote speaker
        
        console.log(`Data received:`, data[0].quote)
        }
        else {
            fetchData();
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}



//------------------------- Ideas of Helper Functions to be Imported ----------------------/


// Create a function to ensure the quote displayed is not explicit.
// If the quote is explicit, then the function will be called again
// to pull another random quote
// Argument: data[0].quote which stores the quote object value (string) 
// Return: Boolean
function safeQuote(quote){
    // test variable with array of regular and forbidden words 
    const forbidden = ["house","cat","will", "ass", "your"];
    const lowercaseQuote = quote.toLowerCase()
    const quoteArray = lowercaseQuote.split(` `);
    console.log(lowercaseQuote);
    console.log(quoteArray);

    for (let word of quoteArray){
        console.log(word)
        for(let i = 0; i < forbidden.length; i++){
            console.log(forbidden[i])
            if (forbidden[i] !== word){
                continue;
            }
            else{
                 console.log("Not Allowed: " + quote)
                 console.log("Forbidden word: " + word)
                 return false;
            }

        }

    }
    /* retrive string of quote
    check string for explicit words
    return TRUE if safe
    else call fetchData*/
    return true;
}







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

