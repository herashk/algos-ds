// insertion - O(log n) good!
// searching - O(log n) good!
// basically, if you double the number of nodes, you only increase the number of steps to insert/find by 1
// this only works for BST because it is sorted
// they are not guaranteed!
// But if you have only one sided tree, your insertion and searching will be O(n). In this case, you can just use a linked list or choose a different root and restructure the tree

// base of Binary Search Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // tree will make a new node and add it to the correct place depending on what that number is
    // iteratively or recursively!!
    // create a new node. check if root exists, if not the value becomes the root
    // if root, check if the value of the new node is greater than or less than the value of the root
    // if it is greater than root's value, check to see if there is a node to the right. If there is, move to that node and repeat these steps. If not, add that node as the right property
    // if it is less than root's value, check to see if there is a node to the left. If there is, move to that node and repeat these steps. If not, add that node as the left property
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 
        // traverse it as if you would traverse a linked list
        let current = this.root;
        while (true) {
            // if duplicates are not handled, ill get an infinite loop!
            if (value === current.value) {
                return undefined;
            }
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                // update current if there is already a right
                current = current.right;
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                // update current if there is already a left
                current = current.left;
            }
        }
    }

    // solution from another student
    insertRecursive(value){
        var newNode = new Node(value);
        if (traverse(this.root)) this.root = newNode;
     
        function traverse(current){
            if (current === null) return true;
     
            if (newNode.value > current.value) {
                if (traverse(current.right)) current.right = newNode;
            } else if (newNode.value < current.value) {
                if (traverse(current.left)) current.left = newNode;
            }
     
            return false;
        }
     
        return this;
    }

    // search to see if the value is in a tree
    // starting at the root, check if root exists, if not we are done searching
    // if there is a root, check if the value is the same as the value passed in. If so, we are done
    // if not, check to see if the value is greater than or less than the root's value
    // if it is greater, check to see if there is a node to the right. If there is, move to that node and repeat these steps. If not, we are done searching
    // if it is less, check to see if there is a node to the left. If there is, move to that node and repeat these steps. If not, we are done searching
    find(value) {
        if (!this.root) return false;
        if (value === this.root.value) return true;
        let current = this.root;
        while (true) {
            if (value > current.value) {
                if (!current.right) {
                    return false;
                }
                current = current.right;
                if (value === current.value) {
                    return current;
                }
            } else {
                if (!current.left) {
                    return false;
                }
                current = current.left;
                if (value === current.value) {
                    return current;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
// this is a simple way of populating a BST. But this is annoying so we will write an insert method which figures out where value should go!
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9)