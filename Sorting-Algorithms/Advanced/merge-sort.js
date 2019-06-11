// combination of two things - merging & sorting
// explots the fact that arrays of 0 or 1 element are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 elements
// then building up a newly sorted array

// Merging Arrays
merge([1,10,50], [2,14,99,100])

// in order to implement merge sort, it is useful to first implement a fn responsible for merging two sorted arrays
// given two arrays which are sorted, this helper fn should create a new array which is also sorted and consists of all of the elements in the two input arrays
// this fn should run in O(n+m) time and O(n+m) space and should not modify the params passed to it

// two input arrays need to be sorted!!
// create an empty array, take a look at the smallest values in each input array
// while there are still values we haven't looked at
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move onto the next value in the first array
// if the value in the first array is larger than the value in the second array, push the value in the second array into the results and move on to the next value in the second array
// once you exhaust one array, push in all remaining vaues from the other array

// my solution === WRONG
function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        }
    }
    if (i === arr1.length) {
        result = result.concat(arr2.slice(j));
    }
    if (j === arr2.length) {
        result = result.concat(arr1.slice(i));
    }
    return result;
}

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // instead of conditionals, you can do another while loops
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// NOW MOVING ON TO THE SORTING
// break up the array into halves until you have arrays that are empty or have one element
// use slice recursively until the arr.length <= 1
// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged AND sorted array

function mergeSort(arr) {
    if (arr.length <= 1) {
        return;
    }
    let halfPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, halfPoint));
    let right = mergeSort(arr.slice(halfPoint));
    return merge(left, right);
}