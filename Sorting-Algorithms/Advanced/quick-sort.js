// works under the same assumption as mergeSort - using recursion!
// like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// works by selecting one element (called the pivot point) and finding the index where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot?? WTH does this mean!!!!!

// first part of quick sort
// let's implement a pivot helper! or a partition
// given an array, this helper fn should designate an element as the pivot
// should then rearrange elements in the array so that all values less than the pivot are moved to the left or the pivot and all values greater than it are moved to the right of the pivot
// the order of elements on either side of the pivot doesn't matter
// the helper should do this in place (not make a new array)
// should return the index of the pivot

// picking the pivot is important!!!
// runtime of quick sort depends in part on how one selects the pivot
// ideally the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// for simplicity, we'll always choose the pivot to be the first element (consequences later!!)

let arr = [5,2,1,8,4,7,6,3];
pivotHelper(arr); //4 
// let's say we picked the first ele to be the pivot which is 5 then any of the bottom mutations are acceptible
[2,1,4,3,5,8,7,6]
[1,4,3,2,5,7,6,8]
[3,2,1,4,5,7,6,8]
[4,1,2,3,5,6,8,7] // etc

// Break it down!
// helps to accept 3 args - array, start index, end index (these can default to 0 and arr.length - 1)
// grab the pivot from the start of the array
// store the current pivot index in a var (this keeps track of where the pivot should end up)
// loop through the array from the start till the end
// if the pivot is greater than the current element, increment the pivot index var and then swap the current element with the element at the pivot index
// swap the starting element (ex - the pivot) with the pivot index
// return the pivot index
// pivot index tells you how many things that are less than the pivot

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]; // 5
    let pivotIndex = start;

    // loop from the 1st index since I am assigning the 0th index value as the pivot
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) { // if 5 > 2
            pivotIndex++;     // pivotIndex = 1
            let temp = arr[pivotIndex]; // 2
            arr[pivotIndex] = arr[i]; // index 2 becomes 5
            arr[i] = temp;
        }
    }
    // we've left the first element in the first position
    // now we swap it with the element in the pivotIndex position
    let temp = arr[start];
    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return pivotIndex;
}


// call the pivot helper on the full array
// recursively call quickSort again on the left side and right side of the pivot point
// We are not making new arrays!! this is happening in place!!
// base case is not quite if array has one item in it
// it is when if the subarray has one item in it
// base case occurs when you consider a subarray with less than 2 elements
function quickSort(arr, start = 0, end = arr.length - 1) {
    // if we do not have a conditional, this will run forever
    // where do we want to stop? we want to stop in a situation where we've hit a subarray that's one element long
    // how do we know that?? array will still remain the same length!!
    // what's changing is the start and end indexes
    // as subarrays become smaller, start and end becomes closer, eventually becoming same
    // so we want to keep runing only if start is less than right
    if (start < end) {
        let pivotPoint = pivotHelper(arr, start, end);
        quickSort(arr, left, pivotPoint - 1);
        quickSort(arr, pivotPoint + 1, end);
    }
    return arr;
}
