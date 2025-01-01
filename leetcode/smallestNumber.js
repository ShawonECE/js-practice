const reverse = (arr, left, right) => {
    // console.log('reverse is called', left, right);
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};

const smallestNumber = (pattern) => {
    const size = pattern.length + 1;
    const result = [];

    for (let i = 1; i <= size; i++) {
        result.push(i);
    }

    let i = 0;
    while(i < pattern.length) {
        let left, right;
        if (pattern[i] === 'D') {
            left = i;
            let j = i;
            while(j < pattern.length) {
                if (pattern[j] === 'D' && pattern[j + 1] !== 'D') {
                    right = j + 1;
                    break;
                }
                j++;
            }

            reverse(result, left, right);
            i = right + 1;
        } else {
            i++;
        }
    }

    return result.join('');
};

const pattern = "DDD";
console.log(smallestNumber(pattern));