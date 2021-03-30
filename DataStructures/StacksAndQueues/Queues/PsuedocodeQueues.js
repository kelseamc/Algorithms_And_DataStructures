/****************************************  Linked List Implementation  **************************************/

/********* Enqueue **********/
// (adding value to end of queue)

// This function accepts a val
// Create a new node with passed in val
// If there are no nodes in the queue, set first and last properties to new node
// Otherwise, set the next property on the current last to be the new node and set the last property of the queue to be new node
// Increment the size
// Return new size



/********* Dequeue **********/
// (Remove value to end of queue)

// If there is no first property, return null
// Store the first property as a variable 
// See if the first is the same as the last (only 1 node). If so set the first and last to 
//     be null
// If there is more than one node, set the first property to be the next property of first
// Decrement the size by one
// Return the value of removed node