
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15


var subtractProductAndSum = function(n) { //constraints say n > 1 so we know n is not empty

    let sum = 0;  
    let product = 1; // have to start product at 1 because 0 * anything = 0

    while (n > 0) {
        let digit = n % 10; // this gives us the digit in the last postions so in this case the 4 in 234
        sum += digit; // add digit to sum
        product *= digit; // multiply digit to product

        n = Math.floor(n / 10); // divide n by 10 and round down to give us the next digit => 234 / 10 = 23.4 rounded down to 23 
                                // then loop back throught with 23 and repeat until n = 0
    }

    return product - sum;
};



// var subtractProductAndSum = function(n) {                  Fist solutions => this was a lot slower but 
//     let num = n.toString()
//     if (num.length === 0) return 0
//     let sum = 0
//     let product = 1
//     for (let i = 0; i < num.length; i++){
//          sum += parseInt(num[i])
//          product = product * parseInt(num[i])
//         }

//     return product - sum
// };