class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // with a stack, the first is the top of the stack!!
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let first = this.first;
            this.first.next = newNode;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        let popped = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return popped.value;
    }
}
