/* 

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.

Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
*/

var findSecondMinimumValue = function(root) {
    let min = root.val; // this is minimum value
    let res = Infinity; // this is going to store second minumum value as we work throught the tree

    const dfs = function(node) {  // helper function to check each node in tree
      if (!node) { // this is recursive so we need a base case for when we reach end of tree (node === null)
        return;
      }

      if (node.val === min) { // check if node value is equal to min value
        dfs(node.left); // recursive call helper function on the left node
        dfs(node.right); // recursive call helper function on the right node
      } else if (node.val > min && node.val < res) { // else if the current node is greater than the min value and less than the res value, this becomes                                             
        res = node.val;  // the new second min value stored as res
      }
    }

    dfs(root); // helper call

    return res === Infinity ? -1 : res; // if no second min value is found return -1 else return res
};