// write a recursive fn called someRecursive which accepts
// an array and a callback
// the fn returns true if a single value in the array 
// returns true when passed to the callback. Otherwise false



// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false

// base case will be when arr's length is 0
// return false because we will be returning true
// as soon as we find an element that evalues to true
// when passed into the callback
// assign result to the returned value of callback(input[0])
// if it is true, immediately return true
// if not, pass in a shorter input to helper



function someRecursive(arr, callback) {
    let result = false;

    function helper(input) {
        //also remember, input.length!!! 
        //you keep making this mistake
        if (input.length === 0) {
            //just return in these cases because
            //you just want to pop out of the callstack
            //and eventually get to the outer fn
            return;
        }
        result = callback(input[0]);
        if (result) {
            return;
        }
        helper(input.slice(1))
    }
    helper(arr);
    return result;
}