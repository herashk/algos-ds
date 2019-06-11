// Creating pointers or values that correspond to an index or position and move towards the beginning, end
// or middle based on a certain condition
// very efficient for solving problems with minimal space complexity

// Write a fn called sumZero which accepts a sorted array of integers.
// the fn should find the first pair where the sum is 0
// return an array that includes both values that sum to zeero or 
// undefined if a pair does not exist
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// understand the problem
// fn takes in a sorted array 
// if you can find a pair that sums up to zero, return those two nums in an array
// if not, return undefined

// explore examples - see above

// break it down
// naive solution
// make two loops, one looping from front and one looping from back
// compare 1st and last, if Math.abs(last) is smaller than 1st
// loop to the 2nd and go on 
// if Math.abs(last) is bigger, then loop from the back to the second to last
// keep comparing like this until the front pointer is equal to Math.abs(back pointer)

// my solution
function sumZero(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let front = arr[i];
        for (let j = arr.length - 1; j >= 0; j--) {
            let back = arr[j];
            console.log('front', front, 'back', back);
            if (i === j) {
                return undefined;
            }
            if (Math.abs(front) === back) {
                result.push(front);
                result.push(back);
                return result;
            }
            if (Math.abs(front) < back) {
                continue;
            }
            if (Math.abs(front) > back) {
                break;
            }
        }
    }
    return undefined;
}

// class naive solution
// pointer from the front and then front + 1
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}

// refactored solution
// I did have the correct approach keeping pointers from from and back
// but I used nested loops when I could have used just one loop
// use a while loop to keep a left and right pointer
// when using a while loop, the pointers are always indexes
// when using a while loop, be careful what kind of if conditions you 
// are setting up. Previously i had three different if statements
// but since the first if statement checked if Math.abs(left) is smaller
// than the right, which was always true in the example i had
// it kept going into that if each loop
// O(n) - time complexity
// O(1) - space complexity

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    //sumZero([-3, -2, -1, 0, 1, 2, 3, 4])
    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}