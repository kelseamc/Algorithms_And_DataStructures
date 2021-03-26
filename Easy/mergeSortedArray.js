
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

//[1,2,3,0,0,0]  [2,5,6]
//     f     i        s



var merge = function(nums1, m, nums2, n) {
      let first = m - 1;                      // set variable to point to last initalized elmenent in nums1 =>  m is total initalized 
                                             // elements so m-1 is index of last initalized element
      let second = n - 1;                   // set variable to point to last initialized element in nums2 => n-1 for index
    
      for (var i = nums1.length - 1; i >= 0; i--) {  //because nums1 holds space for the elements in nums2 our returned array should be the same length.
                                                    // also think of it as m + n (being the number of initialized elements in each array) = length.
        if (second < 0) {                          // breaks loop once we have reached end of second array === done sorting and merging
          break;
        }
          
        if (first >= 0 && nums1[first] > nums2[second]) {  // check if the value at nums1[first] is greater than nums2[second]
          nums1[i] = nums1[first];                         // if greater set value to  nums1[i] value
          first--;                                         // move first pointer down 
        } else {
          nums1[i] = nums2[second];                        // if nums2[second] is greater set it to be the new value of nums1[i] 
          second--;                                        // move second pointer down
        }
      }
    };

// we want to start at the end of initialized elements of both the arrays because they are sorted. So we know that the greater value will 
//be placed at the end of the array. Here i is the index at the end of [1,2,3,0,0,0]. We want to compare the last two initialzed elements (m & n)
// and place the largest at index i. 
