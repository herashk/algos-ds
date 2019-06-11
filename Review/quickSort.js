// helps to accept 3 args - array, start index, end index (these can default to 0 and arr.length - 1)
// grab the pivot from the start of the array
// store the current pivot index in a var (this keeps track of where the pivot should end up)
// loop through the array from the start till the end
// if the pivot is greater than the current element, increment the pivot index var and then swap the current element with the element at the pivot index
// swap the starting element (ex - the pivot) with the pivot index
// return the pivot index
// pivot index tells you how many things that are less than the pivot

// [5,2,1,8,4,7,6,3];
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    let pivot = arr[start]; 
    let pivotIndex = start; 

    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b;
        }
    }

    for (let i = start + 1; i < arr.length; i++) {
        let result = comparator(pivot, arr[i]);
        if (result > 0) {
            pivotIndex++;
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[start];
    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return pivotIndex;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {

    if (start < end) {
        let pivotPoint = pivot(arr, comparator, start, end);
        // pivotPoint is already in the correct place so need to to pivotPoint - 1 and pivotPoint + 1;
        // with the subarray, there comes a point where pivotPoint is 0. Then pivotPoint - 1 becomes -1 and at this point start is NOT less than end so you break out of the if statement
        quickSort(arr, comparator, start, pivotPoint - 1);
        quickSort(arr, comparator, pivotPoint + 1, end);
    }
    return arr;
}