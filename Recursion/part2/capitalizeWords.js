// write a recursive fn called capitalizeWords
// given an array of words, return a new array containing
// each word capitalized

// base case will be when we reach the end of the arry using a loop
// different input will be the next element in the array

// how can I do this without the helper function recursion method??

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(words) {
    let capitalized = [];
    
    function helper(input) {
        if (input.length === 0) {
            return;
        }
        for (let i = 0; i < 1; i++) {
            capitalized.push(input[i].toUpperCase());
        }
        helper(input.slice(1));
    }
    helper(words);
    return capitalized;
}