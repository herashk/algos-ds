// how do we visit every node one time?
// take advantage of recursion!!

// two main approaches to traversing a tree - 1) breadth first 2) depth first
// they refer to general directions
// BFS is working across the tree first horizontally. Visit every node on the same sibling level!
// DFS has three main orders! - you are going down vertically and coming back up. 1) inorder 2) preorder 3) postorder

// Steps - iteratively
// create a queue (This can be an array) and a var to store the values of nodes visited (building up data to return at the end)
// place the root node in the queue
// loop as long as there is anything in the queue
// dequeue a node from the queue and push the value of the node into the var thath stores the nodes
// if there is a left property on the node dequeued, add it to the queue
// if there is a right property on the node dequeued, add it to the queue
// return the variable that stores the values

// if there is more than two children to a single node (more than left and right), we can also make it dynamic (use a loop to get all the children)

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

// should be printed in the order of [10, 6, 15, 3, 8, 20]

class BFSTree {
    constructor() {
        this.root = null;
    }

    bfsearch() {
        let queue = [];
        let visited = [];
        let firstNode = this.root;
        if (!firstNode) {
            return undefined;
        } else {
            queue.push(this.root);

            while(queue.length) {
                firstNode = queue.shift();
                visited.push(firstNode); // I can also do push(firstNode.value) to see what prints out easily
                if (firstNode.left) {
                    queue.push(firstNode.left);
                }
                if (firstNode.right) {
                    queue.push(firstNode.right);
                }
            }
            return visited;
        }
    }
}