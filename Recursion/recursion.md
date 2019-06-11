1. define what recursion is how it can be used
2. understand 2 essential components
3. visualize call stack
4. use helper method recursion and pure recursion

What is it? - a process (a fn) that calls itself!
Why use it?
- JSON.parse
- JSON.stringify
- document.getElementById
- DOM traversal algorithms (div inside a div inside a div...!!)
- Object traversal
- we will see it with more complex data structures like trees or graphs
- sometimes a cleaner alternative to iteration

Call Stack
- stack data structure
- anytime a fn is invoked it is placed on the top of the call stack, pushed 
- when js sees return keyword or when fn ends, the compiler will remove it, pop

* when we write recursive fns, we keep pushing new fns onto the call stack

How Recursive Functions Work
1. invoke the same fn with a different input until you reach a base case
2. base case = condition when the recursion ends
just like a for loop or while loop has somewhere to stop, recursion needs to stop too


Two essential parts
1. base case
2. different input - each time you call the recursive fn with a different data


Helper Method Recursion Pattern
- main outer function 
- there is an inner function which calls itself
- commonly done when we need to compile an array or a list of data
function outer(input) {
    var outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    }
    helper(input);
    return outerScopedVariable;
}

Pure Recursion Tips
- for arrays, use methods like slice, the spread operator, and concat that makes copies or array so you don't mutate them
- strings are immutable, so you need to use methods like slice, substr or substring to make copies
- objects, use object.assign or the spread operator