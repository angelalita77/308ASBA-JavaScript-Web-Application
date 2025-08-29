 const forbidden = ["panties","boob","boobs", "ass", "panty"];

// Create a function to ensure the quote displayed is not explicit.
// If the quote is explicit, then the function will be called again
// to pull another random quote
// Argument: data[0].quote which stores the quote object value (string) 
// Return: Boolean
export function safeQuote(quote){
    // test variable with array of regular and forbidden words  
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
    // After checking each word in the string
    // return TRUE if no forbidden words were found 
    return true;
}