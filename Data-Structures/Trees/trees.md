1. Define what a tree is
2. Compare anad contrast trees & lists
3. Explain differences between trees, binary trees
4. implement operations on binary search trees

What the F is a tree?
- DS that consists of nodes in a parent-child relationship
- we end up with branches!!!!!
- top most node = ROOT
- Lists are linear. One line through the data structure.
- Tress are NON linear. They can branch and there are more than 1 pathways to a tree... Just like the journey of life (SIGH)
- SLL is a very special case of tree if you think about it! - bunch of nodes with just 1 branch each
- A node can only point to a child in a tree.
- every branch is pointing away from the root
- there should only be one root/one entry point

TREE TERMS ------------------------------------------------------------------
root - top node
child - node directly connected to another node when moving away from the root
parent - the converse notion of a child
siblings - a group of nodes with the same parent
leaf - a node w/ no children
edge - connection between one node and another

USAGES ---------------------------------------------------------------------
HTML DOM
Network Routing
Abstract Syntax Tree
Artificial intelligence (minimax tree??)
Folders in an operating system!
jSON

TYPES ---------------------------------------------------------------------
Binary Tree - each node can have at 2 two children
Binary Search Tree - special case of a binary tree, at most have 2 children per node, they are kept in an order/have specific       
                    ordering rules, every item that is lower than the node is located on the left, greater is located on the right

   6
 3   8  


BFS vs DFS
if you are working with a tree that is really wide, BFS can take up a lot of memory becase you are storing all vars in a queue. With DFS, there are fewer nodes to keep track of since you are going down the left and then the right. It is not about time since we visit every node once. 

PreOrder vs Post vs In
InOrder - used commonly with binary search trees. We get all nodes in the tree in their underlying order (lowest to higher)
PreOrder - can be used to export a tree structure so that it is easily reconstructed or copied
PostOrder - 