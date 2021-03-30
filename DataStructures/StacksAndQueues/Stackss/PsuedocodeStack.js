/****************************************  Linked List Implementation  **************************************/

/********* Pushing **********/
// (adding value to top of stack)

// The function should accecpt a value 
// Create a new node with that value
// If there are no nodes in the stack, set first and last property to be newly created node
// If there is at least one node in stack, create a variable that stores the current first property on the stack
// Reset the first property to be the newly created node
// Set the next property on the node to be the previously created variable 
// Increment the size of the stack by one
// Return the size


/********* Pop **********/
// (removing value to top of stack)

// If there are no nodes in the list return null
// Create a temperary varible to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than 1 node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the node removed