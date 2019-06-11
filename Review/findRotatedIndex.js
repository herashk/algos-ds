// write a func called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The func should return the index of the integer in the array. If the value is not found, return -1
// time O(log n), space O(1)


findRotatedIndex([3,4,1,2], 4) //1
findRotatedIndex([6,7,8,9,1,2,3,4], 8) //2
findRotatedIndex([6,7,8,9,1,2,3,4], 3) //6
findRotatedIndex([6,7,8,9,1,2,3,4], 12) //-1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) //5

function findRotatedIndex(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.floor((min + max)/2);

    while (min < middle) {

    }
}