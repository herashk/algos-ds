function merge(array1, array2, comparator) {
    let result = [];
    let i = 0;
    let j = 0;

    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b;
        }
    }

    while (i < array1.length && j < array2.length) {
        let output = comparator(array1[i], array2[j]);
        if (output < 0) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}


function mergeSort(arr, comparator) {

    if (arr.length <= 1) {
        return arr;
    }
    let halfPoint = Math.floor(arr.length / 2);

    // make sure to pass in comparator as the third param to left and right otherwise, in the callstacks, comparator becomes undefined and resorts to the default function defined in merge helper
    let left = mergeSort(arr.slice(0, halfPoint), comparator);
    let right = mergeSort(arr.slice(halfPoint), comparator);
    return merge(left, right, comparator);
}


let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
const moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
