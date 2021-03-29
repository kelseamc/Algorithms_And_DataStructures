
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){       //loop through the nums array
        if (nums[i] === target) return i        // check if value at index matches target, if so return that index i
        
        if (nums[i] > target) return i          // check if value is greater than the target value, if so you want to insert target at
                                                // position before the greater value which would be that values current index
    }                                           // if the value is less than target increment index and compare next value

    return nums.length                          // if all the values are less than the target then you want to return the length of array
                                                // which would be equal to the next index in the array
};