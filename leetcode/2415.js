const reverseOddLevels = (root) => {
    const traverse = (left, right, level) => {
        if(!left && !right) {
            return;
        }

        traverse(left.left, right.right, level + 1);
        traverse(left.right, right.left, level + 1);

        if (level % 2 !== 0) {
            [left.val, right.val] = [right.val, left.val];
        }
    };

    traverse(root.left, root.right, 1);
    return root;
};