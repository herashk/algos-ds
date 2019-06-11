Sorting? - rearranging the items in a collection (ex - array) 
           so that the items are in some kind of order

Why learn?
- incredibly common stack so it's good to know how it works
- there are many ways of sorting and each has pros and cons
- there are certain situations where one algorithm that's slow
  will be super fast in others

<Objectives>
Elementary sorting algorithms ------------------------------------------------------
- bubble sort - O(n^2) - quadratic
- selection sort - O(n^2) - quadratic
- insertion sort - O(n^2) - quadratic

Selection Sort VS Bubble Sort
- bubble sort, you are swapping for every element in a loop
- selection sort, you only swap once per loop, so if we are worried about writing to memory, selection sort is slightly better

Insertion Sort
- if the data is almost all sorted, you don't have to reiterate and swap
- the worst case is if there is a descending data set
- insertion sort is good for online algorithm: algorithm that works as data keeps coming in (ex - as you are sorting, ppl online keeps entering in new data) 
- because one side is sorted, we can insert things in the appropriate place when data is coming in live or you need to insert sth at a moment's notice

          | Time Best | Time Average | Time Worst | Space |
Bubble    | O(n)      | O(n^2)       | O(n^2)     | O(1)
Insertion | O(n)      | O(n^2)       | O(n^2)     | O(1)
Selection | O(n^2)    | O(n^2)       | O(n^2)     | O(1)

Bubble Sort with almost sorted data - best case, very few swaps
Insertion Sort with almost sorted data - best case, very few swaps, good for continous                                             sorting
Selection Sort with almost sorted data - still go through the loop each time to find the 
                                         smallest item
                                         But this is very simple to understand
Space complexity: usually everything happens in place. We are not creating new variables.

Above three are all roughly equivalent!
Above three all have average time complexities that are quadratic!
But above three excel when data sets are small
We can do better === more complex algorithms!



Advanced sorting algorithms ----------------------------------------------------------
The elementary ones do not scale well
There's a family of sorting algos that can improve time complexity from O(n^2) quadratic
to O(n log n) NOT O(logN) or O(n)
- Merge Sort : doesn't care whether the data is already sorted, reversed, etc
               Why is time n log n? 
               If we start with 8 element array, we split it into two 4 element arrays -> four 2 element arrays -> eight 1 element arrays
               so we need to split 3 times. 2x2x2 = 8
               If we have a 32 element array, we split 4 times
               base 2: 2 of what power gives us n (number of elements in an array)
               O(log n) = decompositions
               Then, we have O(n) comparisons per decomposition
               As n grows, the merge part of mergeSort grows also!
               Tradeoff is as the array grows, we need more space to make the sub arrays.
- Quick Sort: as n grows, we need to make O(log n)           
              decompositions. EX - 32 elements, 5 decompositions
              Each decomposition requires O(n) comparisons. Same reason as mergeSort. 
              Worst case?? with the current implementation, we pick the first element as the pivot. What if the data is already sorted? If we compare the pivot to the every element in the array, well nothing is less than the first one! - O(n) decompositions + O(n) comparison per decomposition = O(n^2) quadratic time.
              Problem arises when the pivot chosen is the smallest or largest every single time. If we know that data is sorted, just pick the middle element or a random item, just not the first or last element.

          | Time Best | Time Average | Time Worst | Space |
Merge     | O(nlogn)  | O(nlogn)     | O(nlogn)   | O(n)
Quick     | O(nlogn)  | O(nlogn)     | O(n^2)     | O(n)

All sorting algos above are comparison sorts! = comparing two things and that is the most we are doing at a given time (less than, greater than) and decide where that element goes.

BUT ARE THERE FASTER SORTING ALGOS? can we do better than O(n log n)?
We can! but NOT by making comparisons!!!

- Radix Sort
This is a special sorting algorithm that works on a list of numbers. Usually used on binary numbers.
This algo does not make any comparisons between elements. It exploits the fact that information about the size of a number is encoded in the number of digits. More digits mean a bigger number!! We know that something with more digits is a larger number than something with less digits.

It looks at the right most digit and groups them together. 

- n is the number of elements (length of array)
- k is the number of digits
- So if there is a number with super long digits, it should be noted
- if you deal with all randomly distributed unique data, the time complexity becomes n log n because of the way computer stores data
- if we accept that, radix sort is equally as good as the merge and quick sorts
- there is also a counter argument
- theoretically this is faster than merge and quick sorts
Radix     | O(nk)  | O(nk)     | O(nk)     | O(n + k)
