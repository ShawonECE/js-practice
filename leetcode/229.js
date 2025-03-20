const majorityElement = (nums) => {
    const count = new Map();
    const majority = new Set();

    for (const num of nums) {
        if (count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else {
            count.set(num, 1);
        }

        if (count.get(num) > nums.length / 3 && !majority.has(num)) {
            majority.add(num);

            if (majority.size === 2) {
                break;
            }
        }
    }

    return Array.from(majority);
};