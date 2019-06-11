// What is Sliding Window Pattern??
// this pattern involves creating a window which can either be an array or number from one position
// to another. depending on a certain condition
// the window either increases or closes (and a new window is created)
// very useful for keeping track of subset of data in a larger set


// PRACTICE
// write a fn called maxSubarraySum which accepts an array of integers
// and a number called n.
// the fn should calculate the maximum sum of n consecutive elements
// in the array

// exploring examples
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5,], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null

// break it down
// make a var to keep count of the sum. this will be replaced
// if found a bigger sum
// since the second argument is a number that tells us how many 
// consecutive elements we should be looking for
// if i = 0, the window needs to be from 0 - 3 (second argument - 1)
// loop through the array and add up to n number from the beginning
// assign that value to the var that we use to keep count of the sum
// keep looking through the array, if there is a bigger sum
// reassign the var to the bigger sum
// return the var

// solve
// yay I got it but I mixed up the .splice functionality
// the second argument of .splice is not an index but how many
// elements I want to slice off!!
function maxSubarraySum(arr, num) {
    let biggestSum = null;
    for (let i = 0; i < arr.length; i++) {
        let clone = arr.slice(0);
        let subArray = clone.splice(i, num);
        let sum = subArray.reduce((x, y) => { return x + y });
        if (biggestSum < sum) {
            biggestSum = sum;
        }
    }
    return biggestSum;
}

// class naive solution uses a double loop, see if you can implement it
// to use a double loop, the outer loop needs to be the subarray
// and the inner array loops through that and adds it together
function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    // outer array = subarray
    //[4, 2, 1, 6, 2], 4 ==> 13
    // why do arr.length - num + 1?
    // because we don't want to reach the end of the array
    // for example, the above example takes in 4, which means
    // I want to stop at 2 which is index(1)
    // arr.length (5) - 4 === 1, which means i needs to be less than 1 + 1 
    // which is 2
    
    // this is to account for negative sum
    // in the above solution I assigned biggestSum to null but
    // if there were negative numbers
    // null > -1 equates to true, null > 0 false
    // so the biggestSum will never be replaced and the results will be
    // unpredictable
    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        // use num as a part of the loop because we know
        for (let j = 0; j < num; j++) {
            // this works because in the inner loop, the j will increase
            // then once j is done, then i will increase
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// class refactored!
// time complexity O(n) - only one loop
// what is the approach?
// ([2,6,9,2,1,8,5,6,3],3)
// in the above example, 2 + 6 + 9 is added at the beginning
// but you don't have to add 6 + 9 + 2 all together again
// just substract 2 from 2 + 6 + 9 and add the next 2
// that is the sliding window approach!
// with this one, i can't assign temp and max to -Infinity 
// because -Infinity + whatever will always be -Infinity

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let temp = 0;
    let max = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    temp = max;
    // make sure i < arr.length - num + 1
    for (let i = 1; i < arr.length - num + 1; i++)  {
        temp = temp - arr[i - 1] + arr[i + (num - 1)];
        max = Math.max(max, temp);
    }
    return max;
}


// class solution
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    // you can start from i = num because
    // maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)
    // in here you have 1 + 2
    // and you start from 5, substract 1 and add 5
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  