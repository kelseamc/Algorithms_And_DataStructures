
/******** Insert *********/
// Push the value into the values property on the Heap
// Bubble the value up to its correct position
    // create a variable called index which is the length of the values property - 1
    // create a variable called called parentIndex which is the floor of (index - 1)/2
    // keep looping as long as the values element at the parentIndex is less than the values element at the child index
        // Swap the value of values element at the parentIndex witht he value of the element property at the child index
        // set the index to be the parent index and start over


/******** Extract Max *********/
// Swap the first value in the values property with the last one 
// Pop from the values property, so you can return the value at the end
// Have the "new root" sink down to the correct spot 
    // your parent index starts at 0 (root)
    // find the index of the left child => 2n + 1 (make sure it is not out of bounds)
    // find the index of the right child => 2n + 2 (make sure it is not out of bounds)
    // if the left or right child is greater than the element... swap. If both the left and right are larger, swap the largest child
    // the child index you swapped to, now becomes the new parent index
    // keep looping and swapping until neither child is larger than the element 
// return the old root 
    




/******** Priority Queue *********/

