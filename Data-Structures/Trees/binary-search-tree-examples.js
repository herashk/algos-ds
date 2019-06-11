class BinarySearchTree {
    constructor() {
        this.root = null;
    }   
 
    find(value) {        
        let node = this.root;
 
        while(true) {
            if(node === null)
                return undefined;
 
            if(value > node.value) {
                node = node.right;
            } else if(value < node.value) {
                node = node.left;
            } else {
                return node;
            }
        }
    }
 
    findRecursive(value, node = this.root) {
        if(node === null)
            return undefined;
        
        if(value > node.value)
            return this.findRecursive(value, node.right);
        else if(value < node.value)
            return this.findRecursive(value, node.left);
        else
            return node;
    }
 
    contains(value) {
        return !!this.find(value);
    }
}
 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}