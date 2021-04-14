/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up 
all the values along the path equals targetSum.

A leaf is a node with no children.


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

Input: root = [1,2,3], targetSum = 5
Output: false

Input: root = [1,2], targetSum = 0
Output: false
*/
 // Solving this recursively

var hasPathSum = function(root, targetSum) {
    if (root === null) return false // check to see if the node we are currently on is null, basecase that ends recursive loop when at end of tree
    
    if (targetSum === root.val && root.left === null && root.right === null) return true // this checks if the current node we are on is equal to the
    // remaining target sum and is also a leaf on the tree indicating end of path
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    // here we are splitting the tree in half and recusively moving down the left and right side of the current node we are on
};