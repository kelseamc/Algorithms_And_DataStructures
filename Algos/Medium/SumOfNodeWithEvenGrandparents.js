/* 
Given a binary tree, return the sum of values of nodes with even-valued grandparent.  
(A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
*/

var sumEvenGrandparent = function(root) {
    let sum = 0;
    if(!root) return 0; // if we reached end of tree current node will be null = basecase 
    if(root.val % 2 === 0){ // if the current node is even // this is our grandparent
        if(root.left && root.left.left){ // check if parent is valid and if left child is valid
            sum += root.left.left.val; // add the child value to sum b/c grandparent is even
        }
        if(root.left && root.left.right){ // check if parent is valid and right child is valid
            sum += root.left.right.val; // add child value to sum 
        }
        if(root.right && root.right.left){ // same thing but for the right of current node
            sum += root.right.left.val;
        }
        if(root.right && root.right.right){
            sum += root.right.right.val;
        }
    }
    if(root.left){ // check if left child (parent) is valid, if so move current pionter to that node and 
                   // check everything again as this being new gradparent node
        sum += sumEvenGrandparent(root.left);
    } // recursive calls
    if(root.right){ // same for right
        sum += sumEvenGrandparent(root.right);
    }
    return sum;
    
};