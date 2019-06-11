// given a sorted array and a number, write a func called sortedFrequency that counts the occurrences of the number in the array
// time O(log n)

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) //4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) //1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) //-1

function sortedFrequency(arr, num) {
    // need to find the index of first occurrence and index of last occurrence
    // divide the array in half (start to mid, mid to end)
    // from the first array, find where n starts and from the second array, find where n ends

    let start = 0;
    let end = arr.length - 1;
    let midpoint = Math.floor((start + end) / 2);

    let first;
    let last;
    let firstMid = midpoint;
    while (start < firstMid) {
        let middle = Math.floor((start + firstMid) / 2);
        if (arr[middle] === num) {
            if (arr[middle - 1] < num) {
                first = middle;
                break;
            } else {
                firstMid = middle - 1;
            }
        } else if (arr[middle] < num) {
            start = middle + 1;
        } else {
            firstMid = middle - 1;
        }
    }

    while (midpoint < end) {
        let middle = Math.floor((midpoint + end) / 2);
        if (arr[middle] === num) {
            if (arr[middle + 1] > num) {
                last = middle;
                break;
            } else {
                midpoint = middle + 1;
            }
        } else if (arr[middle] < num) {
            midpoint = middle + 1;
        } else {
            firstMid = middle - 1;
        }
    }

    return last - first + 1;;
}




// Class solution
// 1. find some array index so that arr[index] === num(doesn 't have to be first or last)

// 2. continue the binary search
// for the first instance of num in the remaining part of the array to the left of index

// 3.continue the binary search
// for the last instance of num in the remaining part of the array to the right of index

function sortedFrequency(arr, num) {
    let start = 0;
    let fin = arr.length;
    let index = null;
    let mid;
    // find some array index so that arr[index] == num
    while (start < fin) {
        mid = Math.floor((start + fin) / 2);
        if (num === arr[mid]) {
            index = mid;
            break;
        } else if (num < arr[mid]) {
            fin = mid;
        } else {
            start = mid + 1;
        }
    }
    // none found
    if (index === null) return -1;
    // find leftmost index
    // remember fin for searching for rightmose
    let rightFin = fin;
    fin = index;
    let left = null;
    while (start < fin) {
        mid = Math.floor((start + fin) / 2);
        if (arr[mid] === num) {
            if (arr[mid - 1] !== num) {
                left = mid;
                break;
            } else {
                fin = mid;
            }
        } else {
            if (arr[mid + 1] === num) {
                left = mid + 1;
                break;
            } else {
                start = mid + 1;
            }
        }
    }
    if (left === null) left = index;
    // find rightmost index
    start = index;
    fin = rightFin;
    let right = null;
    while (start <= fin) {
        mid = Math.floor((start + fin) / 2);
        if (arr[mid] === num) {
            if (arr[mid + 1] !== num) {
                right = mid;
                break;
            } else {
                start = mid + 1;
            }
        } else {
            if (arr[mid - 1] === num) {
                right = mid - 1;
                break;
            } else {
                fin = mid - 1;
            }
        }
    }
    if (right === null) right = arr.length - 1;
    return right - left + 1;
}
