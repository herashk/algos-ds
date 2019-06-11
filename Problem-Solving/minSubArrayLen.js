// write a fun called minSubArrayLen which accepts
// two parameters - an array of positive integers and 
// a positive integer
// this fn should return the minimal length of a contiguous 
// subarray of which the sum is greater than or equal to the
// integer passed to the fn
// if there isn't one return 0
// time complexity O(n)
// space complexity O(1)

minSubArrayLen([2,3,1,2,4,3], 7) // 2 [4,3]
minSubArrayLen([2,1,6,5,4], 9) // 2 [5,4]
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 because 62 is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
minSubArrayLen([4,3,3,8,1,2,3], 11) //2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

// use sliding window approach!
// minSubArrayLen([2,1,6,5,3], 9) // 2 [6,5]
                 //0,2,3,4,5
// in the above example, the total sum is 18
// [2,3,1,2,4,3], 7) // 2 [4,3]
// in the above example, the total sum is 15
// as you loop through the array, compare the first and last value
// substract the smaller value from the total sum 
// and increase the index 
// when the total sum is equal or smaller than the second arg (n)
// calculate the back index - front index



function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

   // minSubArrayLen([2,1,6,5,3], 9) // 2 [6,5]

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
    // move the window to right
      if (total < sum && end < nums.length){
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then
      // we can shrink the window 
      else if (total >= sum){
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
  