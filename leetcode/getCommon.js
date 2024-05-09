const getCommon = (nums1, nums2) => {
    const length1 = nums1.length;
    const length2 = nums2.length;
    let left = 0, right = 0;
    while (left < length1 && right < length2) {
        if (nums1[left] === nums2[right]) {
            return nums1[left];
        } else if (nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
    return -1;
};

const nums1 = [1,2,3], nums2 = [2,4];
console.log(getCommon(nums1, nums2));