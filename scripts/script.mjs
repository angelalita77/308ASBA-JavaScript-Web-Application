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
        fetchImage(data);
        // Since it's random, fetch the quote from the first obj in array
        show.innerHTML = data[0].show; // anime title
        p.innerHTML = `"` + data[0].quote + `"`; // quote
        speaker.innerHTML = "-" + data[0].character; //quote speaker
        
        console.log(`Data received:`, data[0].quote)
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Get image from API stored in charURL imported from ./urls.mjs
// Testing before placing in module file ./helperfuncs.mjs
async function fetchImage(quoteData) {

    try {
        const response = await fetch(charUrl);
        if (!response.ok) {
            throw new Error(`Bruh! Not Agin! \nHTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        // if data.anime.title == data.title 
        // then return value of image src of that anime

        
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }

}












