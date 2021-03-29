// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// abcabcbb
// l
//   r

var lengthOfLongestSubstring = function(s) {
    let set = new Set()     // this is to keep track of letters in current window (substring)
    let left = 0            // pointer 1 at start of substring
    let right = 0           // pointer 2 at end of substring
    let maxLength = 0       // keeps track of length of substring with unique character

    while (right < s.length){
        if (!set.has(s.charAt(right))){               // check if char at index right exists in our set (meaning we already have that letter in our substring)
            set.add(s.charAt(right))                  // since char doesn't exist => add char to set
            maxLength = Math.max(maxLength, set.size) // check if new length is greater than maxLength & set maxLength to greatest value 
                                                        // set.size being the number of char in out subString
            right++                                     // move right pointer up one
        }
        else {                                          // if char exits in set, it is a duplicate
            set.delete(s.charAt(left))                  // so we want to remove the first letter in our substring and loop throught again
            left++                                      // move the left pointer up one removing the first char from substring
                                                        //then the loop is repeated and checks if the char at the right index is still 
                                                        //in our set and repeats until no duplicates
        }

    }
    return maxLength                                     // return maxLength
};