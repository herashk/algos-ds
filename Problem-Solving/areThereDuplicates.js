// implement a fn called areThereDuplicates
// which accepts a variable number of arguments
// and checks whether there are any duplicates
// among the arguments passed in
// you can solve this using the frequency counter pattern
// OR the multiple pointers pattern

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Frequency Counter Pattern
// I can use arguments to loop through 
// make an object and add the key in while looping
// if the key exists, return false, if not return true

function areThereDuplicates(...args) {
    const frequency = {};
    for (let i = 0; i < args.length; i++) {
        if (frequency[args[i]]) {
            return true;
        } else {
            // don't assign this to 0 because 0 is falsey
            frequency[args[i]] = 1;
        }
    }
    return false;
}

// Multiple Pointers Pattern
// use two pointers at the front and back
// while looping through the arguments
// if two values are the same, return true
// areThereDuplicates(1, 2, 3) // false
function areThereDuplicates(...args) {
    if (!args.length) return 0;
    args.sort((a, b) => a > b);

    let left = 0;
    let right = 1;
    while (right < args.length) {
        if (args[left] === args[right]) {
            return true;
        }
        left++;
        right++;
    }
    return false;
}