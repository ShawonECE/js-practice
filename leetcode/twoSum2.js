const twoSum2 = (numbers, target) => {
    const length = numbers.length;
    let left = 1;
    let right = length;
    while (left < right) {
        let sum = numbers[left - 1] + numbers[right - 1];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};

const numbers = [-1,0], target = -1;
console.log(twoSum2(numbers, target));
