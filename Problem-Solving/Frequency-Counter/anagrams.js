// given two strings, write a fn to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by 
// rearranging the letters of another, such as cinema -> iceman
// validAnagram("", "") true
// validAnagram("anagram", "nagaram") true
// validAnagram("qwerty", "qeywrf") false


// Understand the problem
// fn with two inputs, both strings, and return true if they are anagrams, if not false

// exploring examples - see above

// break it down
// use frequency countering
// if the two strings aren't the same length, return false
// make two objects to look at composition of the strings
// this will require looping of two strings, each character as a key and how many times it appears
// then compare the two objects
// if they are the same then return true. if not return false

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let i = 0; i < str1.length; i++) {
        frequency1[str1[i]] = (frequency1[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        frequency2[str2[i]] = (frequency2[str2[i]] || 0) + 1;
    }
    for (key in frequency1) {
        if (!frequency2[key]) {
            return false;
        }
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true;
}

// how can I refactor this? do I need two objects?
// in this case since two objects will be the same if two strings are anagrams
// i can get away with using one object
function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;

    const frequency = {};

    for (let i = 0; i < str1.length; i++) {
        let value = str1[i];
        frequency[value] ? frequency[value]++ : frequency[value] = 1;
    }
    
    for (let i = 0; i < str2.length; i++) {
        let value = str2[i];
        if (!frequency[value]) {
            return false;
        }
        if (frequency[value]) {
            frequency[value] = frequency[value] - 1;
        }
    }
    return true;
}