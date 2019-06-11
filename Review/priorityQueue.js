class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// enqueue method accepts a value and priority. Makes a new node, and puts it in the right spot based off of its priority
// dequeue method removes root element, returns it, and rearranges heap using priority
// value does not matter. Heap is constructed using Priority!!
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let index = 0;
        const element = this.values[index];

        while(true) {
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            let swapIndex = null;
            // check children indexes are in bound
            if (leftChildIndex < this.values.length) {
                if (leftchild.priority > element.priority) {
                    swapIndex = leftChildIndex;;
                }
            }
            if (rightChildIndex < this.values.length) {
                if ((rightChild.priority > element.priority && swapIndex === null) ||
                    (rightChild.priority > leftChild.priority && swapIndex !== null)) {
                        swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }
    }

    // this is a process of bubbling up
    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        // push it in the end
        this.values.push(newNode);
        // declare the index after you push into the values since the index will be +1!!!!
        let index = this.values.length - 1;


        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            if (this.values[index].priority <= this.values[parentIndex].priority) {
                break;
            } else {
                [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
                index = parentIndex;
            }
        }
        return this.values;
    }
}