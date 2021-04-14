/*
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

*/

var sumOddLengthSubarrays = function(arr) {
    let oddSum = sumOfArray(arr) // for subarry.length === 1 *each element in array
    for(let i = 0; i < arr.length; i++){ // loop through the array starting at index 0
        for (let j = i + 2; j < arr.length; j+=2){ // second loop checks all subArrays that start at index i with an odd length by incrementing j by 2 
            let sub = arr.slice(i, j+1) // create a subArray based on i and j
            oddSum = oddSum + sumOfArray(sub) // add sum of subArray to the oddSum
        }
    }
    return oddSum // return odd sum
};


function sumOfArray(arr){  // helper function to calculate the sum of arr passed in
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}