// write a fn called productOfArray which takes in an
// array of numbers and returns the product of them all

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

// different input will be the decreased array each time
// base case will be if the arr's length is 0
// let's use a helper method recursion!!

function productOfArray(arr) {
    let product = 1;

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput.length === 1) {
            return helperInput[0];
        }
        product = product * helperInput[0];
        helper(helperInput.slice(1));
    }
    helper(arr);
    return product;
}

// the above solution seems to work? but it fails the
// course's test cases but they don't show the test cases
// which doesn't help
// how can I solve this without using a helper function?

function productOfArray(arr) {
    // if the arr's length is 0, return 1
    if (!arr.length) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}