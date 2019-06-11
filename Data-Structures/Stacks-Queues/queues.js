// FIFO structure
// used for background tasks, uploading resources, printing queue, 

// insertion and removal O(1)
// searching access O(n)
// with stacks and queues, you only care about insertion and removal if you need to do searching or accessing, you might want to use another ds

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to the end, basically like a push
    // create a new node using the value
    // if no nodes, set the node to be the first and last prop
    //
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    // remove from the beginning, like a shift
    // if no node, return null
    // store the first var in a var, see if the first is the same as last, if so set the first and last to be null
    // if more than 1 node, set the first prop to be the next property of first
    // decrement size by one, return the value of node dequeued
    dequeue() {
        if (!this.first) return null;
        let first = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return first.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
