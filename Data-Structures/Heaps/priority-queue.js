// a ds where each element has a priority
// elements with higher priorities are served before elements with lower priorities - emergency room in a hospital!
// they are separate from heaps! they are abstract concepts!
// a naive version - use a list/array to store all, iterate over the entire thing to find the highest priority ele

// let's do it with a MinBinaryHeap
// lower number means higher priority
// enqueue method accepts a value and priority. Makes a new node, and puts it in the right spot based off of its priority
// dequeue method removes root element, returns it, and rearranges heap using priority
// value does not matter. Heap is constructed using Priority!!

// Big O of priority queue!!
// log n for insertion and removal!

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // if we are doing this using MinBinaryHeap, we are extracting minimum value at the root
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    // helper to dequeue
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[index];

        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let rightChild, leftChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                        swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        this.values.push(newNode);
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);

            if (this.values[index].priority >= 
                this.values[parentIndex].priority) {
                break;
            }
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
        }
        return this.values;
    }
}

let ER = new PriorityQueue();
ER.enqueue('cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

// should dequeue in lowest priority number
// what if sth has the same priority? right now our code doesn't guarantee that the same priority level will be returned in the order they are inserted in
// no guaranteed order between siblings!! that's a characteristic of a heap
// what we can do is add in a time to the Node
// this.insertTime = date.now()
// so when we are comparing, if priority is the same, we can compare the insertTime to see which one was inserted first!



