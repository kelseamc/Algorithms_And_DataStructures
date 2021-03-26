

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//  Return the linked list sorted as well.


// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


var deleteDuplicates = function(head) {

    let current = head                  // set current position to the head
    
    while (current !== null && current.next !== null){ // start a loop that while our current node is not null and our next node is not null
        if (current.val === current.next.val){        // check if the current value is equal to the current.next node's value
            current.next = current.next.next          // if equal set our current node's next to the node after our current next 
        }
        else {
            current = current.next                   // if they are NOT equal move current position to the next node
        }
        
    }
    
    return head                                      // return head because that is the beginning of our newly sorted list where current is just
                                                    // our current position on a node in the list
 
    
};