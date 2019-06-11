// given an array of integers and a num, write a fn
// called maxSubarraySum, which finds the maximum sum of a subarray
// with the length of the number passed to the function
// note that a subarray must consist of consecutive elemtns from the original array


// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) //5
// maxSubarraySum([2,3], 3) // null

// note that sub array must be consecutive
// Sliding Window approach!!
// first make a temp and a max var
// temp is assigned to the sum of the n consecutive elements from the beginning
// assign temp to max
// loop through from i = the second argument
// subtract add the arr[num] and subtract the first value from the 
// temp's consecutive elements array
// assign the newly added value to temp, if it's bigger than max
// replace max

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let temp = 0;
    let max = 0;
// ([100,200,300,400], 2) // 700
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;
    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        max = Math.max(temp, max);
    }
    return max;
}