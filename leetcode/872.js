const findLeaf = (root, arr) => {
    if(!root) {
        return;
    }

    if (!root.left && !root.right) {
        arr.push(root.val);
    }

    findLeaf(root.left, arr);
    findLeaf(root.right, arr);
};

const leafSimilar = (root1, root2) => {
    const leaves1 = [];
    const leaves2 = [];

    findLeaf(root1, leaves1);
    findLeaf(root2, leaves2);

    return leaves1.join(',') === leaves2.join(',');
};