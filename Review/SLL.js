class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add a node to the end of the SLL
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // remove a node at the end of the SLL
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // return found node at given index
    get(index) {
        if (!this.head) {
            return null;
        }
        if (index < 0 || index >= this.length) {
            return null;
        } 
        let current = this.head;
        let count = 0;
        // you want to break when count reaches the index
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }
    // insert node at specific index
    insert(index, value) {
        const newNode = new Node(value);

        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return true;
        }
        if (index === 0) {
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return true;
        }

        let current = this.head;
        let count = 0;
        // get to the variable before the given index. You can use a .get here as well
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        // don't forget to increment length!!
        let after = current.next;
        current.next = newNode;
        newNode.next = after;
        this.length++;

        return true;
    }

    set(index, value) {
        if (!this.head) {
            return false;
        }
        if (index < 0 || index >= this.length) return false;

        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        current.value = value;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (!this.head) return false;

        let removed;
        if (index === 0) {
            removed = this.head;
            this.head = this.head.next;
            removed.next = null;
        } else {
            let count = 0;
            let current = this.head;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            removed = current.next;
            let after = current.next.next;
            current.next = after;
        }
        this.length--;
        return removed;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next;
        let before = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = before;
            before = current;
            current = next;
        }
        return list;
    }





    // rotate all nodes in the list by an integer (n) passed in
    // rotate(num) {

    //     if (num <= 0) return this;
    //     var currentNode = this.head;
    //     var count = 1;
    //     while (count < num && currentNode !== null) {

    //         currentNode = currentNode.next; // currentNode will be nth node
    //         count++;
    //     }
    //     if (currentNode === null) return this;
    //     var current = currentNode; //store the nth node into a variable
    //     while (currentNode.next !== null) { //loop from the nth node to the end
    //         currentNode = currentNode.next; // currentNode point to last node
    //     }
    //     console.log(currentNode);
    //     currentNode.next = this.head; // last node will point to the previous head
    //     this.tail = current;
    //     this.head = current.next; //the new head will be the next of nth node
    //     current.next = null; //next of nth node will be null
    //     //return this;
    // }
}