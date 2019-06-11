function bubbleSort(arr) {

    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}



function bubbleSort(arr, comparator = null) {
    const swap = (array, i, j) => {
        return [array[i], array[j]] = [array[j], array[i]];
    }
    if (arr.length === 0) return arr;
    if (typeof comparator != 'function') {
        comparator = function (a, b) {
            return a - b;
        }
    }
    for (let end = arr.length - 1; end > 0; end--) {
        for (let start = 0; start < end; start++) {
            let result = comparator(arr[start], arr[end]);
            if (result > 0) swap(arr, start, end);
        }
    }
    return arr;

}