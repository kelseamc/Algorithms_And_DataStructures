/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true


Input: root = [1,2,2,null,3,null,3]
Output: false
*/


let isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    
    // pass in the left and right child nodes
    return isMirror(root.left, root.right);
};



let isMirror = function(tree1, tree2) {
    // if either node is null, we are at a leaf node. either they are the same, in which case we can return true
    // if one is null and the other is not, we can return false
    if (tree1 === null || tree2 === null) {
        return tree1 === tree2;
    }
    
    // check the values of the nodes. if they are not the same, we can return false. otherwise, skip this if statement
    if (tree1.val !== tree2.val) {
        return false;
    }
    
    // since we got past the first two if statements, make two recursive calls to test if the children are mirror images
    // the left node of the right child should be the same as the right node of the left child
    // likewise, the left node of the left child should be the same as the right node of the right child
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};