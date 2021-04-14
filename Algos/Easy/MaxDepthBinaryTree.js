// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */


 var maxDepth = function(root) {
   
    let maxNodes = (node, sum) => { // recursively checks valid node and returns sum to represent depth
        if (node === null) return sum
        
        return Math.max(maxNodes(node.left, sum + 1), maxNodes(node.right, sum + 1)) // splitting the tree into left and right halves from root and calculating
                                                                                    // the depth of each side and return the max of the two depths 
    }
    
    return maxNodes(root, 0) // passing in root (3) and the sum (depth starts at zero)
};