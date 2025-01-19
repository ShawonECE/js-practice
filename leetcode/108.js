class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

const sortedArrayToBST = (nums) => {
    const length = nums.length;

    const buildBST = (leftIdx = 0, rightIdx = length - 1) => {
        if (leftIdx > rightIdx) {
            return null;
        }
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        const root = new Node(nums[midIdx]);

        root.left = buildBST(leftIdx, midIdx - 1);
        root.right = buildBST(midIdx + 1, rightIdx);

        return root;
    };

    return buildBST();
};