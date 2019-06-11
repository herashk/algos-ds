// arr implementation
// you can use pop and push (end) or shift and unshift (end) but shift and unshift with arrays are not ideal because you need to reindex everything

// LL implementation (similar to SLL)
// in a stack, push and pop are supposed to be O(1)

// insertion and removal O(1)
// searching O(n)
// access O(n)
// LIFO, are used to handle fn invocations (call stack) for operations like undo/redo and for routing (pages visited)
// they are not a build in ds in JS but relatively simple to implement

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // accepts a value, create a new node w/ that value
    // if no nodes, set the first and last property to be the newly created node
    // if there is at least 1 node, create a var that stores the current first property on the stack
    // reset the first to be the new node
    // set the next property on the node to be the previously created var, increment size by 1
    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        this.size++;
        return this.size;
    }

    // if no nodes, return null
    // create a temp var to store the first property on the stack
    // if only 1 node, set the first and last prop to be null
    // if more than 1 node, set the first prop to be the next property on the current
    // decrease length and return the stored value
    pop() {
        if (!this.first) return null;
        const popped = this.first;
        if (this.size === 1) { 
            this.first = null;
            this.last = null;
            // OR
            // if (this.first === this.last) { this.last = null; }
        } else {
            this.first = this.first.next;
            // I guess you don't have to do this since you are only returning a value? answer says YES, since we are just returning the value, not the node itself, the node will never be referenced again. So this meansn that it will get picked up by the engine's garbage collector. so it will never affect the stack once popped and no memory leak takes place
            // popped.next = null;
        }
        this.size--;
        return popped.value;
    }

    pop2() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }
}