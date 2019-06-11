// opposite to buble sort in away that the first element gets sorted first
// assign the first ele to the smallest (minimum)
// compare this to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new minimum and continue till the end of the array. If the minimum is not the initial value, swap the two values

// time complexity O(n^2) quadratic
function selectionSort(arr) {
    let minimum;
    for (let i = 0; i < arr.length; i++) {
        minimum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (minimum > arr[j]) {
                minimum = arr[j];
            }

            // temp is NOT minimum because minimum is already assigned to arr[j] above.
            if (minimum !== arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

selectionSort([20, 13, 4, 5, 0, 12, 2, -1, -100]);


// with a comparator
function selectionSort(arr, comparator) {

    if (typeof comparator != 'function') {
        comparator = function (a, b) {
            return a - b;
        }
    }
    let minimum;
    for (let i = 0; i < arr.length; i++) {
        minimum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let result = comparator(minimum, arr[j]);
            // if result is bigger than 0, it means arr[j] is smaller than minimum so set that to the minimum
            if (result > 0) {
                minimum = arr[j];
            }
            // then compare!
            if (minimum !== arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function oldToYoung(a, b) {
    return b.age - a.age;
}

const kittyData = [
    {
        name: 'bub',
        age: 7
    },
    {
        name: 'garfield',
        age: 5
    },
    {
        name: 'puss',
        age: 3
    },
    {
        name: 'jang',
        age: 12
    }
]