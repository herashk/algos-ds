// so many types of heaps!!!!
// but we will focus on binary heap!
// define what a binary heap is 
// compare and contrast min and max heaps and implement them
// understand where they are used in the real world
// they are used to implemenet priority queues which are very common ds
// they are also used with graph traversal algo

// Big O of binary Heap
// insertion and removal are both O(log n) so super fast!!
// why is this? - log n is log base 2 of n
// each time we go down a step in a binary heap or a binary tree structure, we have two times the number of nodes
// if we wanted to insert the largest number in a MaxBinaryHeap, it means it needs to make it all the way to the front. If there were 16 elements in the list, you make basically 4 comparisons
// worst case? - heaps can't look like a one sided binary search tree because nodes are always need to be filled so there is no possiblity for us to have a one sided tree in a heap so the worst case for insertion and removal is still log n
// time complexity for a search is O(n). There is no implied order between siblings so we can't make a decision on where to traverse. You might be able to eliminate some nodes based on their value but it's definitely not a guarantee.

// What is a binary heap? 
// it is similar to BST but will different rules
// in a MaxBinaryHeap, parent nodes are always larger than child nodes
// in a MinBinaryHeap, parent nodes are always smaller than child nodes

// MaxBinaryHeap
//        41
//   39        33
// 18  27   12
// Each parent has at most two child nodes
// the value of each parent node is always greater than its child nodes
// in a max heap, the parent is greater than the children but there are no guarantees between sibling nodes
// a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are always filled out first

// MinBinaryHeap
//              1
//         2          3
//    17     19    36     7
//  25 100
// children are larger than the parent and no relationships between the siblings

// Implement a priority queue using a heap!
// heap can be represented using a list/arrays
// any index of n, left child is stored at 2n+1 and right child is stored at 2n+2
// if we have a child at index n, its parent is at index (n-1)/2 floored


// [41,39,33,18,27,12] and add in 55
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // Add value to the end and bubble up (large values will bubble up to its correct spot)
    // push the value into the valus property on the heap
    // Bubble up
    // create a var called index which is the length of the values property -1
    // create a var called parentIndex which is the floor of (index - 1)/2
    // keep looping as long as the values element at the parentIndex is less than the values element at the child index
    // swap the value of the values element at the parentIndex with the value of the element property at the child index
    // set the index to be the parentIndex and start over
    insert(value) {
        this.values.push(value); //[41,39,33,18,27,12,55]
        // last item
        let index = this.values.length - 1; //6

        // this is assuming that the value pushed in is bigger than the parent. If it's not it's already in a correct place
        while (index > 0) { // if index is 0, we know it's the greatest element. If we use sth like while (true), it will compare 0 to -1 index

            // parent of the last item
            // the parent index needs to be inside the while loop or else the second round, index and parentIndex will be the same. It needs to be redeclared every loop because the parentIndex will change!
            let parentIndex = Math.floor((index - 1)/2); //2


            if (this.values[index] <= this.values[parentIndex]) break;
            let temp = this.values[parentIndex]; // 55
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;

            // you want to reset the index because you want to move up the list and find the next parent
            index = parentIndex;
        }
        return this.values;
    }


    // in a MaxBinaryHeap, it means removing the maximum
    // in a MinBinaryHeap, it means removing the minimum
    // removing from a heap includes removing the root, replacing with the most recently added and adjust (sink down)
    // sink down = bubble down, casecade-down, etc

    // swap the first value in values with the last one
    // pop from values so that you can return that value later
    // have the new root sink down to the correct spot. HOW?
    // your parent index starts at 0 which is the root
    // find the index of the left child (2 x index + 1) make sure it's not out of bounds
    // find the index of the right child (2 x index + 2)
    // if the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child
    // the child index you swapped to now becomes the new parent index
    // keep looking and swaping until neither child is larger than the element
    // return the old root
    // [41,39,33,18,27,12]
    // [39,27,33,18,12]
    extractMax() {
        const oldRoot = this.values[0]; // return later;
        const last = this.values[this.values.length - 1];
        this.values[0] = last;
        this.values[this.values.length - 1] = oldRoot;
        this.values.pop();

        let parent = 0;

        while(parent < this.values.length - 1) {
            let leftIndex = (2 * parent) + 1;
            let rightIndex = (2 * parent) + 2;
            
            // my solution did not check if indexes are out of bounds;
            let parentValue = this.values[parent];
            // if (leftIndex < this.values.length) {
            // }
            // if (rightIndex < this.values.length) {
            // }
            let leftValue = this.values[leftIndex];
            let rightValue = this.values[rightIndex];

            if (leftValue > parentValue && rightValue > parentValue) {
                if (leftValue > rightValue) {
                    this.values[parent] = leftValue;
                    this.values[leftIndex] = parentValue;
                    parent = leftIndex;
                } else {
                    this.values[parent] = rightValue;
                    this.values[rightIndex] = parentValue;
                    parent = rightIndex;
                }
            } else if (leftValue > parentValue) {
                this.values[parent] = leftValue;
                this.values[leftIndex] = parentValue;
                parent = leftIndex;
            } else if (rightValue > parentValue) {
                this.values[parent] = rightValue;
                this.values[rightIndex] = parentValue;
                parent = rightIndex;
            } else if (leftValue < parentValue && rightValue < parentValue) {
                break;
            }

        }
        return oldRoot;
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || // leftChild was never set but right is larger than the ele
                    (swap !== null && rightChild > leftChild)) { // leftChild was swapped but rightChild is larger than leftChild
                        swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class MinBinaryHeap {
    constructor() {

    }
}