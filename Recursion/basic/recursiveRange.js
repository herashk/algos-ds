// write a fn called recursiveRange which accepts a number
// and adds up all numbers from 0 to the number passed
// to the function

recursiveRange(6) // 21
recursiveRange(10) // 55

// base case will be if the number passed in is 0
// then return 0
// different input will be the decreased number each
// function call

function recursiveRange(num) {
    if (num === 0) {
        return 0;
    }
    return num + recursiveRange(num - 1);
}