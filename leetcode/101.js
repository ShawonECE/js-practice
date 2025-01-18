const symmetryFinder = (leftNode, rightNode) => {
    if ((!leftNode && !rightNode)) {
        return true;
    }

    if (!leftNode || !rightNode) {
        return false;
    }

    return (leftNode.val === rightNode.val) && symmetryFinder(leftNode.left, rightNode.right) && symmetryFinder(leftNode.right, rightNode.left);
};

const isSymmetric = (root) => {
    return symmetryFinder(root.left, root.right);
};