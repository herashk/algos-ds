// write a recursive fn called capitalizeFirst
// given an array of strings, capitalize the first
// letter of each string in the array

// base case will be when array's length is 0
// keep a var to hold the capitalized words

capitalizeFirst(['car','taco','banana']); 
// ['Car','Taco','Banana']

function capitalizeFirst(arr) {
    let capitalized = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }
        // loop until i < 1 is only because we only care about the first letter
        for (let i = 0; i < 1; i++) {
            let word = '';
            word = word.concat(input[i][0].toUpperCase()).concat(input[i].slice(1));
            capitalized.push(word);
        }
        helper(input.slice(1))
    }
    helper(arr);
    return capitalized;
}