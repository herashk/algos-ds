// write a fn factorial which accepts a number and
// returns the factorial of that number. A factorial is the 
// product of an integer and all the integers below
// factorial zero (0!) is always 1

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24 (4x3x2x1)
factorial(7) // 5040

// base case will be when the argument number reaches 1
// different input will be the number. it will decrease
// every function call on the call stack

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}