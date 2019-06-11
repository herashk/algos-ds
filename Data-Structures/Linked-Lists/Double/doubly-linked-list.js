// construct a DLL and compare and contrast DLL to SLL
// implement basic operations on a DLL
// almost identical to SLL, except every node has another pointer, to the previous, points both ways
// takes up more memory than SSL but it's much more flexible
// since there is a previous property, you can iterate from the tail 

// insertion - O(1) at the beginning and end
// removal - O(1) at the beginning and end / not the case for SLL
// searching - O(n) technically it is O(n/2) -> O(n)
// access - O(n)

// DLL are almost the same as SLL except there's an additional pointer to previous node
// a web page back and previuos = DLL!!
// beter than SLL for finding nodes and can be done in half the time but they do take up more memory because of the extra pointers!


class Node {
    constructor(value, next, previous) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // create a new node w/ the val passed in, if the head property is null, set the head and tail to be the newly created node, if not, set the next property on the tail to be that node, set the previous property of the newly created node to be the tail, set the new node as the new tail,increment length, return list
    push(value) {
        const item = new Node(value);
        if (!this.head) { // this.length === 0
            this.head = item;
            this.tail = this.head;
        } else {
            this.tail.next = item;
            item.previous = this.tail;
            this.tail = item;
        }
        this.length++;
        return this;
    }

    //if there is no head, return undefined, store the current tail in a var to return later, if the length is 1, set the head and tail to be null, update the tail to be the previous node, set the new tail's next to null, set the old tail's previous to null, decrease length, return the stored var
    pop() {
        if (!this.head) return undefined;
        let popped = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;;
            this.tail.next = null;
            // you want to sever the connection both ways, if not if you have a reference to the popped node, you can to .previous on it to traverse through the list from the back
            popped.previous = null;
        }
        this.length--;
        return popped;
    }
    // if length is 0, return undefined, store current head property in a var (old head), if length is 1, set the head and tail to be null, otherwise, update the head to be the next of the head, set the head's previous to null, set the old head's next to null, decrement length, return old head
    shift() {
        if (!this.head) return undefined;
        let shifted = this.head;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next; //shifted.next
            this.head.previous = null;
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }

    // create a new node, if the length is 0, set the head and tail to be the new node, otherwise set the previous property on the head of the list to be the new node, set the next property on the new node to be the head property, update head to be the new node, increment length and return list
    unshift(value) {
        const item = new Node(value);
        if (this.length === 0) {
            this.head = item;
            this.tail = item;
        } else {
            this.head.previous = item;
            item.next = this.head;
            this.head = item;
        }
        this.length++;
        return this;
    }

    // if the index is less than 0 or greater or equal to the length, return null
    // if the index is less than or equal to half the length of the list, loop through the list from front, return the node that's found
    // if the index is greater than the half the length of the list, loop through the list from theh back and return node that's found
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let head = this.head;
        let tail = this.tail;
        if (index <= (this.length/2)) {
            for (let i = 0; i < this.length; i++) {
                // the conditional should come first because you don't want to set head to head.next when index is equal to i
                if (index === i) {
                    return head;
                }
                head = head.next;
            }
        }
        if (index > (this.length/2)) {
            for (let i = this.length - 1; i >= 0; i--) {
                if (index === i) {
                    return tail;
                }
                tail = tail.previous;
            }
        }
    }

    get2(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.previous;
                count--;
            }
        }
        return current;
    }

    // use the get method, if it returns a valid node, set the value of that node to be the value passed to the function, return. Otherwise return false
    set(index, value) {
        const got = this.get(index);
        if (got !== null) {
            got.value = value;
            return true;
        } 
        return false;
    }

    // check for valid index
    // if index is 0, use unshift
    // if index is the same as the length, use push
    // otherwise, use get method to access the item at index - 1
    // set the next and prev properties on the correct nodes to link eveyrthing together, increment length, return true
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let inserted = new Node(value);
        let previous = this.get(index - 1);
        let after = previous.next;

        previous.next = inserted; inserted.previous = previous;
        inserted.next = after; after.previous = inserted;
        this.length++;
        return true;
    }

    // check for valid index
    // if index = 0, use shift, if index is the same as the length - 1, pop
    // use get method to retrieve the item to be removed
    // update next and previous props to remove the found node from the list
    // set next and previous to null on the found node (sever connections!!)
    // decrement length and return removed node
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let removed = this.get(index);
        let before = removed.previous;
        let after = removed.next;
        before.next = after; after.previous = before;
        removed.next = null; removed.previous = null;
        this.length--;
        return removed;
    }

    reverse(){
        if (this.length === 0) return undefined;
        if (this.length === 1) return this;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let before = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = before;
            current.prev = next;
            
            before = current;
            current = next;

        }
        return this;
    }
}