// traverse down until you hit the end of the tree at some point

// 1) PreOrder
// with a tree, you always need to do the 'visit' and print out that visit var later

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//      10
//   6     15
//3   8       20

class BFSTree {
    constructor() {
        this.root = null;
    }

    // preorder - visit the entire left and then then right! - should be printed in the order of [10, 6, 3, 8, 15, 20]
    // recursive steps
    // create a var to store the values of nodes visited
    // store the root of the BST in a var called current
    // write a helper function which accepts a node
    // push the value of the node to the var that stores the values
    // if the node has a left, call the helper function with the left property on the node recursively
    // if the node has a right, call the helper function with the right property on the node recursively
    // invoke the helper func with the current var and return the array of values
    dfsPreOrder() {
        let visited = [];
        // assigning this.root to a current means you can assign which node to traverse from
        let current = this.root;

        if (!this.root) return undefined;

        function traverse(node) {
            visited.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return visited;
    }

    // postorder - we visit a node AFTER we've visited the left and the right - [3, 8, 6, 20, 15, 10]
    // root is the last thing visited
    // create a var to store the values of visited nodes
    // store the root in a var called current
    // helper func that accepts a node
    // if node has a left, call the helper with node.left
    // if node has a right, call the helper with node.right
    // push the values of the node to the var that stores
    // invoke the helperfunction with the current var
    // return the stored var
    dfsPostOrder() {
        let visited = [];
        let current = this.root;

        if (!this.root) return undefined;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visited.push(node);
        }
        traverse(current);
        return visited;
    }

    // [3,6,8,10,15,20]
    // traverse the left first, then push the var in and then traverse the right
    dfsInOrder() {
        let visited = [];
        let current = this.root;

        if (!this.root) return undefined;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            visited.push(node);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return visited;
    }
}