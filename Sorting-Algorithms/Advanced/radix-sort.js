// integer sort 

// Radix Sort Helpers
// in order to implement a radix sort, it is helpful to build a few helper fns first

// <1>
// returns the digit in num at the given place value
function getDigit(num, place) {
    let powerTen = Math.pow(10, place);
    let computed = (Math.floor(num / powerTen)).toString();
    return Number(computed[computed.length - 1]);
    // console.log('computed', computed);
}

getDigit(12345, 0) // 5 -> 0th position is 5
getDigit(12345, 1) // 4 -> 1st position is 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0

// Math.abs to account for negative number!!
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// <2>
// then we need to know digit count
// that determines how many times we need to run the operation
// which number has the most number of digits?
// returns the number of digits in num
function digitCount(num) {
    return num.toString().length;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(1) // 1
digitCount(23) // 2
digitCount(114) // 3

// <3>
// then we need a fn that tells us the number of digis in the largest number in the list (using digitCount)
function mostdigits(nums) {
    return digitCount(nums.sort((a, b) => a - b)[nums.length - 1])
}
// but if we use a .sort here it defeats the purpose of making this a helper function of a sorting algo. So...
function mostdigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

mostdigits([1234,56,7]) // 4
mostdigits([1,1,11111,1]) // 5
mostdigits([12,34]) //2

// <4> Actually write radix sort!!!!
// define a fn that accepts list of numbers
// figure out how many digits the largest number has (using mostdigits, and digitCount)
// loop from 0 until the largest number of digits, let i
// for each iteration, create buckets for each digit (0 to 9), so 10 empty arrays
// place each number in the corresponding bucket based on its 'i'th digit
// replace our existing array with values in our buckets starting with 0 and going up to 9 - this should happen at the end of each loop
// return list at the end

function radixSort(nums) {
    const digits = mostdigits(nums);

    for (let i = 0; i < digits; i++) {
        let zero = [];
        let one = [];
        let two = [];
        let three = [];
        let four = [];
        let five = [];
        let six = [];
        let eight = [];
        let seven = [];
        let nine = [];
        for (let k = 0; k < nums.length; k++) {
            let element = nums[k];
            if (getDigit(element, i) === 0) {
                zero.push(element);
                console.log('zero', element, i, zero);
            } else if (getDigit(element, i) === 1) {
                one.push(element);
                console.log('one', element, i, one);
            } else if (getDigit(element, i) === 2) {
                two.push(element);
                console.log('two', element, i, two);
            } else if (getDigit(element, i) === 3) {
                three.push(element);
                console.log('three', element, i, three);
            } else if (getDigit(element, i) === 4) {
                four.push(element);
                console.log('four', element, i, four);
            } else if (getDigit(element, i) === 5) {
                five.push(element);
                console.log('five', element, i, five);
            } else if (getDigit(element, i) === 6) {
                six.push(element);
                console.log('six', element, i, six);
            } else if (getDigit(element, i) === 7) {
                seven.push(element);
                console.log('seven', element, i, seven);
            } else if (getDigit(element, i) === 8) {
                eight.push(element);
                console.log('eight', element, i, eight);
            } else if (getDigit(element, i) === 9) {
                nine.push(element);
                console.log('nine', element, i, nine);
            }
        }
        nums = [].concat(zero, one, two, three, four, five, six, seven, eight, nine);
        console.log('nums ----> ', nums);
    }
    return nums;
}

// refactored
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        // this is how you make buckets!!
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}