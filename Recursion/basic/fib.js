// write a recursive fn called fib which accepts a number
// and returns the nth number in the fibonacci sequence
// recall that the fibonacci sequence is the sequence of 
// whole numbers 1,1,2,3,5,8 which starts with 1 and 1 and
// where every number thereafter is equal to the sum of the 
// previous two numbers

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

// since fibonacci is the equal to the sum of two previous
// fib(4) will be equal to fib(3) + fib(2)
// base case will be when num is equal to 0, return 0

// this was a mistake on my part
// if the base case is num === 0
// if num is 1, fib(num - 2) would be fib(-1) and go on
// since the first two fib numbers are 1, 1 you need to
// check if number is less then 3, then return 1

function fib(num) {
    if (num < 3) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}