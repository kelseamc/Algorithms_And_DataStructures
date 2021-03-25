 
 
//  Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
//  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//  Clarification:
//  Confused why the returned value is an integer but your answer is an array?
//  Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]

var removeDuplicates = function(nums) {

    // end case if nums is empty
    if (!nums.length) return 0
    
    // set a pointer to reference to compare to
    let pointer1 = 0
    
    // loop throught the array of nums starting at element after pointer1
    for(let pointer2 = 1; pointer2 < nums.length; pointer2++){

        // check if value at 1 is not a duplicate for value at 2
         if (nums[pointer1] !== nums[pointer2]) {

            // if they don't match increase move pointer 1 up
             pointer1++;

            // set the value at index pointer2 as the new value at pointer1
             nums[pointer1] = nums[pointer2];
         }

         // if the value at pointer2 is a duplicate of value at pointer1 the loop will move to next value and
         // compare that to value pointer1 until a nonmatch is found 
    }

    // because we are replacing values with nonmatch values as we iterate over the array pointer 1 will end up at the last index of unique
    // values. So if we add 1 to the value (index) of pointer 1 we will return the length of array with unique elements.
    return pointer1 + 1
};