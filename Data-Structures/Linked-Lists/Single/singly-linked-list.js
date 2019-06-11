// define what a singly linked list is
// compare and contrast it to arrays
// implement methods like insertion, removal, and traversal

// SLL - ds that contains a head, tail, and length property consist of nodes and each nodes has a value and a pointer to another node or null

// SLL vs array
// SLL - collection of nodes, has no index, array does and ds that points to a bunch of nodes!
// SLL - pointers point to the next node in just one direction
// SLL - skyscraper that has no elevators! only stairs and each floor is connected to the next one
// SLL - if I want to find or insert sth in the middle, you have to start at the beginning and traverse until the correct spot. Random access is not allowed!
// SLL - inserting at beginning and end is easy
// array - skyscraper with elevators! if I want to go to FL5, I can go there. Indexed in order and can be quickly be accessed at a specific index
// array - insertion and deletion can be expensive since you have to reindex all elements

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null; // at the beginningn there is nothing next to it
    }
}

// this is not efficient because you will be writing .next multiple times! This can be replaced with a .push method on a SLL class
// let first = new Node('hi')
// first.next = new Node('there')
// first.next.next = new Node('how are you')

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null; // at the beginning there is no node there
        this.tail = null;
    }

    // should accept a value, create a new node using the value passed in, if there is no head property on the list, set the head and the tail to be the newly created node, otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node,increment the length by one, return the linked list
    push(value) {
        const item = new Node(value);
        if (!this.head) {
            this.head = item;
            this.tail = this.head; // head and the tail are the same thing!
            // this.tail = item;
        } else {
            this.tail.next = item;
            this.tail = item;
        }            
        this.length++; // this is updated whether this.head exists or not
        return this;
    }

    // traverse() {
    //     let current = this.head;
    //     while (this.head) {
    //         // once next is null, this loop will exit
    //         current = current.next;
    //     }
    // }

    // GOTCHA: once you remove a node from the end of the LL, you have to reset the tail which means you need to traverse through the list again to assign/update the new tail (second to last item and make that the new tail)
    // how do we find the second to last item? make a var called previous. If the previous.next is the tail, assign that tail to a var and return that var, and set previous to the new tail
    // if there are no nodes in the list, return undefined, loop through the list until you reach the tail, set the next property on the 2nd to last node to be null, set the tail to be the 2nd to last node, decrement the length of the list by 1, return the value of the node removed
    pop() {
        if (!this.head) return undefined;
        // what's going to reach the end, start from the top
        let current = this.head;
        // what's going to become the new tail, they both start at the beginning so assign newTail to current
        let newTail = current;

        // while there is a next node
        while (current.next) {
            newTail = current; // set newTail to the current node
            current = current = current.next; // move current one up eventually reaching the end/null
        }
        this.tail = newTail;
        this.tail.next = null; // this severs the connection with the original tail/last node
        this.length--;

        // if there is one item left in the list, you can still pop it off and substract 1 which makes the length 0, but there is still a head and null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // if there are no nodes, return undefined, store the current head property in a var, set the head property to be the current head's next property, decrement length by 1, return the value of the removed node
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead.value;
    }

    // adding a new node to the beginning of the list, fn that accepts a value and create a new node using the value passed in, if there is no head property on the list, set the head and tail to be the newly created node, otherwise set the newly created node's next property to be the current head property on the list, set the head property on the list to be that newly created node, increment length by 1 and return the list
    unshift(value) {
        const item = new Node(value);
        if (!this.head) {
            this.head = item;
            this.tail = this.head;
            // this else is crucial, because w/o the else, we are setting the head and the tail to be the new node, so the new node.next will be the new node again! GOTCHA!!
        } else {
            item.next = this.head;
            this.head = item;
            this.length++;
        }
        return this;
    }

    // if index = 0, return the first item in the list, if indext = 3, return the 4th item, if index is less than 0 or greater than or equal to the length of the list, return null, loop through the list until you reach the index and return the node at that specific index, use a count var
    get(index) {
        if (index < 0 || index >= this.legth) return null;

        let count = 0;
        let current = this.head;
        while (count < index) { // count !== index
            current = current.next;
            count++;
        }
        console.log('count & current ->', count, current);
        return current;
    }

    // changing the value of a node based on its position in the list
    // the fn should accept index and value, and can use the get fn to find the specific node, if the node is not found, return false. if the node is found, set the value of that node to be the value passed to the fn and return true
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    // adding a new node to the position specified
    // get utilize .get, if the index is less than 0 or greater than the length, return false. If the index is the same as the length, push a new node to the end of the list (push), if the index is 0, unshift a new node to the start of the list. Otherwise, use .get to access the node at the index -1, set the next property on that node to be the new node, set the next property on the new node to be the previous next. increment the length and return true
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            // use !! to coerce this into a boolean opposite
            return !!this.push(value);
        } 
        if (index === 0) {
            return !!this.unshift(value);
        } 
        const newItem = new Node(value);
        const nodeBefore = this.get(index - 1);
        let temp = nodeBefore.next; // always assign this to temp otherwise you are assigning new node's next to the new node
        nodeBefore.next = newItem;
        newItem.next = temp;
        this.length++;
        return true;
    }

    // removing a node at a specific position
    // if the index is less than zero or greater than the length, return undefined, if the index is the same as the length - 1, pop, if the index is 0, shift, otherwise, using the get method, access the node at the index -1, set the next property on that node to be the next of th e next node, decrement the length, return the vaule of the node removed
    remove(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === length - 1) return this.pop();
        if (index === 0) return this.shift();
        const nodeBefore = this.get(index - 1);
        const removed = nodeBefore.next;
        nodeBefore.next = removed.next;
        this.length--;
        return removed.value;
    }

    // you do it in place, traverse and reverse
    // swap the head and tail, create a var called next, previous and a node to initialize to start at the head, loop through the list, set next to be the next property on whatever the node is (current.next), set next to be the next property on whatever the node is, set the next property on the node to be whatever prev is, set prev to be the value of the node var, set the node var to be the value of the next var
    // 13 (head) -> 27 -> 32 -> 71 (tail)
    // 13 (tail) <- 27 <- 32 <- 71 (head)
    reverse() {
        let node = this.head; //13
        this.head = this.tail; // 71
        this.tail = node; //13

        let next;
        // at the beginning this is going to be null because there is nothing there! We need to make sure that the end of our list,tail.next is null
        let previous = null;
        for (let i = 0; i < this.length; i++) {
            // you want to save the next variable for reference
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();

// SLL BIG O
// insertion at the end or front - O(1)
// removal - O(1) or O(n)
// searching - O(n)
// access - O(n)