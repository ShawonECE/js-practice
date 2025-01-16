const leftDepth = (root) => {
    if (!root) {
        return 0;
    }
    const depth = leftDepth(root.left);
    return depth + 1;
};

const rightDepth = (root) => {
    if (!root) {
        return 0;
    }
    const depth = rightDepth(root.right);
    return depth + 1;
};

const countNodes = (root) => {
    if (!root) {
        return 0;
    }
    const leftHeight = leftDepth(root);
    const rightHeight = rightDepth(root);

    if (leftHeight === rightHeight) {
        return 2**leftHeight - 1;
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
};