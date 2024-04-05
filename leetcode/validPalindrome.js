const isPalindrome = (s) => {
    const regex = /[a-zA-Z0-9]/;
    const length = s.length;
    let left = 0;
    let right = length - 1;
    if (length === 1) {
        return true;
    }

    while (left <= right) {
        if (!regex.test(s[left])) {
            left++;
            continue;
        }

        if (!regex.test(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
};

const s = "s";
console.log(isPalindrome(s));