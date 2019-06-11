// loop over the longer string, loop over the shorter string, if the characters don't match break out of the inner loop, if characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches, return the count

naiveSearch("lorie loled", "lol"); // 1

// empty var to keep a count of matches
// use split to make an array out of the longer string
// loop through the longer string and do a nested loop inside each word

function naiveSearch(long, short) {
    let count = 0;
    let split = long.split(' '); // ['lorie', 'loled'];
    for (let i = 0; i < split.length; i++) {
        if (split[i].indexOf(short) > -1) {
            count++;
        }
    }
    return count;
}

// without using indexOf
function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(long[i + j], short[j]);
            if (long[i + j] !== short[j]) {
                // with a break, you break out of the for loop
                // and j starts with a 0 again!
                break;
            } 
            if (j === short.length - 1) {
                console.log('match!!!');
                count++;
            }
        }
    }
    return count;
}

