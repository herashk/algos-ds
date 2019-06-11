// write a fn called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// solution must have O(n) time complexity

// exploring example
// sameFrequency(182, 281); true
// sameFrequency(34, 14); false
// sameFrequency(3589578, 5879385); true
// sameFrequency(22, 222); false

// break it down
// what patter can I use here? Frequency Countering!! 
// this is similar to the anagram problem 
// two numbers should have the same number of each number so
// I can use one object to keep track of each number and its count
// if the length are different, return false;
// loop through num1 and make an obj out of it
// then loop through num2 and see if that value is inside the obj
// if not return false
// if it is, decrease the value of that key
// because if it's 0, it will be falsey and later be treated 
// as if that value is not inside the obj which will return false
// don't forget to turn num1 and num2 into strings!
function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if (num1.length !== num2.length) return false;

    let frequency = {};
    for (let i = 0; i < num1.length; i++) {
        if (!frequency[num1[i]]) {
            frequency[num1[i]] = 1;
        } else {
            frequency[num1[i]]++;
        }
    }
    for (let i = 0; i < num2.length; i++) {
        if (!frequency[num2[i]]) {
            return false;
        }
        if (frequency[num2[i]]) {
            frequency[num2[i]] = frequency[num2[i]] - 1;
        }
    }
    return true;
}