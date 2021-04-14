// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

/*
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

*/

var countConsistentStrings = function(allowed, words) {
    let sum = 0; // declare return variable
    for (let word of words) { // loop through the words array
        let includes = false; // initiate includes boolean to be false
        for(let c of word) { // loop through each character of the word from words array
            if (!allowed.includes(c)){ // check if the character is not in the allowed string
                includes = false; // if character not "allowed" set includes to false and break out of loop
                break;
            } else {
                includes = true; // if the char is "allowed" set includes to true and loop to next character
            }
        }
        if (includes){ // after looping through the entire word if includes is true (meaning all char in word were "allowed")
            sum++  // increment the sum
        }
    }
    return sum // return the number of words that are "allowed"
};