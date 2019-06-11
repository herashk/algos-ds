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

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {
            if (current.value === newNode.value) {
                return undefined; // handling duplicates
            }
            if (newNode.value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return undefined;
        }
        if (this.root === value) return true;

        let current = this.root;
        while (true) {
            if (value > current.value) {
                if (!current.right) {
                    return false;
                } 
                current = current.right;
                if (current.value === value) {
                    return current;
                }
            } else {
                if (!current.left) {
                    return false;
                }
                current = current.left;
                if (current.value === value) {
                    return current;
                }
            }
        }
    }

    remove(val) {

    }

    //      10
    //   6     15
    //3   8       20

     // preorder - visit the entire left and then then right! - should be printed in the order of [10, 6, 3, 8, 15, 20]
    // pre so root comes first in the result
    DFSPre() {
        let result = [];
        let current = this.root;

        function helper(node) {
            result.push(node.value);
            if (node.left) {
                helper(node.left);
            }
            if (node.right) {
                helper(node.right);
            }
        }
        helper(current);
        return result;
    }

      // postorder - we visit a node AFTER we've visited the left and the right - [3, 8, 6, 20, 15, 10]
      // post so root comes last in the result
    DFSPost() {
        let result = [];
        let current = this.root;

        function helper(node) {
            if (node.left) {
                helper(node.left);
            }
            if (node.right) {
                helper(node.right);
            }
            result.push(node.value)
        }
        helper(current);
        return result;
    }

      // [3,6,8,10,15,20]
      // traverse the left first, then push the var in and then traverse the right
      // in order so root is in the middle of left and right nodes
    DFSIn() {
        let result = [];
        let current = this.root;

        function helper(node) {
            if (node.left) {
                helper(node.left);
            }
            result.push(node.value);
            if (node.right) {
                helper(node.right);
            }
        }
        helper(current);
        return result;
    }

    // with this problem, the inorder traversal is useful - // [3,6,8,10,15,20]
    // but instead of traversing the left first, ill traverse the right first since I want to find the second largest
    // this is a really clever way to using the callstack
    // increment count after helper(node.right) that means when we reach the farthest node.right and that node's right is null, it will break out of the base case, return and then reach that count++. After, that it will check if count is equal to 2 but it's not yet. so it will move to calling the helper with node.left but node.left is also null and will return because node is right now 16. then officially we are done with the callstack for node at 16 and move to node 13's callstack. But helper(node.right)/ helper(13.right) was already called so we move to count++ right away which will increment count to 2.
    findSecondLargestNode() {
        if (!this.root) {
            return undefined;
        }
        let count = 0;
        let found;

        function helper(node) {
            if (count >= 2 || node === null) { // base case
                return;
            }
            helper(node.right);
            count++;
            if (count === 2) {
                found = node;
                console.log('current', node.value);
            }
            helper(node.left);
        }
        helper(this.root);
        return found;
    }

    // REVIEW THIS LATER
    // https://js-algorithms.tutorialhorizon.com/2015/10/18/determine-if-a-binary-tree-is-balanced/
    // https://kevinwin.com/blog/How-to-check-if-a-binary-tree-is-balanced-in-JavaScript/
    isBalanced() {
        // retruns true if BST is balanced otherwise return false
        // balanced tree = tree where the depth of all leaf nodes or nodes with single children differ by no more than one
       
    }

    // review later!!!!
    isBalanced() {
        if (!this.root) return undefined;
        function heightOfTree(root) {
            if (!root) return 0;
            var left = heightOfTree(root.left);
            var right = heightOfTree(root.right);
            if (left > right) return left + 1;
            else return right + 1;
        }

        function helper(root) {
            if (!root)
                return true;
            var l = heightOfTree(root.left);
            var r = heightOfTree(root.right);
            //console.log("diff " + Math.abs(l -r) + " data " + root.data);
            return (Math.abs(l - r) <= 1 && helper(root.left) && helper(root.right));
        }
        return helper(this.root);
    }

    //      10
    //   6     15
    //3   8       20
    // should be printed in the order of [10, 6, 15, 3, 8, 20], use a queue
    BFS() {
        let result = [];
        let queue = [];
        let current = this.root;
        let dequeued;

        if (!this.root) return undefined;
        queue.push(this.root);
        while (queue.length) {
            current = queue.shift();
            result.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return result;
    }

}
