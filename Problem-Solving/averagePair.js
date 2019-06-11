// write a fn called averagePair
// given a sorted array of integers and a target average
// determine if there is a pair of values in the array
// where the average of the pair equals the target average
// there may be more than one pair that matches the average target
// time complexity O(n)
// space O(1)

// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([], 4) // false

// break it down!
// the second argument is essentially 1/2 (half)
// of two random values added up in the array in the first argument
// use multiple pointers approach to find a pair that
// adds up to the second argument x 2. If found true, it not false
// this is sorted so I can use pointer from front and back
// if arr[front] is bigger than num * 2, then no pair exists so return false
// if arr[front] + arr[back] is bigger than total, decrease back
// if arr[front] + arr[back] is smaller than total, increase front

function averagePair(arr, num) {
    const total = num * 2;
    let front = 0;
    let back = arr.length - 1;

    while (front < back) {
        if (arr[front] + arr[back] === total) {
            return true;
        }
        if (arr[front] + arr[back] > total) {
            back--;
        }
        if (arr[front] + arr[back] < total) {
            front++;
        }
    }
    return false;
}