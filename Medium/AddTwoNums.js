
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807




var addTwoNumbers = function(l1, l2) {
    // create a new list with a dummyHead of 0 to start
    let dummyHead = new ListNode(0)
    let current = dummyHead
    
    // set pointers for list 1 and list 2
    let p1 = l1
    let p2 = l2
    
    // set carry to be zero to start
    let carry = 0
    
    //create a while loop checking if pointers are at end of list (null)
    while (p1 !== null || p2 !== null){
        // set x and y to the pointer values of each list. If pointer is null set value to zero
        let x = (p1 !== null) ? p1.val : 0
        let y = (p2 !== null) ? p2.val : 0
        
        // calculate the sum of the two pointers plus what was carried over from the last sum 
        // ex. 8 + 4 = 12 => create a new node w/ value 2 and carry over the 1
        let sum = x + y + carry
        
        // set carry to the sum divided by 10 rounded down. This gives you the carry over amount to be 
        // applied to the next sum
        carry = Math.floor(sum / 10)
        
        // create a new node who's value is the remainder of the sum divided by 10 (ex. 8 + 4 = 12 => 2 )
        // set that new node to current.next
        current.next = new ListNode(sum % 10)
        
        // now set the new value of current to the next node
        current = current.next
        
        // if the pointers have a next node move to that next node
        if(p1 !== null) p1 = p1.next
        if(p2 !== null) p2 = p2.next
    }
    
    // once the end of each list is reached. Check if there is a carry value left
    // if there is, create a new node with that carry value and set it to the current node's next
    if (carry > 0) current.next = new ListNode(carry)
    
    // return the linked list
    return dummyHead.next
};