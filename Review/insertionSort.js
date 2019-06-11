function insertionSort(arr, comparator) {
    if (typeof comparator != 'function') {
        comparator = (a, b) => { a - b };
    }
    if (!arr.length) return arr;
    let current;
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            let result = comparator(arr[j], current);
            if (result > 0) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
            arr[j + 1] = current;
        }
    }
    return arr;
}


function insertionSort(arr, comparator = null) {
    if (arr.length === 0) return [];

    if (typeof comparator !== "function") {
        comparator = function (a, b) {
            return a - b
        };
    }

    for (var i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            let result = comparator(arr[j], temp);
            if (result > 0)
                arr[j + 1] = arr[j];
            else
                break;
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
    return arr;

}

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

function oldToYoung(a, b) {
    return b.age - a.age;
}

const kittyData = [{
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