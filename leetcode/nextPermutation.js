const containsGreater = (num, array) => {
    for (const element of array) {
        if (element > num) {
            return true;
        }
    }
    return false;
};
const greater = (num, array) => {
    const result = [];
    for (const element of array) {
        if (element > num) {
            result.push(element);
        }
    }
    return result;
};

const nextPermutation = (nums) => {
    const last = nums.length - 1;
    if (nums[last] > nums[last - 1]) {
        let temp = nums[last];
        nums[last] = nums[last - 1];
        nums[last - 1] = temp;
    } else {
        let key = last - 2;
        while (key >= 0) {
            let sub = nums.slice(key + 1);
            if (!containsGreater(nums[key], sub)) {
                key--;
            } else {
                break;
            }
        }
        let arr = nums.slice(key + 1);
        let larger = greater(nums[key], arr);
        if (larger.length === 0) {
            nums.sort((a, b) => a - b);
        } else {
            let successor = nums.slice(key + 1).indexOf(Math.min(...larger)) + key + 1;
            let tempo = nums[key];
            nums[key] = nums[successor];
            nums[successor] = tempo;
            let array = nums.slice(key + 1);
            array.sort((a, b) => a - b);
            for (let i = 0; i < last - key; i++) {
                nums[key + 1 + i] = array[i];
            }
        }
    }
};

const array = [5,4,7,5,3,2];
nextPermutation(array)
console.log(array);