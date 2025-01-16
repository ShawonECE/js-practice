const isUnivalTree = (root) => {
    const val = root.val;

    const preOrder = (current = root) => {
        if (!current) {
            return true;
        }

        if (current.val !== val) {
            return false;
        }

        return preOrder(current.left) && preOrder(current.right);
    };

    return preOrder();
};