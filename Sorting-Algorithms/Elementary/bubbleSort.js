// sorting algorithm where the largest values bubble up to the top
// best case time complexity O(n^2)
// you still don't want to use this unless you know your data is almost sorted

// before we sort, we must swap!!
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index2]];
}

// BREAK IT DOWN!!
// start looping through the array with a var from the end of the array towards the beginning
// start an inner loop with a var called j from the beginning until i - 1
// if arr[j] is greater than arr[j + 1], swap those two values
// return the sorted array

bubbleSort([4,3,8,2,10,12,5]);

// unoptimized
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
        // j can go until i - 1 because during first iteration
        // the end will always be sorted
        // and if j loops until the end of the arr, j + 1 will be undefined
        // and this gets rid of needless comparison
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }

// if there is 4 items in the array, you make 3 comparisons
// you want to shrink the number of comparisons 
// next time you make 2 comparisons, etc
// [2,3,4,5,8,10,12]
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        // j needs to be <= to i because if i is 0
        // i - 1 is - 1 and if j is less than -1, it's -2
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

// optimized
// what if the array is already sorted?
// bubbleSort implemented above will still sort it. How can we improve this?
// need to check if we made any swaps. If we didn't, we know it's already sorted
// and we can just exit
function bubbleSort(arr) {
    let swapped;

    for (let i = arr.length; i > 0; i--){
        swapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}