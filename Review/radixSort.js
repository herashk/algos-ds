function getDigit(num, index) {
    let powerTen = Math.pow(10, index);
    let computed = (Math.floor(num / powerTen)).toString();
    return Number(computed[computed.length - 1])
}

// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(arr) {
    let maximum = 0;

    for (let i = 0; i < arr.length; i++) {
        let result = digitCount(arr[i]);
        if (result > maximum) {
            maximum = result;
        }
    }
    return maximum;
}

function radixSort(arr) {

    let largestDigit = mostDigits(arr);
    for (let k = 0; k < largestDigit; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}