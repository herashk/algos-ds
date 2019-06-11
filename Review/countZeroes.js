// use divide and conquer


// given an array of 1s and 0s, which has all 1s first followed by 0s, write a func called countZeroes, which returns the number of zeros in the array
// time O(log n)

countZeroes([1,1,1,1,0,0]) //2
countZeroes([1,0,0,0,0]) //4

// to achieve O (log n), you have to find a point where 0 is followed by 1
function countZeroes(arr) {
    let mid;
    let start = 0;
    let fin = arr.length;
    while (start < fin) {
        mid = Math.floor((fin + start) / 2);
        if (arr[mid] === 1) {
            // uses a boolean to check if the array is all 1s
            if (!arr[mid + 1]) return arr.length - mid - 1;
            else start = mid + 1;
        } else {
            if (arr[mid - 1] === 1) return arr.length - mid;
            else fin = mid;
        }
    }
    return arr.length;
}

