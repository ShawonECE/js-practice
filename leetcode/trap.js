const findNext = (left, array) => {
    const length = array.length;
    let next = -1;
    let maxHeight = left + 1;
    for (let i = left + 1; i < length; i++) {
        if (array[i] >= array[left]) {
            return i;
        }
        if (array[i] > array[maxHeight]) {
            maxHeight = i;
        }
    }
    if (maxHeight > left + 1) {
        next = maxHeight;
    }
    return next;
};
const findBlack = (left, right, array) => {
    let black = 0;
    for (let i = left + 1; i < right; i++) {
        black = black + array[i];
    }
    return black;
};
const trap = (height) => {
    const length = height.length;
    let left = 0;
    let water = 0;
    let black = 0;
    while (left >= 0 && left < length) {
        let next = findNext(left, height);
        if (next === -1) {
            left++;
            continue;
        }
        let currentWater = Math.min(height[left], height[next]) * (next - left - 1);
        if (currentWater > 0) {
            water = water + currentWater;
            black = black + findBlack(left, next, height);
        }
        left = next;
    }
    return water - black;
};

const height = [4,2,3];
console.log(trap(height));