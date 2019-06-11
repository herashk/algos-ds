// write a fn called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a 
// subsequence of othe characters in the second string
// in other words, the fn should check whether the characters
// in the first string appear somewhere in the second string
// WITHOUT changing their order

// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false (order matters)
// time complexity O(n + m)
// space complexity O(1)

// Use the multiple pointers approach
// use i to keep track of where we are in the first string
// use j to keep track of where we are in the second one
// when str2[j] is equal to str1[i], increase i and j
// if not, increase j to keep looping to find the next
// character that might appear in str2
// we know a subsequent string exists in str2 if i or
// str1 is at the end of the str1


function isSubsequence(str1, str2) {
    let i = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            i++;
        } else {
            continue;
        }
    }
    if (i === str1.length) {
        return true;
    } else {
        return false;
    }
}