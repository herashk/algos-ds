1. Describe what a searching algorithm is
2. Implement linear search on arrays
3. Implement binary search on sorted arrays
4. Implement a naive string searching algorithm
5. Implement the KMP string searching algorithm


1. Linear Search - looking at every single item one at a time
    - indexOf
    - includes
    - find
    - findIndex
- fn accepts an array and a value
- loop through the array and check if the current array element is
  equal to the value. It it is, return the index at which the element
  is found. If the value is never found, return -1;

Linear Search BIG O
- average time complexity : O(n) / as the array gets longer, the time it takes also increases
- best case is O(1), worst case O(n)


2. Binary Search
- must faster form of search
- rather than eliminating one element at a time, you can eliminate half of the remaining
  elements at a time
- it works only on sorted arrays!!
- Divde and Conquer!! - Accepts a sorted array and a value. Create a left pointer at the
  start of the array and a right pointer at the end of the array. While the left pointer
  comes before the right pointer, create a pointer in the middle. If you find the value you
  want, return the index. If the value is too small, move the left pointer up to above the
  middle. If the value is too large, move the right pointer down to below the middle. 
  If you never find the value, return -1
- average time complexity: O(log n) / also the worst case
- base case is O(1)
- every time you double the size of the array, you are adding one more step
- if 32 elements in the array, 2x2x2x2x2 = 32

3. Naive String Search
- searching for substrings in a string
- you want to count the number of times a smaller string appears in a long string
- brute force, compare the input to each string in the longer string, treating
  the longer string as an array
- loop over the longer string, loop over the shorter string, if the characters don't 
  match break out of the inner loop, if characters do match, keep going
  if you complete the inner loop and find a match, increment the count of matches
  return the count