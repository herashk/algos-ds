// builds up the sort by gradually creating a larger left half which is always sorted???
// taking an element one at a time and inserting at the right place
// start by picking the second element in the array
// compare the second ele with the one before and swap necessary
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ex - the left side) to place the element in the correct place
// repeact until the array is sorted


insertionSort([4,3,8,2,10,12,5]);
// [2,3,4,5,8,10,12]

const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[in1]];
}

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        // [1,2,9,76,20]
        // let's say current val is 20 and j is 3
        // goes from backwards [1,2,9,76,76] 76 is moved to 20's spot
        // then 20 gets compared to 9 which is arr[2]
        // 9 is NOT bigger than 20 so for loop breaks
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}