const intersect = (nums1, nums2) => {
    const memo1 = {};
    const memo2 = {};
    const res = [];

    for (const num of nums1) {
        if (memo1[num]) {
            memo1[num]++;
        } else {
            memo1[num] = 1;
        }
    }

    for (const num of nums2) {
        if (memo2[num]) {
            memo2[num]++;
        } else {
            memo2[num] = 1;
        }
    }

    for (const key in memo1) {
        if (memo2[key]) {
            let min = Math.min(memo1[key], memo2[key]);
            for (let i = 0; i < min; i++) {
                res.push(parseInt(key));
            }
        }
    }

    return res;
};

const nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersect(nums1, nums2));
