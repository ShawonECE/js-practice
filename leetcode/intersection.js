const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const res = [];

    if (set1.size < set2.size) {
        set1.forEach(num => {
            if (set2.has(num)) {
                res.push(num);
            }
        });
    } else {
        set2.forEach(num => {
            if (set1.has(num)) {
                res.push(num);
            }
        });
    }
    return res;
};

const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));
