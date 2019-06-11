// write a fn called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted

// understand the problem
// we have a sorted array and need to count the unique values and return that number

// exploring examples
// countUniqueValues([1, 1, 1, 2]) 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7
// countUniqueValues([]) 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

// break it down
// first, since they are sorted, I am going to loop through the arr
// and push the first value in another empty arr
// the next value, im going to compare it to the last value of the
// new arr. if it's the same, I keep looping and if it's not the same
// i push it in which means it is unique
// then at the end of the loop, i return the length of the new array
// which will contain all unique numbers

// solve the problem - naive solution
// time complexity - O(n)
// space complexity?
function countUniqueValues(arr) {
    const result = [];
    if (!arr.length) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (!result.length) {
            result.push(arr[i]);
        }
        if (result[result.length - 1] === arr[i]) {
            continue;
        }
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }
    return result.length;
}

// refactor
// but my above solution does not use multiple pointers and I am creating
// a new array. How can I solve it with two pointers and NOT create
// a new array but simply modify the existing one?

// break it down
// keep two pointers at the left so if left is 0, then right is 1
// as long as right is less than the length of the array
// compare arr[left] and arr[right]
// if the value is the same, then they are not unique to each other
// then increment right to find another unique value
// if the value is NOT the same, we know it's unique
// then increase the left and assign arr[left] to that unique value we found
// by the end of the loop, the value of left will be how many
// unique values we have


function countUniqueValues3(arr) {
    if (!arr.length) return 0;
    let left = 0;
    let right = 1;

    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++;
        }
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left;
}

// refactor
// can we do this by just having a for loop?
// same as the class solution
function countUniqueValues4(arr) {
    if (!arr.length) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}



// class solution
function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
