const firstPalindrome = (words) => {
    for (const word of words) {
        let length = word.length;
        let left = 0;
        let right = length - 1;
        while (word[left] === word[right] && left <= right) {
            if (left === right || left === right - 1) {
                return word;
            }
            left++;
            right--;
        }
    }
    return '';
};

const words = ["def","ghi"];
console.log(firstPalindrome(words));