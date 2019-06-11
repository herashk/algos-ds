// what is dynamic programming? - method for solving a complex problem by breaking it down into a collection of simper subproblems, solving each of those subproblems just once, and storing their solutions

// we can use dynamic programming where there are overlapping subproblems and optimal substructure 

// explain what overlapping subproblems are - (it means we can break one problem down into smaller pieces but the smaller pices can be reused - ex: fibonacci sequence)
// example of no overlapping subproblems - ex. mergeSort (you are sorting different things! A special case of mergeSort with oberlapping subproblems is mergeSort[10,24,10,24], when sorting the same array/subproblems)
// understand what optimal substructure is - a problem is said to have this if an optimal solution can be consructed from optimal solutions of its subproblems (ex - fibonacci). Another problem that people think exhibit optimal substructure is airline path but this is not the case of optimal structure. If the chepest ticket from SF to MN to NY is $500, then if this had optimal structure, the cheapest way to go to MN to SF should be SF to MN. But this is not the case. Sometimes going from SF to Seattle to MN might be cheapest!

// solve more challenging problems

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n + 2);
}

//                  fib5 (this is waiting until all the bottom finishes)
//          fib4     +     fib3
//      fib3 + fib2     fib2 + fib1
//  fib2 + fib1  
// O (2^n) = exponential. This is worse than O(n^2)/quadratic
// How do we improve this? The real problem is we are repeating things! when we do fib5, we are calculating fib4 and fib3 but when we do fib4, we calculate fib3 again!
// what if we remember the values?? - using past knowledge to make future problem solving easier!!! "solving each of those subproblems just once, and storing their solutions"

// Memoization! storing results of expensive function calls and returning the cached result when the same inputs occur again
// Memoization Big O => if we calculate fib6, you only need to calculate fib6, 5, 4, 3 only once. So as n grows, the times you calculate grows linearly! O(n)
function fibonacci(n) {
    const cached = {};
    if (cached[n]) return cached[n];
    if (n <= 2) return 1;
    let result = fibonacci(n - 1) + fibonacci(n + 2);
    cached[n] = result;
    return result;
}

// if using an array, you can predefine the 0, 1, 2 indexes so that you can get rid of the base case
function fibonacci(n, cached = [undefined, 1, 1]) {}

// The approach so far has been top => down approach
// Tabulation (bottom -> up), means we will start from fib1 and fib2 and add it all up. It is usually done using iteration and start at the bottom. Storing the result of a previous result in a table (usually an array). Better space complexity can be achieved using tabulation!!

function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1]; // intitialize
    for (let i = 3; i <=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

// with a recursion solution, there are a lot of function calls that are still waiting on the callstack so if the input is really massive, it will throw a stack overflow error. With tabulation, that does not happen/at least the error doesn't happen. It will spit out Infinity because JS cannot store such large number. But with another language, it will give the correct answer.