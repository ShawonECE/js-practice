const isPalindrome = (s, left, right) => {
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

const validPalindrome = (s) => {
    const length = s.length;
    let i = 0;
    let j = length - 1;

    while (i <= j) {
        if (s[i] !== s[j]) {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }

        i++;
        j--;
    }

    return true;
};

const s = "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu";
console.log(validPalindrome(s));