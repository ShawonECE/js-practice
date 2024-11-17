const findKthPositive = (arr, k) => {
    const length = arr.length;
    const missing = [];

    if (arr[0] !== 1) {
        for (let i = 1; i < arr[0]; i++) {
            missing.push(i);

            if (missing.length === k) {
                return missing[missing.length - 1];
            }
        }
    }

    for (let i = 1; i < length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            for (let j = arr[i - 1] + 1; j < arr[i]; j++) {
                missing.push(j);
                if (missing.length === k) {
                    return missing[missing.length - 1];
                }
            }
        }
    }
    
    if (missing.length < k) {
        return arr[length - 1] + k - missing.length;
    }
};

const arr = [1,3], k = 1;
console.log(findKthPositive(arr, k));