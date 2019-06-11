// write a recursive fn called flatten which accepts 
// an array of arrays and returns a new array with
// all values flattened

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// base case will be when you reach the end of the array?
// loop through the array, check if array[i] is an array
// if not, push it into an empty array
// if so, call the function again!

function flatten(bigArray) {
    let result = [];

    function helper(input) {
        // if (input.length === 0) {
        //     return;
        // }
        for (let i = 0; i < input.length; i++) {
            if (!Array.isArray(input[i])) {
                result.push(input[i]);
            } else {
                helper(input[i]);
            }
        }
        return;
    }
    helper(bigArray);
    return result;
}
