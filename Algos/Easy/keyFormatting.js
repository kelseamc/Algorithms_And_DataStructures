/*
You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. 
The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, 
which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between 
two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
*/

var licenseKeyFormatting = function(s, k) {
    // Remove existing dashes and convert any lowercase letters to uppercase
        const newStr = s.split('-').join('').toUpperCase()
        
       // Convert string to an array so we can manipulate it
        let arr = newStr.split(''); 
    
   // Loop through array backwards and decrement by value of K 
    for (let i = arr.length - 1 - k; i >= 0; i-= k) { 
        // add a  -  to the element at index i by adding the two strings together
        arr[i] = arr[i] + '-';
    }
    // join the array back together and return the string
    return arr.join('');
};

let spaceCount = 0;
const words = [];
let word = "";

for (const char of text) {
    if (char === " ") {
        if (word != "") words.push(word);
        word = "";
        spaceCount++;
    }
    else {
        word += char;
        
    }
}

if (word != "") words.push(word);

const counts = Math.floor(spaceCount / (words.length - 1));

let res = "";

for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
        res += " ".repeat(counts);
        spaceCount -= counts;
    }
    
    res += words[i];

}

return res + " ".repeat(spaceCount);