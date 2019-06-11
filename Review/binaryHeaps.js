class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

     // heap can be represented using a list/arrays
     // any index of n, left child is stored at 2n+1 and right child is stored at 2n+2
     // if we have a child at index n, its parent is at index (n-1)/2 floored
    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            if (this.values[index] <= this.values[parentIndex]) {
                break;
            } else {
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[index];
                this.values[index] = temp;
                index = parentIndex;
            }
        }
        return this.values;
    }

    // [41,39,33,18,27,12]
    // [39,27,33,18,12]
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
        let parentIndex = 0;
        const element = this.values[parentIndex];

        while(true) {
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            // let leftChild, rightChild;
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            let swap = null;

            if (leftChildIndex < this.values.length) {
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < this.values.length) {
                if (((rightChild > element && swap === null)) ||
                   ((rightChild > leftChild && swap !== null))) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = element;
            parentIndex = swap;
        }
    }

    // review later
    heapify() {

    }
}


//        41
//   39        33
// 18  27   12