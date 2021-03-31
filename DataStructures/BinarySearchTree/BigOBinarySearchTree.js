/*************************************************** Big O Binary Search Tree ***********************************************************/

/*

Insertiion => O(log n)
                                    ** not guaranteed! this is best case **
Search => O(log n)

** If you double the number of nodes, you only increase the number of steps to insert or find by 1 **
        >> 2x number of nodes => 1 extra step
        >> 4x number of nodes => 2 extra steps
        >> 8x number of nodes => 3 extra steps 
        * this is how we get the O(log n) time complexity 


    WORST CASE (one sided tree)
    ~ Insertiion => O(n)
    ~ Search => O(n)


*/

