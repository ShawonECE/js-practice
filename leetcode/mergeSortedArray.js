const merge = (nums1, m, nums2, n) => {
    let position = 0;
    nums1.splice(m);
    if(!nums1.length) {
        nums1.push(...nums2);
        return;
    }

    while (nums2.length) {
        let numberToInsert = nums2.shift();
        if (nums1[nums1.length - 1] <= numberToInsert) {
            nums1.push(numberToInsert);
        } else {
            for (let i = position; i < nums1.length; i++) {
                if (nums1[i] > numberToInsert) {
                    nums1.splice(i, 0, numberToInsert);
                    position = i + 1;
                    break;
                }
            }
        }
    }
};

const array1 = [0];
const array2 = [1];
merge(array1, 0, array2, 1);

console.log(array1);
