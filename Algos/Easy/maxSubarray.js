
//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
   
    if (nums.length === 0) return 0  // end case check if array is empty
    
    let currentSum = nums[0] // currentSum is the running maxSum. This is the value we will be changing. Start at the first value in array

    let maxSum = currentSum // this is total final sum that we will be returning. Set it equal to currentSum to start
    
    for (let i = 1; i < nums.length; i++){ // loop through the array started at the value of index 1
        
        let tempSum = currentSum + nums[i] // this is tempSum in our loop. Want to know what the sum is after adding our new value
        
        if (tempSum < nums[i]){ // check if tempSum is less than the value at index i. If it is, we want to set our new current sum to be that value
            currentSum = nums[i]
        }
        else {
            currentSum = tempSum // if tempSum is greater set that as our currentSum 
        }
        
        if (maxSum < currentSum) maxSum = currentSum // next need to check if our currentSum is geater than maxSum, and if so set the new value of maxSum
    }
    return maxSum
};