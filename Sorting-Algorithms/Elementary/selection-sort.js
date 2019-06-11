// similar to bubble sort
// BUT instead of first placing large values into sorted position, it places 
// small values into sorted position
// go through the array looking for the minimum value
// this is not terribly efficient
// roughly you are comparing every element to every element in the array
// time complexity O(n^2)


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

selectionSort([4,3,8,2,10,12,5]);
// [2,3,4,5,8,10,12]

// BREAK IT DOWN!!
// declare an empty var called minimum
// as you loop through the array, store arr[i] as the minimum
// compare the minimum to the next item
// if you find an item that is smaller than the minimum, reset the minimum
// at the end of one iteration, swap the arr[i] with the minimum's index
// return the arr at the end

// Pseudocode
// store the first element as the smallest value you've seen so far
// compare this item to the next item in the array until you find a smaller num
// if a smaller num is found, designate that smaller number to be the new minimum and continue till the end of the array
// if the minimum is not the value (index) you initially began with swap the two values
// repeat this with the next element
// once you find a minimum during the first iteration, you need to look at the next item and up. Need to shrink the window of what we are comparing! or else you'll end up with the same minimum always


selectionSort([4,3,8,2,10,12,5]);
//2,3,8,4,10,12,5
//  3,8,4,10,12,5
//    4,8,10,12,5
//      5,10,12,8
//        8,12,10
//          10,12
function selectionSort(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// to see what's going on
function selectionSort(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log('-------------------------')
        console.log(arr);
        console.log('SWAPPING TO -->: ')
        console.log(i, min);

        // need for this conditional: optimize to not swap items that are actually in order or of the same value
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        console.log(arr);
        console.log('-------------------------')
    }
    return arr;
}

