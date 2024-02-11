// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// using string
// const isPalindrome = (x) => {
//     const string = x.toString();
//     let newString = '';
//     for (let char of string) {
//         newString = char + newString;
//     }
//     return newString == string;
// };

// without using string
const isPalindrome = (x) => {
    let temp = x;
    let reverse = 0;

    while (temp > 0) {
        reverse = (reverse * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return reverse === x;
};

console.log(isPalindrome(-212));