/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
*/

//Option 1 => refactored
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    
    for(let i =0;i<nums.length;i++) {
        if(nums[i] == max) continue
        if(nums[i] != 0 && Math.floor(max/nums[i]) < 2 ) return -1
    }
    return nums.indexOf(max)
};

//Option => orginally what I wrote
var dominantIndex = function(nums) {
    let maxEl = 0
    let maxIndex = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] > maxEl){
            maxEl = nums[i]
            maxIndex = i 
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (i !== maxIndex){
            if (maxEl < (nums[i] * 2)) return -1
        }
    }
    return maxIndex
}