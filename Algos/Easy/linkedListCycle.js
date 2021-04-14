/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

[3,2,0,-4]
 1
 2
*/

var hasCycle = function(head) {
    // set two pointers starting at head
    let r1 = head 
    let r2 = head
    while (r1 && r1.next) { // loop until either pointer comes back null. This means we reached end of linked list so we return false
        r1 = r1.next.next; // move pointer to two nodes from position
        r2 = r2.next; // move pointer one node from position
        if (r1 == r2) { // if there is a cycle eventually pointer 1 and pointer 2 will end up at the same postion
            return true; // so we return true
        }
    } 
    return false;
};