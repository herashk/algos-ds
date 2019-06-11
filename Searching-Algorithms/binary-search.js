// mine
// when confused log left, middle, and right to check!
function binarySearch(arr, value) {
    let sorted = arr.sort();
    let left = 0;
    let right = sorted.length - 1;
    let middle = Math.floor((right + left) / 2);
    while (left <= right) {
       if (sorted[middle] === value) {
           return middle;
       } else if (sorted[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);  
        console.log(left, middle, right);
    }
    return -1;
}
  

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
  

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
