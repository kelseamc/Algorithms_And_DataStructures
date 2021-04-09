
const isSameTree = function(p,q) {

    // first we need to check if the node we are on is null
    if (p === null || q === null ){
        return p === q 
    }

    // next we need to check if their values are equal. If they are not equal we need to return false
    if (p.val !== q.val) {
        return false 
    }

    // we first traverse the right until base case, then travese left until base case 
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}

/*

This is a recursive solution. Line 5 is our base case, which returns true if both p and q are both null, and false if both are NOT null. 
Null represents the end of a branch, which is why we are using as a base case. 
We also need to check if the values of each node match. If they don't then our trees are not the same and we return false

Our return statement is our recursive call. We start by traversing the right side of the tree and then the left. If everthing matches (meaning values of each node are
    equal and our base case reuturns true) then our trees match and we return true. 

*/